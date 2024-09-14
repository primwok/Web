import { useAuth } from "@/lib/contexts/auth.context";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { CircleUser, User } from "lucide-react";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

export const AccountButton: React.FC = () => {
  const auth = useAuth();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="p-2 cursor-pointer">
          <User className="h-5 w-5" />
          <span className="sr-only">Toggle user menu</span>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem className="cursor-pointer">
          <Link href="/account">Account</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer">
          <Link href="/my-orders">Orders</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer">
          <Link href="/auth/logout">Logout</Link>
        </DropdownMenuItem>

        {/* {auth?.state.isAuthenticated ? (
          <>
            <DropdownMenuItem>
              <Link href="/account">Account</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/my-orders">Orders</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/auth/logout">Logout</Link>
            </DropdownMenuItem>
          </>
        ) : (
          <>
            <DropdownMenuItem>
              <Link href="/auth/login">Login</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/auth/register">Sign Up</Link>
            </DropdownMenuItem>
          </>
        )} */}
      </DropdownMenuContent>
    </DropdownMenu>
    // <NavigationMenuItem>
    //   <NavigationMenuTrigger className="font-semibold">
    //     <User className="h-5 w-5" />
    //     <span className="sr-only">Toggle user menu</span>
    //   </NavigationMenuTrigger>
    //   <NavigationMenuContent className="z-[20]">
    //     <ul className="grid w-[400px] gap-3 p-4 md:grid-cols-2 lg:w-[600px]">
    //       {auth?.state.isAuthenticated ? (
    //         <>
    //           <li>
    //             <NavigationMenuLink href="/account">Account</NavigationMenuLink>
    //           </li>
    //           <li>
    //             <NavigationMenuLink href="/my-orders">
    //               Orders
    //             </NavigationMenuLink>
    //           </li>
    //           <li>
    //             <NavigationMenuLink href="/auth/logout">
    //               Logout
    //             </NavigationMenuLink>
    //           </li>
    //         </>
    //       ) : (
    //         <>
    //           <li>
    //             <NavigationMenuLink href="/auth/login">
    //               Login
    //             </NavigationMenuLink>
    //           </li>
    //           <li>
    //             <NavigationMenuLink href="/auth/register">
    //               Sign Up
    //             </NavigationMenuLink>
    //           </li>
    //         </>
    //       )}
    //     </ul>
    //   </NavigationMenuContent>
    // </NavigationMenuItem>
  );
};
