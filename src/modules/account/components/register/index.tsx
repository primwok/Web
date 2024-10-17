"use client";

import { useFormState } from "react-dom";

import Input from "@/modules/common/components/input";
import { LOGIN_VIEW } from "@/modules/account/templates/login-template";
import { signUp } from "@/modules/account/actions";
import ErrorMessage from "@/modules/checkout/components/error-message";
import { SubmitButton } from "@/modules/checkout/components/submit-button";
import LocalizedClientLink from "@/modules/common/components/localized-client-link";

type Props = {
  setCurrentView: (view: LOGIN_VIEW) => void;
};

const Register = ({ setCurrentView }: Props) => {
  const [message, formAction] = useFormState(signUp, null);

  return (
    <div
      className="max-w-sm flex flex-col items-center"
      data-testid="register-page"
    >
      <h1 className="text-lg font-bold uppercase mb-6">
        Become a Primwok Store Member
      </h1>
      <p className="text-center text-sm font-normal  mb-8">
        Create your Primwok Store Member profile, and get access to an enhanced
        shopping experience.
      </p>
      <form className="w-full flex flex-col" action={formAction}>
        <div className="flex flex-col w-full gap-y-4">
          <Input
            label="First name"
            name="first_name"
            required
            autoComplete="given-name"
            data-testid="first-name-input"
          />
          <Input
            label="Last name"
            name="last_name"
            required
            autoComplete="family-name"
            data-testid="last-name-input"
          />
          <Input
            label="Email"
            name="email"
            required
            type="email"
            autoComplete="email"
            data-testid="email-input"
          />
          <Input
            label="Phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            data-testid="phone-input"
          />
          <Input
            label="Password"
            name="password"
            required
            type="password"
            autoComplete="new-password"
            data-testid="password-input"
          />
        </div>
        <ErrorMessage error={message} data-testid="register-error" />
        <span className="text-center text-normal text-sm mt-6">
          By creating an account, you agree to Primac Store&apos;s{" "}
          <LocalizedClientLink
            href="/content/privacy-policy"
            className="underline text-sky-700"
          >
            Privacy Policy
          </LocalizedClientLink>{" "}
          and{" "}
          <LocalizedClientLink
            href="/content/terms-of-use"
            className="underline text-sky-700"
          >
            Terms of Use
          </LocalizedClientLink>
          .
        </span>
        <SubmitButton
          className="w-full mt-6 bg-sky-600"
          data-testid="register-button"
        >
          Join
        </SubmitButton>
      </form>
      <span className="text-center text-normal text-sm mt-6">
        Already a member?{" "}
        <button
          onClick={() => setCurrentView(LOGIN_VIEW.SIGN_IN)}
          className="underline text-sky-700"
        >
          Sign in
        </button>
        .
      </span>
    </div>
  );
};

export default Register;
