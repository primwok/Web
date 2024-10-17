"use client";
import React from "react";
import { useCreateCustomer } from "medusa-react";
import * as zod from "zod";
import { Form, FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CInput, CPasswordInput } from "@/components/ui/custom/input";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
// import { useRegisterCustomerMutation } from "@/app/common/api/auth/auth";
import { useFormState } from "react-dom";
import { registerCustomer } from "@/app/api/auth/actions";

const RegisterCustomerSchema = zod
  .object({
    first_name: zod.string().min(2),
    last_name: zod.string().min(2),
    email: zod.string().email(),
    password: zod.string().min(6),
    password_confirmation: zod.string().min(6),
    phone: zod.string().min(6),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: "Passwords do not match",
    params: {
      password_confirmation: "Password confirmation",
    },
  });

type RegisterCustomerInput = zod.infer<typeof RegisterCustomerSchema>;

const RegisterCustomerForm = () => {
  const form = useForm<RegisterCustomerInput>({
    mode: "onChange",
    resolver: zodResolver(RegisterCustomerSchema),
  });
  const [state, formAction] = useFormState(registerCustomer as any, {
    error: null,
  });

  return (
    <FormProvider {...form}>
      <form action={formAction} className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Register</CardTitle>
            <CardDescription>Create your account.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <CInput name="email" label="Email" type="email" required />
            </div>
            <div className="space-y-1">
              <CInput
                name="first_name"
                label="First Name"
                type="text"
                required
              />
            </div>
            <div className="space-y-1">
              <CInput name="last_name" label="Last Name" type="text" required />
            </div>
            <div className="space-y-1">
              <CInput name="phone" label="Phone" type="text" required />
            </div>
            <div className="space-y-1">
              <CPasswordInput name="password" label="Password" required />
            </div>
            <div className="space-y-1">
              <CPasswordInput
                name="password_confirmation"
                label="Confirm Password"
                required
              />
            </div>
          </CardContent>
          <CardFooter>
            <div className="flex flex-col space-y-2">
              <div className="text-red-500">
                {state.error ? state.error : null}
              </div>
              <Button type="submit" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting ? "Loading..." : "Register"}
              </Button>
            </div>
          </CardFooter>
        </Card>
      </form>
    </FormProvider>
  );
};

export default RegisterCustomerForm;
