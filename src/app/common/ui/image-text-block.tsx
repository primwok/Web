import { Button } from "@/components/ui/button";
import Image from "next/image";
import { PageWidth } from "./page-width";

export const ImageTextBlock: React.FC<
  React.PropsWithChildren<{
    image: string;
    title: string;
    subtitle: string;
    buttonTitle: string;
    direction: "left" | "right";
    description: string;
  }>
> = ({ image, title, subtitle, direction, buttonTitle, description }) => {
  return (
    <PageWidth>
      <div
        className={`w-full h-[20vw] relative flex  flex-col md:flex-row my-3`}
      >
        <div
          className={`h-full w-full flex flex-col justify-center items-center text-black flex-1
    ${direction === "left" ? "order-2" : "order-1"}
    `}
        >
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-left  flex flex-col gap-4">
              <h2 className="text-5xl text-wrap font-bold">{title}</h2>
              <h1 className="text-lg font-semibold">{subtitle}</h1>
              <p className="font-normal">{description}</p>
              <Button className="w-auto px-4 py-2" size={"sm"}>
                {buttonTitle}
              </Button>
            </div>
          </div>
        </div>
        <div
          className={`flex-1 h-full w-full relative 
		  ${direction === "left" ? "order-1" : "order-2"}
		  `}
        >
          <Image
            src={image}
            alt="intro"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkAAIAAAoAAv/lxKUAAAAASUVORK5CYII="
            quality={100}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      </div>
    </PageWidth>
  );
};
