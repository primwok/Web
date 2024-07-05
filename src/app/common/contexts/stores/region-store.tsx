"use client";
export const REGION_STORE_KEY = "region";

export interface IRegionStore {
  get: () => string | null;
  set: (value: string) => void;
}

export class RegionStore implements IRegionStore {
  constructor(private key: string) {}

  get() {
    return localStorage.getItem(this.key);
  }

  set(value: string) {
    return localStorage.setItem(this.key, value);
  }
}

export const RegionStorage = new RegionStore(REGION_STORE_KEY);
