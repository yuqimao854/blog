import { IRepositoryIssues } from "../types";
import { graphql } from "./request";
export const REPO_OWNER = 'yuqimao854'
export const REPO_NAME = 'blog'


export const queryPostsFromIssues = () =>
 graphql<IRepositoryIssues>(
  ` query queryPostsFromIssues($owner: String!, $name: String!) {
      repository(owner: $owner, name: $name) {
        issues(
          states: CLOSED
          first: 100
          orderBy: { field: CREATED_AT, direction: DESC }
          filterBy: { createdBy: $owner }
        ) {
          nodes {
            number
            title
            createdAt
            updatedAt
            labels(first: 5) {
              nodes {
                color
                name
              }
            }
          }
          pageInfo {
            hasNextPage
            endCursor
          }
          totalCount
        }
      }
    }
  `,
  {
    owner: REPO_OWNER,
    name: REPO_NAME,
  }
)