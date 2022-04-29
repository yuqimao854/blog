import { FC } from 'react';

interface IProfileProps {
  profile: string;
}

export const Profile: FC<IProfileProps> = (props: IProfileProps) => {
  const { profile } = props;
  return (
    <div
      className='profile-markdown  markdown-body basis-5/12  bg-slate-100'
      dangerouslySetInnerHTML={{ __html: profile }}
    ></div>
  );
};
