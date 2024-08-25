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
        className={`w-full min-h-[50vh] lg:min-h-[30vh] h-fit relative  my-12 bg-red-100`}
      >
        <Image
          src={
            "https://images.unsplash.com/photo-1479920252409-6e3d8e8d4866?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="intro"
          // height={100}
          // width={100}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkAAIAAAoAAv/lxKUAAAAASUVORK5CYII="
          // quality={100}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
        <div className="absolute top-0 left-0 h-full w-full z-1 flex  flex-col md:flex-row py-12 px-3">
          <div
            className={`h-full w-full flex flex-col justify-center items-center text-black flex-1
        ${direction === "left" ? "order-2" : "order-1"}
        `}
          >
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-left  flex flex-col gap-1">
                <h2 className="text-4xl text-wrap font-bold">{title}</h2>
                {/* <h1 className="text-lg font-medium">{subtitle}</h1> */}
                <p className="font-normal">{description}</p>
                <Button
                  className="w-auto mt-8 w-fit px-8 py-6 rounded-lg font-bold"
                  size={"sm"}
                >
                  {buttonTitle}
                </Button>
              </div>
            </div>
          </div>
          <div
            className={`flex-1 w-full relative 
          ${direction === "left" ? "order-1" : "order-2"}
          `}
          ></div>
        </div>
      </div>
    </PageWidth>
  );
};
