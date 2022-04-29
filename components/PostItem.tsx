import Link from 'next/link';
import type { FC } from 'react';
import { IssueContentBaseFields } from '@interfaces';
import { formatDate } from '@utils';
import { CalendarIcon } from './Icon';

export const PostItem: FC<IssueContentBaseFields> = (
  props: IssueContentBaseFields
) => {
  const { title, createdAt, labels, number } = props;
  return (
    <div className='  mb-2 lg:mb-0 cursor-pointer md:group-hover:opacity-50  bg-slate-200  md:hover:scale-110 md:hover:!opacity-100  h-full p-6 md:p-10   hover:shadow-sm transition duration-700 ease-in-out-quart'>
      <Link href={`/posts/${number}`}>
        <div>
          <h4 className='font-semibold text-lg uppercase'>
            {labels.nodes.map((item) => {
              return (
                <span
                  className="after:content-[','] last:after:content-none"
                  key={item.id}
                >
                  {item.name}{' '}
                </span>
              );
            })}
          </h4>
          <p className='flex items-center text-secondary text-md'>
            <CalendarIcon className=' mr-2' />
            <span>{formatDate(createdAt)} </span>
          </p>

          <div className='font-semibold break-words text-xl mt-8 md:text-2xl md:mt-14'>
            {title}
          </div>
        </div>
      </Link>
    </div>
  );
};
