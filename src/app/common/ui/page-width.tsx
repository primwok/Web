export const PageWidth: React.FC<
  React.PropsWithChildren<{
    children: React.ReactNode;
    width?: string;
  }>
> = ({ children, width }) => {
  return (
    <div className={`max-w-[1440px] w-full h-full mr-auto ml-auto`}>
      {children}
    </div>
  );
};
