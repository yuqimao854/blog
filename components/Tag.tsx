import { FC, ReactNode } from 'react';

interface ITagProps {
  name: string;
  children: ReactNode;
}

export const Tag: FC<ITagProps> = (props: ITagProps) => {
  const { children } = props;
  return (
    <div className="after:content-[','] last:after:content-none mr-2 hover:text-gray-500 hover:scale-110 transition-all ">
      {children}
    </div>
  );
};
