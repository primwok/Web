"use client";
import React from "react";
import { IAuthStore } from "./stores/auth-store";

interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
}

interface AuthContext {
  login: (token: string) => void;
  logout: () => void;
  state: AuthState;
}

interface LoginAction {
  type: "LOGIN";
  payload: string;
}

interface LogoutAction {
  type: "LOGOUT";
}

type AuthAction = LoginAction | LogoutAction;

const AuthContext = React.createContext<AuthContext | null>(null);

const AuthReducer = (state: AuthState, action: AuthAction) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        token: action.payload,
        isAuthenticated: true,
      };
    case "LOGOUT":
      return {
        ...state,
        token: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export const AuthProvider: React.FC<
  React.PropsWithChildren<{ store: IAuthStore }>
> = ({ children, store }) => {
  const [state, dispatch] = React.useReducer(AuthReducer, {
    token: store.get(),
    isAuthenticated: !!store.get(),
  });

  const stateCopy = Object.assign({}, state);

  const login = (token: string) => {
    store.set(token);
    dispatch({ type: "LOGIN", payload: token });
  };

  const logout = () => {
    store.clear();
    dispatch({ type: "LOGOUT" });
  };

  const ctx = {
    login,
    logout,
    state: stateCopy,
  };

  return <AuthContext.Provider value={ctx}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return React.useContext(AuthContext);
};
