"use client";
import RegisterCustomerForm from "./register";
import LoginCustomerForm from "./login";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export const AuthPopup = () => {
  return <AuthFormTabs />;
};

export function AuthFormTabs() {
  return (
    <Tabs defaultValue="login" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="login">Login</TabsTrigger>
        <TabsTrigger value="register">Register</TabsTrigger>
      </TabsList>
      <TabsContent value="login">
        <LoginCustomerForm />
      </TabsContent>
      <TabsContent value="register">
        <RegisterCustomerForm />
      </TabsContent>
    </Tabs>
  );
}
