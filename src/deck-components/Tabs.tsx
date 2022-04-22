import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

export const TabTitle: FC<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={`quickaccessmenu_Title_34nl5 ${className}`} {...props}>
      {children}
    </div>
  );
};
