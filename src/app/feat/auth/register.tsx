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
  const createCustomer = useCreateCustomer();
  const form = useForm<RegisterCustomerInput>({
    mode: "onChange",
    resolver: zodResolver(RegisterCustomerSchema),
  });
  const { toast } = useToast();

  const onSubmit = (customerData: RegisterCustomerInput) => {
    // console.log("customerData", customerData);
    const { password_confirmation, ...rest } = customerData;
    createCustomer.mutate(rest, {
      onSuccess: ({ customer }) => {
        console.log(customer.id);
        toast({
          title: "Success",
          description: "The quick brown fox jumps over the lazy dog.",
          color: "green",
        });
      },
      onError: (error) => {
        toast({
          title: "Error",
          description: error.message,
          color: "red",
        });
      },
    });
  };

  return (
    <FormProvider {...form}>
      {/* <Form {...form} onSubmit={form.handleSubmit(onSubmit)}> */}
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Register</CardTitle>
            <CardDescription>
              Log in to your account to access your profile.
            </CardDescription>
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
            <Button type="submit" disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting ? "Loading..." : "Register"}
            </Button>
          </CardFooter>
        </Card>
      </form>
      {/* </Form> */}
    </FormProvider>
  );
};

export default RegisterCustomerForm;
