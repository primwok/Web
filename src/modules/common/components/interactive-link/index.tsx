import { ArrowUpRightMini } from "@medusajs/icons";
import { Text } from "@medusajs/ui";
import LocalizedClientLink from "../localized-client-link";
import { ArrowRight, ArrowUp } from "lucide-react";

type InteractiveLinkProps = {
  href: string;
  children?: React.ReactNode;
  onClick?: () => void;
};

const InteractiveLink = ({
  href,
  children,
  onClick,
  ...props
}: InteractiveLinkProps) => {
  return (
    <LocalizedClientLink
      className="flex gap-x-1 items-center group items-center"
      href={href}
      onClick={onClick}
      {...props}
    >
      <h2 className="text-sm text-blue-500">{children}</h2>
      <ArrowRight
        className="-rotate-45 transform transition-transform duration-300 group-hover:rotate-0 w-4 h-4 text-blue-500"
        // color="#2563EB"
      />
    </LocalizedClientLink>
  );
};

export default InteractiveLink;
