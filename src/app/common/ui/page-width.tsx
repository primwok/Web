export const PageWidth: React.FC<
  React.PropsWithChildren<{
    children: React.ReactNode;
    width?: string;
  }>
> = ({ children, width }) => {
  return (
    <div className={`max-w-[1440px] w-auto h-auto mr-auto ml-auto`}>
      {children}
    </div>
  );
};
