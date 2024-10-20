import React from "react";

// import Ideal from "@/modules/common/icons/ideal"
// import Bancontact from "@/modules/common/icons/bancontact"
// import PayPal from "@/modules/common/icons/paypal"
import { CreditCardIcon } from "lucide-react";

/* Map of payment provider_id to their title and icon. Add in any payment providers you want to use. */
export const paymentInfoMap: Record<
  string,
  { title: string; icon: React.JSX.Element }
> = {
  stripe: {
    title: "Credit card",
    icon: <CreditCardIcon />,
  },
  "stripe-ideal": {
    title: "iDeal",
    icon: <CreditCardIcon />,
  },
  "stripe-bancontact": {
    title: "Bancontact",
    icon: <CreditCardIcon />,
  },
  paypal: {
    title: "PayPal",
    icon: <CreditCardIcon />,
  },
  manual: {
    title: "Test payment",
    icon: <CreditCardIcon />,
  },
  // Add more payment providers here
};

// Add currencies that don't need to be divided by 100
export const noDivisionCurrencies = [
  "krw",
  "jpy",
  "vnd",
  "clp",
  "pyg",
  "xaf",
  "xof",
  "bif",
  "djf",
  "gnf",
  "kmf",
  "mga",
  "rwf",
  "xpf",
  "htg",
  "vuv",
  "xag",
  "xdr",
  "xau",
];

export const MEDUSA_BACKEND_URL = process.env.NEXT_PUBLIC_BASE_URL;
