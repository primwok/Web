import React from "react";

export const RegionContext = React.createContext({});
export const RegionProvider: React.FC<
  React.PropsWithChildren<{ store: any }>
> = ({ children, store }) => {
  return <RegionContext.Provider value={{}}>{children}</RegionContext.Provider>;
};

export const useRegion = () => {
  return React.useContext(RegionContext);
};
