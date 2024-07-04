import { NextRequest } from "next/server";
import { AuthStorage } from "./app/common/contexts/stores/auth-store";

export const middleware = async (request: NextRequest) => {
	// const token = AuthStorage.get();

	// const requestHeaders = new Headers(request.headers)
	// requestHeaders.set("Authorization", `Bearer ${token}`);

	// const newRequest = new Request(request.url, {
	// 	headers: requestHeaders,
	// 	method: request.method,
	// 	body: request.body,
	// });

	// return fetch(newRequest);

}