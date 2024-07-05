"use client";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFormContext } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";

interface CSelectProps {
  description?: string;
  placeholder?: string;
  options:
    | {
        value: string;
        label: string;
      }[]
    | undefined;
  label?: string;
  link?: {
    href: string;
    text: string;
  };
  name: string;
  default?: string;
}

export const CSelect: React.FC<React.PropsWithoutRef<CSelectProps>> = (
  props
) => {
  const form = useFormContext();

  return (
    <FormField
      control={form.control}
      name={props.name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{props.label}</FormLabel>
          <Select
            onValueChange={field.onChange}
            defaultValue={props.default ?? field.value}
          >
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder={props.placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {props.options?.map(
                (option: { value: string; label: string }) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                )
              )}
            </SelectContent>
          </Select>
          <FormDescription>
            {props.description}
            {props.link && (
              <Link href={props.link.href}>
                <a>{props.link.text}</a>
              </Link>
            )}
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
