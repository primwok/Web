"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { useFormStatus } from "react-dom";

export function SubmitButton({
  children,
  variant = "default",
  className,
  "data-testid": dataTestId,
}: {
  children: React.ReactNode;
  variant?:
    | "default"
    | "destructive"
    | "secondary"
    | "outline"
    | "link"
    | "ghost"
    | null
    | undefined;
  className?: string;
  "data-testid"?: string;
}) {
  const { pending } = useFormStatus();

  return (
    <Button
      size="default"
      className={className}
      type="submit"
      variant={variant}
      data-testid={dataTestId}
    >
      {children}
    </Button>
  );
}
