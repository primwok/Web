import React from "react";

import UnderlineLink from "@/modules/common/components/interactive-link";

import AccountNav from "../components/account-nav";
import { Customer } from "@medusajs/medusa";
import { PageWidth } from "@/modules/common/components/page-width";

interface AccountLayoutProps {
  customer: Omit<Customer, "password_hash"> | null;
  children: React.ReactNode;
}

const AccountLayout: React.FC<AccountLayoutProps> = ({
  customer,
  children,
}) => {
  return (
    <PageWidth>
      <div className="flex-1 small:py-12" data-testid="account-page">
        <div className="flex-1 h-full  bg-white flex flex-col">
          <div className="grid grid-cols-1  sm:grid-cols-[240px_1fr] py-12">
            <div>{customer && <AccountNav customer={customer} />}</div>
            <div className="flex-1">{children}</div>
          </div>
          <div className="flex flex-col sm:flex-row items-end justify-between sm:border-t border-gray-200 py-12 gap-8">
            <div className="">
              <h3 className="text-lg font-semibold mb-4">Got questions?</h3>
              <span className="text-sm font-normal">
                You can find frequently asked questions and answers on our
                customer service page.
              </span>
            </div>
            <div className="">
              <UnderlineLink href="/customer-service">
                Customer Service
              </UnderlineLink>
            </div>
          </div>
        </div>
      </div>
    </PageWidth>
  );
};

export default AccountLayout;
