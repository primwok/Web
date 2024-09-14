import { Squada_One } from "next/font/google";
import Link from "next/link";

const squadaOne = Squada_One({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

export const Logo = () => {
  return (
    <Link
      href="/"
      passHref
      className={`text-normal md:text-xl uppercase  md:px-4 tracking-wider
		${squadaOne.className}
			`}
    >
      Primwok
    </Link>
  );
};
