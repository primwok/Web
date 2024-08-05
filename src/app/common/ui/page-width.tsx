export const PageWidth: React.FC<
  React.PropsWithChildren<{
    children: React.ReactNode;
    width?: string;
  }>
> = ({ children, width }) => {
  return <div className={`max-w-[1920px] w-full`}>{children}</div>;
};
