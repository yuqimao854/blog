export interface Repository<T> {
  repository: T;
}

export interface Issues {
  nodes: IssueContentBaseFields[];
  pageInfo: {
    hasNextPage: boolean;
    endCursor: string;
  };
  totalCount: number;
}

export interface IssueContentBaseFields {
  number: number;
  title: string;
  createdAt: string;
  updatedAt: string;
  labels: Labels;
  id: string;
}

export interface IssueContent extends IssueContentBaseFields {
  url: string;
  bodyHTML: string;
}

export interface Label {
  name: string;
  color: string;
  id: string;
}

export interface Labels {
  nodes: Label[];
}

export type IRepositoryIssues = Repository<{ issues: Issues }>;
export type IRepositoryIssue = Repository<{ issue: IssueContent }>;

export type IRepositoryFile = Repository<{ object: { text: string } }>;
