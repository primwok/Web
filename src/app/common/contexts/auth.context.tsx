import React from "react";

const AuthContext = React.createContext({});

export const AuthProvider: React.FC<
  React.PropsWithChildren<{ store: any }>
> = ({ children, store }) => {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return React.useContext(AuthContext);
};
