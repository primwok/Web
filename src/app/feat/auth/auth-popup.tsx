"use client";
import RegisterCustomerForm from "./register";
import LoginCustomerForm from "./login";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function AuthDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Login</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Login / Register</DialogTitle>
          <DialogDescription>
            Please enter your credentials to login or register
          </DialogDescription>
        </DialogHeader>
        <AuthFormTabs />
        <DialogFooter>
          {/* <Button type="submit">
            Cancel
          </Button> */}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

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
