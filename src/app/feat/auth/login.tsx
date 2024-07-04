"use client";
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
// import { useLoginMutation } from "@/app/common/api/auth/auth";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/app/common/contexts/auth.context";
import { useRouter } from "next/navigation";
import { useFormState } from "react-dom";
import { loginCustomer } from "@/app/common/api/auth/actions";
import { useCallback, useEffect } from "react";

const loginSchema = zod.object({
  email: zod.string().email(),
  password: zod.string(),
});

type LoginInput = zod.infer<typeof loginSchema>;
//TODO find out how to store a token in the local storage

const LoginCustomerForm = () => {
  const { toast } = useToast();
  const router = useRouter();
  const auth = useAuth();
  // const login = useLoginMutation();
  const form = useForm<LoginInput>({
    mode: "onChange",
    resolver: zodResolver(loginSchema),
  });

  const initialState: {
    data: {
      token: string;
    } | null;
    error: any;
  } = {
    data: null,
    error: null,
  };
  const [state, formAction] = useFormState(loginCustomer as any, initialState);

  useEffect(() => {
    if (state.data) {
      auth?.login(state.data?.token as string);
      toast({
        title: "Success",
        description: "Login successful.",
        color: "green",
      });
      router.push("/");
      state.data = null;
    }
  }, [state.data, auth, toast, router]);

  return (
    <FormProvider {...form}>
      <form
        // onSubmit={form.handleSubmit(handleLogin)}
        action={formAction}
        className="space-y-8"
      >
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
            <div className="flex flex-col space-y-2">
              <div className="text-red-500">
                {state.error ? state.error : null}
              </div>
              <Button
                onClick={() => {
                  router.push("/auth/register");
                }}
              >
                Register
              </Button>
              <Button type="submit">
                {form.formState.isSubmitting ? "Loading..." : "Login"}
              </Button>
            </div>
          </CardFooter>
        </Card>
      </form>
    </FormProvider>
  );
};

export default LoginCustomerForm;
