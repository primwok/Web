export const AUTH_STORE_KEY = "auth";

export class AuthStore {
	constructor(
		private key: string
	) { }

	get() {
		return localStorage.getItem(this.key);
	}

	set(value: string) {
		return localStorage.setItem(this.key, value);
	}
}

export const AuthStorage = new AuthStore(AUTH_STORE_KEY);