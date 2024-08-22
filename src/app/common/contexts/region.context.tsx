"use client";
import React from "react";
import { IRegionStore } from "./stores/region-store";

interface RegionState {
  region: string | null;
}

export interface RegionContext {
  setRegion: (region: string) => void;
  state: RegionState;
}

export const RegionContext = React.createContext<RegionContext | null>(null);

interface SetRegionAction {
  type: "SET_REGION";
  payload: string;
}

type RegionAction = SetRegionAction;

const RegionReducer = (state: RegionState, action: RegionAction) => {
  switch (action.type) {
    case "SET_REGION":
      return {
        ...state,
        region: action.payload,
      };
    default:
      return state;
  }
};

export const RegionProvider: React.FC<
  React.PropsWithChildren<{ store: IRegionStore }>
> = ({ children, store }) => {
  const [state, dispatch] = React.useReducer(RegionReducer, {
    region: store.get(),
  });

  const stateCopy = Object.assign({}, state);

  const setRegion = (region: string) => {
    store.set(region);
    dispatch({ type: "SET_REGION", payload: region });
  };

  return (
    <RegionContext.Provider value={{ setRegion, state: stateCopy }}>
      {children}
    </RegionContext.Provider>
  );
};

export const useRegions = () => {
  return React.useContext(RegionContext);
};
