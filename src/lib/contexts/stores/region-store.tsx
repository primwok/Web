"use client";
export const REGION_STORE_KEY = "region";

export interface IRegionStore {
  get: () => string | null;
  set: (value: string) => void;
}

export class RegionStore implements IRegionStore {
  constructor(private key: string) {}

  get() {
    if (typeof window !== "undefined") {
      return localStorage.getItem(this.key);
    }
    return null;
  }

  set(value: string) {
    if (typeof window !== "undefined") {
      return localStorage.setItem(this.key, value);
    }
  }
}

export const RegionStorage = new RegionStore(REGION_STORE_KEY);
