import { login, registerCustomer } from "@/app/common/api/auth/actions";
import { useMutation } from "@tanstack/react-query";
import { use } from "react";

interface LoginBody {
	email: string;
	password: string;
}

interface RegisterCustomerBody {
	first_name: string;
	last_name: string;
	email: string;
	password: string;
	phone: string;
}


export const useLoginMutation = () => useMutation<
	any, string, LoginBody
>((body) => login(body.email, body.password).then((res) => res).catch((err) => {
	throw new Error(err);
}
));



export const useRegisterCustomerMutation = () => useMutation<
	any, string, RegisterCustomerBody
>((body) => registerCustomer(body).then((res) => res).catch((err) => {
	throw new Error(err);
}
));