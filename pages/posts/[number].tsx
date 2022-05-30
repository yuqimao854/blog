import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import { ParsedUrlQuery } from 'querystring';
import { IssueContent } from '@interfaces';
import { formatDate, queryPostByNumber } from '@utils';
import _ from 'lodash';
import Link from 'next/link';
import { Tag } from 'components';
import { CalendarIcon } from 'components/Icon';

interface IPostPageParams extends ParsedUrlQuery {
  number: string;
}

interface PostProps {
  issue: IssueContent;
}

const Post: NextPage<PostProps> = (props: PostProps) => {
  const { issue } = props;
  const { title, labels, createdAt, url, bodyHTML } = issue;

  return (
    <div>
      <Head>
        <title>{title} | yuqimao854</title>
      </Head>

      <div className='px-8 md:px-12 lg:px-24 xl:px-32 font-inconsolata'>
        <header className=' py-4'>
          <h1
            className='text-4xl font-semibold text-gray-700 dark:text-white hover:translate-y-0.5 
          hover:text-gray-500 hover:scale-110 transition-all inline-block '
          >
            <Link href='/'>yuqimao854</Link>
          </h1>
        </header>

        <main className='xl:mt-10  lg:mt-4 '>
          <div>
            <div className='flex items-center text-lg '>
              <span className=' mr-3'>Tag »</span>
              {labels.nodes.map((item) => (
                <Tag key={item.id} name={item.name}>
                  {item.name}
                </Tag>
              ))}
            </div>

            <h1 className='my-4 text-3xl font-bold transition-colors duration-700 ease-in-out-quart'>
              {title}
            </h1>

            <p className='flex items-center text-base text-slate-800  '>
              <CalendarIcon className=' mr-2 text-lg' />
              <span>{formatDate(createdAt)} </span>
              <a
                className='ml-4 duration-700 ease-in-out-quart transition-colors  underline hover:text-gray-800 dark:hover:text-gray-400'
                href={url}
                target='_blank'
                rel='noreferrer'
              >
                View on Github
              </a>
            </p>
          </div>
          <article className='markdown-body max-w-3xl mx-auto lg:p-8 mt-16'>
            <div
              className='markdown-body-content mb-16 transition-colors duration-700 ease-in-out-quart'
              dangerouslySetInnerHTML={{ __html: bodyHTML }}
            ></div>
          </article>
        </main>

        <footer></footer>
      </div>
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
