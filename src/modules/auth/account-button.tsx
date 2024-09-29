import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import LocalizedClientLink from "../common/components/localized-client-link";

export const AccountButton: React.FC = () => {
  return (
    <LocalizedClientLink href="/account">
      <Button
        className="flex items-center gap-2"
        variant="ghost"
        size="icon"
        aria-label="Account"
      >
        <User className="h-5 w-5" />
        <span className="sr-only">Account</span>
      </Button>
    </LocalizedClientLink>
  );
};
