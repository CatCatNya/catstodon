import { useCallback, useEffect, useMemo } from 'react';

import { FormattedMessage } from 'react-intl';

import classNames from 'classnames';
import { Link } from 'react-router-dom';

import type { Map as ImmutableMap } from 'immutable';

import QuoteIcon from '@/images/quote.svg?react';
import ArticleIcon from '@/material-icons/400-24px/article.svg?react';
import ChevronRightIcon from '@/material-icons/400-24px/chevron_right.svg?react';
import { Icon } from 'flavours/glitch/components/icon';
import StatusContainer from 'flavours/glitch/containers/status_container';
import { domain } from 'flavours/glitch/initial_state';
import type { Status } from 'flavours/glitch/models/status';
import type { RootState } from 'flavours/glitch/store';
import { useAppDispatch, useAppSelector } from 'flavours/glitch/store';

import { revealAccount } from '../actions/accounts_typed';
import { fetchStatus } from '../actions/statuses';
import { makeGetStatus } from '../selectors';
import { getAccountHidden } from '../selectors/accounts';

const MAX_QUOTE_POSTS_NESTING_LEVEL = 1;

const QuoteWrapper: React.FC<{
  isError?: boolean;
  children: React.ReactElement;
}> = ({ isError, children }) => {
  return (
    <div
      className={classNames('status__quote', {
        'status__quote--error': isError,
      })}
    >
      <Icon id='quote' icon={QuoteIcon} className='status__quote-icon' />
      {children}
    </div>
  );
};

const NestedQuoteLink: React.FC<{ status: Status }> = ({ status }) => {
  const accountId = status.get('account') as string;
  const account = useAppSelector((state) =>
    accountId ? state.accounts.get(accountId) : undefined,
  );

  const quoteAuthorName = account?.display_name_html;

  if (!quoteAuthorName) {
    return null;
  }

  const quoteAuthorElement = (
    <span dangerouslySetInnerHTML={{ __html: quoteAuthorName }} />
  );
  const quoteUrl = `/@${account.get('acct')}/${status.get('id') as string}`;

  return (
    <Link to={quoteUrl} className='status__quote-author-button'>
      <FormattedMessage
        id='status.quote_post_author'
        defaultMessage='Post by {name}'
        values={{ name: quoteAuthorElement }}
      />
      <Icon id='chevron_right' icon={ChevronRightIcon} />
      <Icon id='article' icon={ArticleIcon} />
    </Link>
  );
};

type QuoteMap = ImmutableMap<'state' | 'quoted_status', string | null>;
type GetStatusSelector = (
  state: RootState,
  props: { id?: string | null; contextType?: string },
) => Status | null;

const LimitedAccountHint: React.FC<{ accountId: string }> = ({ accountId }) => {
  const dispatch = useAppDispatch();
  const reveal = useCallback(() => {
    dispatch(revealAccount({ id: accountId }));
  }, [dispatch, accountId]);

  return (
    <>
      <FormattedMessage
        id='status.quote_error.limited_account_hint.title'
        defaultMessage='This account has been hidden by the moderators of {domain}.'
        values={{ domain }}
      />
      <button onClick={reveal} className='link-button'>
        <FormattedMessage
          id='status.quote_error.limited_account_hint.action'
          defaultMessage='Show anyway'
        />
      </button>
    </>
  );
};

export const QuotedStatus: React.FC<{
  quote: QuoteMap;
  contextType?: string;
  parentQuotePostId?: string | null;
  variant?: 'full' | 'link';
  nestingLevel?: number;
}> = ({
  quote,
  contextType,
  parentQuotePostId,
  nestingLevel = 1,
  variant = 'full',
}) => {
  const dispatch = useAppDispatch();
  const quoteState = useAppSelector((state) =>
    parentQuotePostId
      ? state.statuses.getIn([parentQuotePostId, 'quote', 'state'])
      : quote.get('state'),
  );

  const quotedStatusId = quote.get('quoted_status');
  const status = useAppSelector((state) =>
    quotedStatusId ? state.statuses.get(quotedStatusId) : undefined,
  );

  const shouldLoadQuote = !status?.get('isLoading') && quoteState !== 'deleted';

  const accountId: string | null = status?.get('account', null) as
    | string
    | null;

  const hiddenAccount = useAppSelector(
    (state) => accountId && getAccountHidden(state, accountId),
  );

  useEffect(() => {
    if (shouldLoadQuote && quotedStatusId) {
      dispatch(
        fetchStatus(quotedStatusId, {
          parentQuotePostId,
          alsoFetchContext: false,
        }),
      );
    }
  }, [shouldLoadQuote, quotedStatusId, parentQuotePostId, dispatch]);

  // In order to find out whether the quoted post should be completely hidden
  // due to a matching filter, we run it through the selector used by `status_container`.
  // If this returns null even though `status` exists, it's because it's filtered.
  const getStatus = useMemo(() => makeGetStatus(), []) as GetStatusSelector;
  const statusWithExtraData = useAppSelector((state) =>
    getStatus(state, { id: quotedStatusId, contextType }),
  );
  const isFilteredAndHidden = status && statusWithExtraData === null;

  let quoteError: React.ReactNode = null;

  if (isFilteredAndHidden) {
    quoteError = (
      <FormattedMessage
        id='status.quote_error.filtered'
        defaultMessage='Hidden due to one of your filters'
      />
    );
  } else if (quoteState === 'deleted') {
    quoteError = (
      <FormattedMessage
        id='status.quote_error.removed'
        defaultMessage='This post was removed by its author.'
      />
    );
  } else if (quoteState === 'unauthorized') {
    quoteError = (
      <FormattedMessage
        id='status.quote_error.unauthorized'
        defaultMessage='This post cannot be displayed as you are not authorized to view it.'
      />
    );
  } else if (quoteState === 'pending') {
    quoteError = (
      <FormattedMessage
        id='status.quote_error.pending_approval'
        defaultMessage='This post is pending approval from the original author.'
      />
    );
  } else if (quoteState === 'rejected' || quoteState === 'revoked') {
    quoteError = (
      <FormattedMessage
        id='status.quote_error.rejected'
        defaultMessage='This post cannot be displayed as the original author does not allow it to be quoted.'
      />
    );
  } else if (!status || !quotedStatusId) {
    quoteError = (
      <FormattedMessage
        id='status.quote_error.not_found'
        defaultMessage='This post cannot be displayed.'
      />
    );
  } else if (hiddenAccount && accountId) {
    quoteError = <LimitedAccountHint accountId={accountId} />;
  }

  if (quoteError) {
    return <QuoteWrapper isError>{quoteError}</QuoteWrapper>;
  }

  if (variant === 'link' && status) {
    return <NestedQuoteLink status={status} />;
  }

  const childQuote = status?.get('quote') as QuoteMap | undefined;
  const canRenderChildQuote =
    childQuote && nestingLevel <= MAX_QUOTE_POSTS_NESTING_LEVEL;

  return (
    <QuoteWrapper>
      {/* @ts-expect-error Status is not yet typed */}
      <StatusContainer
        isQuotedPost
        id={quotedStatusId}
        contextType={contextType}
        avatarSize={40}
      >
        {canRenderChildQuote && (
          <QuotedStatus
            quote={childQuote}
            parentQuotePostId={quotedStatusId}
            contextType={contextType}
            variant={
              nestingLevel === MAX_QUOTE_POSTS_NESTING_LEVEL ? 'link' : 'full'
            }
            nestingLevel={nestingLevel + 1}
          />
        )}
      </StatusContainer>
    </QuoteWrapper>
  );
};

interface StatusQuoteManagerProps {
  id: string;
  contextType?: string;
  [key: string]: unknown;
}

/**
 * This wrapper component takes a status ID and, if the associated status
 * is a quote post, it renders the quote into `StatusContainer` as a child.
 * It passes all other props through to `StatusContainer`.
 */

export const StatusQuoteManager = (props: StatusQuoteManagerProps) => {
  const status = useAppSelector((state) => {
    const status = state.statuses.get(props.id);
    const reblogId = status?.get('reblog') as string | undefined;
    return reblogId ? state.statuses.get(reblogId) : status;
  });
  const quote = status?.get('quote') as QuoteMap | undefined;

  if (quote) {
    return (
      /* @ts-expect-error Status is not yet typed */
      <StatusContainer {...props}>
        <QuotedStatus
          quote={quote}
          parentQuotePostId={status?.get('id') as string}
          contextType={props.contextType}
        />
      </StatusContainer>
    );
  }

  /* @ts-expect-error Status is not yet typed */
  return <StatusContainer {...props} />;
};
