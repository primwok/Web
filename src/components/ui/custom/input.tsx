import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ViewGridIcon, ViewNoneIcon } from "@radix-ui/react-icons";
import React from "react";
import { useFormContext } from "react-hook-form";

interface CInputProps {
  description?: string;
  placeholder?: string;
  type: "number" | "email" | "text" | "image";
  name: string;
  id?: string;
  label?: string;
  required: boolean;
}

export const CInput: React.FC<React.PropsWithoutRef<CInputProps>> = (props) => {
  const form = useFormContext();
  return (
    <FormField
      // rules={{
      //   required: props.required ? "This field is required" : false,
      // }}
      control={form?.control}
      name={props.name}
      render={({ field }) => (
        <FormItem>
          {props.label && <FormLabel>{props.label}</FormLabel>}
          <FormControl>
            <Input placeholder={props?.placeholder ?? ""} {...field} />
          </FormControl>
          {props.description && (
            <FormDescription>{props.description}</FormDescription>
          )}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

interface CPasswordInputProps {
  description?: string;
  placeholder?: string;
  name: string;
  id?: string;
  label?: string;
  required: boolean;
}

export const CPasswordInput: React.FC<
  React.PropsWithoutRef<CPasswordInputProps>
> = (props) => {
  const form = useFormContext();
  const [showPassword, setShowPassword] = React.useState(false);
  return (
    <FormField
      // rules={{
      //   required: props.required ? "This field is required" : false,
      // }}
      control={form?.control}
      name={props.name}
      render={({ field }) => (
        <FormItem>
          {props.label && <FormLabel>{props.label}</FormLabel>}
          <FormControl>
            <div className="flex items-center">
              <Input
                placeholder={props.placeholder ?? ""}
                type={showPassword ? "text" : "password"}
                {...field}
              />
              {showPassword ? (
                <ViewGridIcon
                  className="h-6 w-6 text-gray-500"
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                />
              ) : (
                <ViewNoneIcon
                  className="h-6 w-6 text-gray-500"
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                />
              )}
            </div>
          </FormControl>
          {props.description && (
            <FormDescription>{props.description}</FormDescription>
          )}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
