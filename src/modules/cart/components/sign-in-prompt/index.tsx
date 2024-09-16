import { Button } from "@/components/ui/button";
import LocalizedClientLink from "@/modules/common/components/localized-client-link";

const SignInPrompt = () => {
  return (
    <div className="bg-white flex items-center justify-between">
      <div>
        <h2 className="text-[1.5rem]">Already have an account?</h2>
        <p className="text-sm text-gray-500 mt-2">
          Sign in for a better experience.
        </p>
      </div>
      <div>
        <LocalizedClientLink href="/account">
          <Button
            variant="secondary"
            className="h-10"
            data-testid="sign-in-button"
          >
            Sign in
          </Button>
        </LocalizedClientLink>
      </div>
    </div>
  );
};

export default SignInPrompt;
