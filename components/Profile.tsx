import { FC } from 'react';

interface IProfileProps {
  profile: string;
}

export const Profile: FC<IProfileProps> = (props: IProfileProps) => {
  const { profile } = props;
  return (
    <div
      className='xl:px-16 xl:py-24  lg:py-20 lg:px-12 lg:fixed lg:top-0 lg:w-[40vw]    profile-markdown  markdown-body '
      dangerouslySetInnerHTML={{ __html: profile }}
    ></div>
  );
};
