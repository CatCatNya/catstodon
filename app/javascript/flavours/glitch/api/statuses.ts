import api, { getAsyncRefreshHeader } from 'flavours/glitch/api';
import type { ApiContextJSON } from 'flavours/glitch/api_types/statuses';

export const apiGetContext = async (statusId: string) => {
  const response = await api().request<ApiContextJSON>({
    method: 'GET',
    url: `/api/v1/statuses/${statusId}/context`,
  });

  return {
    context: response.data,
    refresh: getAsyncRefreshHeader(response),
  };
};
