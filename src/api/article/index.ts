import { comsrequest } from '@/request/index';
import type { IArticleList, IArticleListParam } from './type';

export function getArticle(params?: IArticleListParam) {
  return comsrequest.get<IArticleList>({
    url: 'getArticle',
    params,
  });
}
