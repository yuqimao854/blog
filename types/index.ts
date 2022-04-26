export interface Repository<T> {
    repository: T
  }
  
  export interface Issues {
    nodes: IssueContentBaseFields[]
    pageInfo: {
      hasNextPage: boolean
      endCursor: string
    }
    totalCount: number
  }
  
  export interface IssueContentBaseFields {
    number: number
    title: string
    createdAt: string
    updatedAt: string
    labels: Labels
  }
  
  export interface IssueContent extends IssueContentBaseFields {
    url: string
    bodyHTML: string
  }
  
  export interface Label {
    name: string
    color: string
  }
  
  export interface Labels {
    nodes: Label[]
  }
  
  export type IRepositoryIssues = Repository<{ issues: Issues }>
  export type RepositoryIssue = Repository<{ issue: IssueContent }>
  
  export type RepositoryFile = Repository<{ object: { text: string } }>