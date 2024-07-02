import { useMeCustomer, useMedusa } from "medusa-react";
import * as zod from "zod";
import { Form, FormProvider, useForm } from "react-hook-form";
import { CInput, CPasswordInput } from "@/components/ui/custom/input";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { useLoginMutation } from "@/app/common/api/auth/auth";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/app/common/contexts/auth.context";

const loginSchema = zod.object({
  email: zod.string().email(),
  password: zod.string(),
});

type LoginInput = zod.infer<typeof loginSchema>;
//TODO find out how to store a token in the local storage

const LoginCustomerForm = () => {
  const { toast } = useToast();
  const auth = useAuth();
  const login = useLoginMutation();
  const form = useForm<LoginInput>({
    mode: "onChange",
    resolver: zodResolver(loginSchema),
  });

  const handleLogin = async ({ email, password }: LoginInput) => {
    login.mutate(
      { email, password },
      {
        onSuccess: ({ token }) => {
          console.log(token);
          // auth.login(token);
          toast({
            title: "Success",
            description: "Login successful.",
            color: "green",
          });
        },
        onError: (error) => {
          console.log(error);
          toast({
            title: "Error",
            description: error,
            color: "red",
          });
        },
      }
    );
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(handleLogin)} className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>Login to your account</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <CInput name="email" label="Email" type="email" required />
            </div>

            <div className="space-y-1">
              <CPasswordInput name="password" label="Password" required />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit">
              {form.formState.isSubmitting ? "Loading..." : "Login"}
            </Button>
          </CardFooter>
        </Card>
      </form>
    </FormProvider>
  );
};

export default LoginCustomerForm;
