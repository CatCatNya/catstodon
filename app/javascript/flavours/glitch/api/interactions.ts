import { apiRequestPost } from 'flavours/glitch/api';
import type { ApiStatusJSON } from 'flavours/glitch/api_types/statuses';
import type { StatusVisibility } from 'flavours/glitch/models/status';

export const apiReblog = (statusId: string, visibility: StatusVisibility) =>
  apiRequestPost<{ reblog: ApiStatusJSON }>(`v1/statuses/${statusId}/reblog`, {
    visibility,
  });

export const apiUnreblog = (statusId: string) =>
  apiRequestPost<ApiStatusJSON>(`v1/statuses/${statusId}/unreblog`);
