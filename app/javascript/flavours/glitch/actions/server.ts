import {
  apiGetInstance,
  apiGetExtendedDescription,
  apiGetDomainBlocks,
  apiGetTranslationLanguages,
} from 'flavours/glitch/api/instance';
import { createDataLoadingThunk } from 'flavours/glitch/store/typed_functions';

import { importFetchedAccount } from './importer';

export const fetchServer = createDataLoadingThunk(
  'server/fetch',
  () => apiGetInstance(),
  (instance, { dispatch }) => {
    if (instance.contact.account) {
      dispatch(importFetchedAccount(instance.contact.account));
    }
  },
);

export const fetchExtendedDescription = createDataLoadingThunk(
  'server/extended_description',
  () => apiGetExtendedDescription(),
);

export const fetchServerTranslationLanguages = createDataLoadingThunk(
  'server/translation_languages',
  () => apiGetTranslationLanguages(),
);

export const fetchDomainBlocks = createDataLoadingThunk(
  'server/domain_blocks',
  () => apiGetDomainBlocks(),
);
