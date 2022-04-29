import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import { ParsedUrlQuery } from 'querystring';
import { IssueContent } from '@interfaces';
import { queryPostByNumber } from '@utils';
import _ from 'lodash';

interface IPostPageParams extends ParsedUrlQuery {
  number: string;
}

interface PostProps {
  issue: IssueContent;
}

const Post: NextPage<IssueContent> = (props: IssueContent) => {
  console.log(props);
  const { title } = props;
  return (
    <div>
      <Head>
        <title>{title} | yuqimao854</title>
      </Head>
      <div> i am post</div>
    </div>
  );
};

export default Post;

export const getServerSideProps: GetServerSideProps<
  PostProps,
  IPostPageParams
> = async (context) => {
  const { params } = context;

  const issueNumber = parseInt(params!.number);
  const {
    repository: { issue },
  } = await queryPostByNumber(issueNumber);

  return {
    props: {
      issue,
    },
  };
};
