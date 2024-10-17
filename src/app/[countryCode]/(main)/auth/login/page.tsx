"use client";

import LoginCustomerForm from "@/modules/auth/login";

const LoginPage = () => {
  return (
    <div
      className="flex items-center justify-center h-screen 
		p-4
	"
    >
      <LoginCustomerForm />
    </div>
  );
};

export default LoginPage;
