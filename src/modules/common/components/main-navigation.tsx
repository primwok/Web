import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
// import { Icons } from "@/components/ui/icons"
import { Menu } from "lucide-react";

// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   // NavigationMenuList,
//   NavigationMenuTrigger,
//   navigationMenuTriggerStyle,
// } from "@/components/ui/navigation-menu";
import { PageWidth } from "./page-width";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { AccountButton } from "@/modules/auth/account-button";
import { SearchOverlayComponent } from "@/modules/products-initial/search-overlay";
import { Logo } from "./logo";
import CartButton from "@/modules/layout/components/cart-button";

// const components: { title: string; href: string; description: string }[] = [
//   {
//     title: "Alert Dialog",
//     href: "/docs/primitives/alert-dialog",
//     description:
//       "A modal dialog that interrupts the user with important content and expects a response.",
//   },
//   {
//     title: "Hover Card",
//     href: "/docs/primitives/hover-card",
//     description:
//       "For sighted users to preview content available behind a link.",
//   },
//   {
//     title: "Progress",
//     href: "/docs/primitives/progress",
//     description:
//       "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
//   },
//   {
//     title: "Scroll-area",
//     href: "/docs/primitives/scroll-area",
//     description: "Visually or semantically separates content.",
//   },
//   {
//     title: "Tabs",
//     href: "/docs/primitives/tabs",
//     description:
//       "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
//   },
//   {
//     title: "Tooltip",
//     href: "/docs/primitives/tooltip",
//     description:
//       "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
//   },
// ];

export function CMainNavigationMenu() {
  return (
    <PageWidth>
      <header className="main-menu flex items-center gap-4 py-4 w-full bg-white z-[10] h-[4rem] bg-red-200">
        <nav className="hidden xl:flex items-center gap-8 w-full">
          <Logo />
          <div className="flex justify-end items-center w-full">
            <CartButton />
          </div>
        </nav>
        <div className="flex xl:hidden justify-between items-center px-2 w-full">
          <Logo />
          <MobileSheetMenuContent />
        </div>
      </header>
    </PageWidth>
  );
}

export const MobileSheetMenuContent = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0 xl:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <nav className="flex flex-col p-4 gap-3">
          <Link href="#" className="">
            Dashboard
          </Link>
          <Link href="#" className="">
            Orders
          </Link>
          <Link href="#" className="">
            Products
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

// const ListItem = React.forwardRef<
//   React.ElementRef<"a">,
//   React.ComponentPropsWithoutRef<"a">
// >(({ className, title, children, ...props }, ref) => {
//   return (
//     <li>
//       <NavigationMenuLink asChild>
//         <a
//           ref={ref}
//           className={cn(
//             "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
//             className
//           )}
//           {...props}
//         >
//           <div className="text-sm font-medium leading-none">{title}</div>
//           <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
//             {children}
//           </p>
//         </a>
//       </NavigationMenuLink>
//     </li>
//   );
// });

// ListItem.displayName = "ListItem";

// input could be :
// link
// list of links
// grid of list links, each list has a title
// grid of listed links and images

// const NavigationMenuSection: React.FC<
//   React.PropsWithChildren<{
//     type?: string;
//   }>
// > = ({ type }) => {
//   return (
//     <NavigationMenu>
//       <NavigationMenuList>
//         {type === "1" && (
//           <>
//             <NavigationMenuItem>
//               <NavigationMenuTrigger className="font-semibold">
//                 Shop
//               </NavigationMenuTrigger>
//               <NavigationMenuContent>
//                 <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
//                   <li className="row-span-3">
//                     <NavigationMenuLink asChild>
//                       <a
//                         className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
//                         href="/"
//                       >
//                         {/* <Icons.logo className="h-6 w-6" /> */}
//                         <div className="mb-2 mt-4 text-lg font-medium">
//                           shadcn/ui
//                         </div>
//                         <p className="text-sm leading-tight text-muted-foreground">
//                           Beautifully designed components that you can copy and
//                           paste into your apps. Accessible. Customizable. Open
//                           Source.
//                         </p>
//                       </a>
//                     </NavigationMenuLink>
//                   </li>
//                   <ListItem href="/docs" title="Introduction">
//                     Re-usable components built using Radix UI and Tailwind CSS.
//                   </ListItem>
//                   <ListItem href="/docs/installation" title="Installation">
//                     How to install dependencies and structure your app.
//                   </ListItem>
//                   <ListItem
//                     href="/docs/primitives/typography"
//                     title="Typography"
//                   >
//                     Styles for headings, paragraphs, lists...etc
//                   </ListItem>
//                 </ul>
//               </NavigationMenuContent>
//             </NavigationMenuItem>
//             <NavigationMenuItem>
//               <NavigationMenuTrigger className="font-semibold">
//                 Mobile
//               </NavigationMenuTrigger>
//               <NavigationMenuContent>
//                 <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
//                   {components.map((component) => (
//                     <ListItem
//                       key={component.title}
//                       title={component.title}
//                       href={component.href}
//                     >
//                       {component.description}
//                     </ListItem>
//                   ))}
//                 </ul>
//               </NavigationMenuContent>
//             </NavigationMenuItem>
//             <NavigationMenuItem>
//               <Link href="/docs" legacyBehavior passHref>
//                 <NavigationMenuLink
//                   className={`${navigationMenuTriggerStyle()} font-semibold`}
//                 >
//                   TV & Audio
//                 </NavigationMenuLink>
//               </Link>
//             </NavigationMenuItem>
//             <NavigationMenuItem>
//               <Link href="/docs" legacyBehavior passHref>
//                 <NavigationMenuLink
//                   className={`${navigationMenuTriggerStyle()} font-semibold`}
//                 >
//                   Accessories
//                 </NavigationMenuLink>
//               </Link>
//             </NavigationMenuItem>
//           </>
//         )}
//         {type === "2" && (
//           <>
//             {/* <NavigationMenuItem>
//               <NavigationMenuLink className={navigationMenuTriggerStyle()}>
//                 <SearchOverlayComponent />
//               </NavigationMenuLink>
//             </NavigationMenuItem> */}
//             <NavigationMenuItem>
//               <Link href="/cart" legacyBehavior passHref>
//                 <NavigationMenuLink className={navigationMenuTriggerStyle()}>
//                   <CartButton />
//                 </NavigationMenuLink>
//               </Link>
//             </NavigationMenuItem>
//             <NavigationMenuItem>
//               <AccountButton />
//             </NavigationMenuItem>
//           </>
//         )}
//       </NavigationMenuList>
//     </NavigationMenu>
//   );
// };
