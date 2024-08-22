"use client"
export const AUTH_STORE_KEY = "auth";

export interface IAuthStore {
	get: () => string | null;
	set: (value: string) => void;
	clear: () => void;
}

export class AuthStore implements IAuthStore {
	constructor(
		private key: string

	) { }

	get() {
		if (typeof window !== 'undefined') {
			return localStorage.getItem(this.key);
		}
		return null;
	}

	set(value: string) {
		if (typeof window !== 'undefined') {
			return localStorage.setItem(this.key, value);
		}

	}

	clear() {
		if (typeof window !== 'undefined') {
			return localStorage.removeItem(this.key);
		}
	}
}

export const AuthStorage = new AuthStore(AUTH_STORE_KEY);

