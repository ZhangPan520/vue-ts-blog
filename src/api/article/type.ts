export interface IArticle {
  title: string;
  content: string;
  tags: Array<string>;
  view_count: number;
  user_id: string;
  article_id: string;
  createDate: number;
}

export interface IArticleListParam {
  page?: number;
  limit?: number;
  sortField?: string;
  sortMethod?: string;
  searchKey?: string;
  tagKey?: string;
}

export interface IArticleList {
  status: number;
  msg: string;
  data: IArticle[];
  totalCount: number;
  count: number;
  pageInfo: {
    page?: number;
    limit?: number;
    sortField?: string;
    sortMethod?: string;
  };
}
