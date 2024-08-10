"use client";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Package2, ShoppingBag } from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CircleUser, Menu, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Regions } from "../regions/regions";
import { AuthPopup } from "../auth/auth-popup";
import { useAuth } from "@/app/common/contexts/auth.context";
import { useCart } from "@/app/common/contexts/cart.context";
import { PageWidth } from "@/app/common/ui/page-width";

export const Header = () => {
  const auth = useAuth();
  const cart = useCart();
  // console.log("cart", cart?.state);
  return (
    <>
      <div className="flex flex-row justify-center items-center py-2 bg-black w-full">
        <p className="text-sm font-medium text-white">
          Your one stop shop for legit electronics
        </p>
      </div>
      <header className="sticky top-0 flex flex-col items-center border-b bg-background">
        <PageWidth width="screen-xl">
          <div className="flex justify-between items-center w-full px-3 py-2">
            <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
              <Link
                href="#"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <Package2 className="h-6 w-6" />
                <span className="sr-only">Primwok</span>
              </Link>
              <Link href="#" className="hover:text-foreground">
                Dashboard
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Orders
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Products
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Customers
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Analytics
              </Link>
            </nav>
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="shrink-0 md:hidden"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <nav className="grid gap-6 text-lg font-medium">
                  <Link
                    href="#"
                    className="flex items-center gap-2 text-lg font-semibold"
                  >
                    <Package2 className="h-6 w-6" />
                    <span className="sr-only">Primwok</span>
                  </Link>
                  <Link href="#" className="hover:text-foreground">
                    Dashboard
                  </Link>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Orders
                  </Link>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Products
                  </Link>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Customers
                  </Link>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Analytics
                  </Link>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Account
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
            <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
              <div className="relative ml-auto mr-2 md:mr-0">
                <span className="absolute -top-2 -right-2 bg-primary text-white text-xs font-semibold rounded-full px-2">
                  {cart?.state?.cart?.items?.length ?? 0}
                </span>

                <ShoppingBag />
              </div>
              <div className="hidden md:flex items-center">
                <Regions />
                {auth?.state.isAuthenticated ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="secondary"
                        size="icon"
                        className="rounded-full"
                      >
                        <CircleUser className="h-5 w-5" />
                        <span className="sr-only">Toggle user menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>My Account</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Settings</DropdownMenuItem>
                      <DropdownMenuItem>Support</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Logout</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <div className="flex items-center gap-2">
                    <Link href="/auth/login">
                      <Button variant="secondary">Login</Button>
                    </Link>
                    <Link href="/auth/register">
                      <Button variant="ghost">Sign Up</Button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </PageWidth>
      </header>
    </>
  );
};
