import Http from '@/utils/http.js';

export const queryTrainVideoByTrainIdForPage = params => {
  return Http.get('/api/sale-api/seller/train/queryTrainVideoByTrainIdForPage', { data: params });
};
