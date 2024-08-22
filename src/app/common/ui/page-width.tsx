// export const PageWidth: React.FC<
//   React.PropsWithChildren<{
//     children: React.ReactNode;
//     width?: string;
//   }>
// > = ({ children, width }) => {
//   return (
//     <div className={`max-w-[1440px] w-full h-auto mr-auto ml-auto`}>
//       {children}
//     </div>
//   );
// };

import React, { ReactElement } from "react";

export const PageWidth: React.FC<
  React.PropsWithChildren<{
    children: React.ReactNode;
    width?: string;
  }>
> = ({ children, width }) => {
  // Handle single child element
  const modifyElement = (element: ReactElement) => {
    return React.cloneElement(element, {
      className: `max-w-[1440px] w-full h-auto mr-auto ml-auto ${
        element.props.className || ""
      }`,
      // style: {
      //   ...(element.props.style || {}),
      //   width: width || "auto",
      // },
    });
  };

  if (React.isValidElement(children)) {
    // Single child element
    return <>{modifyElement(children)}</>;
  } else if (Array.isArray(children)) {
    // Multiple children, handle each
    return (
      <>
        {children.map((child, index) =>
          React.isValidElement(child) ? modifyElement(child) : child
        )}
      </>
    );
  }

  // If children is not a valid React element or an array
  return <>{children}</>;
};
