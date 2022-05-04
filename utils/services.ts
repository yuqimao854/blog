import {
  IRepositoryIssues,
  IRepositoryFile,
  IRepositoryIssue,
} from '@interfaces';
import { graphql, request } from './request';
export const REPO_OWNER = 'yuqimao854';
export const REPO_NAME = 'blog';

export const queryPostsFromIssues = () =>
  graphql<IRepositoryIssues>(
    `
      query queryPostsFromIssues($owner: String!, $name: String!) {
        repository(owner: $owner, name: $name) {
          issues(
            states: CLOSED
            first: 100
            orderBy: { field: CREATED_AT, direction: DESC }
            filterBy: { createdBy: $owner }
          ) {
            nodes {
              id
              number
              title
              createdAt
              updatedAt
              labels(first: 5) {
                nodes {
                  color
                  name
                  id
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
  );

export const queryPostByNumber = (number: number) =>
  graphql<IRepositoryIssue>(
    `
      query queryIssueByNumber($number: Int!, $owner: String!, $name: String!) {
        repository(owner: $owner, name: $name) {
          issue(number: $number) {
            number
            title
            url
            createdAt
            bodyHTML
            labels(first: 5) {
              nodes {
                color
                name
                id
              }
            }
          }
        }
      }
    `,
    {
      number,
      owner: REPO_OWNER,
      name: REPO_NAME,
    }
  );

export const queryProfileREADME = async () =>
  graphql<IRepositoryFile>(
    `
      query queryProfileREADME($owner: String!) {
        repository(owner: $owner, name: $owner) {
          object(expression: "main:README.md") {
            ... on Blob {
              text
            }
          }
        }
      }
    `,
    {
      owner: REPO_OWNER,
    }
  );

export const renderMarkdown = (text: string) =>
  request('POST /markdown', {
    text,
  });

// mix

export const renderProfileMarkdown = async () => {
  const res = await queryProfileREADME();
  return renderMarkdown(res.repository.object.text);
};
