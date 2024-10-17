import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Link } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export interface IGridItem {
  productName: string;
  image: string;
  type: string;
  new: boolean;
  button: {
    title: string;
    url: string;
  };
  incentive: string | null;
  offer: string;
  offerImages?: string[];
}

export const SimpleImageCard: React.FC<{ item: IGridItem }> = ({ item }) => {
  return (
    <Card
      className={`group bg-slate-100 cursor-pointer grid grid-rows-[2.5rem,10.5rem,2rem] sm:grid-rows-[2.5rem,10.5rem,3rem]  md:grid-rows-[2.5rem,10.5rem,7.5rem] rounded-2xl shadow-none gap-1
			  ${
          item.type === "simple"
            ? "row-span-1 col-span-1 col-span-1"
            : "row-span-2 col-span-2"
        }
		 
		  `}
    >
      <CardHeader className="row-span-1 p-3 border-box rounded-t-xl">
        {item.new && (
          <span className="rounded-lg py-1 px-2 border-box text-xs bg-blue-500 text-white w-fit ">
            New
          </span>
        )}
      </CardHeader>
      <CardContent className="row-span-1 h-full">
        <div className="h-full relative p-2">
          <Image
            src={item.image}
            alt={item.productName}
            layout="fill"
            objectFit="contain"
            objectPosition="center"
          />
        </div>
      </CardContent>
      <CardFooter className="row-span-1 rounded-b-xl md:pb-3">
        <div className="grid grid-rows-3 w-full h-full items-center justify-center">
          <div className="title-container flex justify-center items-center h-full">
            <h5 className="text-lg font-medium">{item.productName}</h5>
          </div>
          <div
            className="hidden md:flex flex-col gap-1 items-center justify-center group-hover:hidden
			   row-span-2 
			"
          >
            <p className="text-sm font-medium text-blue-500">
              {item.incentive}
            </p>
            <p className="text-sm font-normal">{item.offer}</p>
          </div>
          <div
            className="hidden md:group-hover:flex w-full  items-center justify-center
			   group-hover:row-span-2 
			"
          >
            <Button className=" w-fit">{item.button.title}</Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

/**
 *
 * @param item
 * This is the main image component
 * It is used to display the main image in the grid with
 * text section as a footer
 *  it has a space between the image and the text sections
 */
export const MainImageCard1: React.FC<{
  item: IGridItem;
  border?: boolean;
}> = ({ item, border }) => {
  return (
    <Card
      className="group bg-slate-100 cursor-pointer row-span-2 col-span-2 shadow-none rounded-2xl
		  grid grid-cols-2 grid-rows-[2.5rem,10.5rem,2rem] sm:grid-rows-[2.5rem,10.5rem,3rem]  md:grid-rows-[5rem,25rem,12rem]
	  "
    >
      <CardHeader className="row-span-1 col-span-2">
        {item.new && (
          <span className="rounded-lg py-1 px-2 border-box text-xs bg-blue-500 text-white w-fit">
            New
          </span>
        )}
      </CardHeader>
      <CardContent
        className={`row-span-2 md:row-span-1 col-span-1  lg:col-span-2 ${
          border ? "border-b border-white" : ""
        }`}
      >
        <div className="image-container relative h-full p-2">
          <Image
            src={item.image}
            alt={item.productName}
            layout="fill"
            objectFit="contain"
            objectPosition="center"
          />
        </div>
      </CardContent>
      <CardFooter className="row-span-2 md:row-span-1 col-span-1 lg:col-span-2">
        <div className="grid grid-rows-3 w-full items-center jutify-center ">
          <div className="title-container flex justify-center items-center">
            <h5 className="text-lg font-medium row-span-1">
              {item.productName}
            </h5>
          </div>
          <div
            className="flex flex-col gap-2 items-center justify-center group-hover:hidden
			   row-span-2 
			"
          >
            <p className="text-sm font-medium text-blue-500">
              {item.incentive}
            </p>
            <p className="text-sm font-normal">{item.offer}</p>
          </div>
          <div
            className="hidden group-hover:flex w-full  items-center justify-center
			   group-hover:row-span-2 
			"
          >
            <Button className=" w-fit">{item.button.title}</Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

/**
 *
 * @param item
 * This is a main image component
 * It is used to display the main image in the grid with
 * text section as a footer
 *  it has a space between the image and the text sections
 */
export const MainImageCard3: React.FC<{ item: IGridItem }> = ({ item }) => {
  return (
    <Card
      className="group bg-gray-100 cursor-pointer row-span-2 col-span-2
		grid grid-rows-7
	"
    >
      <CardHeader className="row-span-1">
        {item.new && (
          <span className="rounded-lg py-1 px-2 border-box text-xs bg-blue-500 text-white w-fit">
            New
          </span>
        )}
      </CardHeader>
      <CardContent className={`row-span-4`}>
        <div
          className="image-container h-full w-full grid grid-cols-2 gap-1 items-center justify-center
		  "
        >
          <div
            className={`${
              (item.offerImages?.length as number) > 1
                ? "col-span-2"
                : "col-span-1"
            } `}
          >
            <Image
              src={item.image}
              alt={item.productName}
              width={100}
              height={150}
            />
          </div>
          {item.offerImages?.map((image, index) => (
            <div key={index} className="col-span-1">
              <Image
                src={image}
                alt={item.productName}
                width={100}
                height={150}
              />
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="row-span-2">
        <div className="grid grid-rows-3 w-full items-center jutify-center ">
          <div className="title-container flex justify-center items-center">
            <h5 className="text-lg font-medium row-span-1">
              {item.productName}
            </h5>
          </div>
          <div
            className="flex flex-col gap-2 items-center justify-center group-hover:hidden
			 row-span-2 
		  "
          >
            <p className="text-sm font-medium text-blue-500">
              {item.incentive}
            </p>
            <p className="text-sm font-normal">{item.offer}</p>
          </div>
          <div
            className="hidden group-hover:flex w-full  items-center justify-center
			 group-hover:row-span-2 
		  "
          >
            <Button className=" w-fit">{item.button.title}</Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export const MainImageCard4: React.FC<{ item: IGridItem }> = ({ item }) => {
  return (
    <Card className="group bg-gray-100 cursor-pointer row-span-2 col-span-2">
      <CardHeader>
        {item.new && (
          <span className="rounded-lg py-1 px-2 border-box text-xs bg-blue-500 text-white w-fit">
            New
          </span>
        )}
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4 justify-center items-center">
          <Image
            src={item.image}
            alt={item.productName}
            width={150}
            height={150}
          />
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex flex-col w-full items-center jutify-center">
          <div className="flex flex-col gap-4 items-center justify-center group-hover:hidden">
            <p className="text-sm font-medium text-blue-500">
              {item.incentive}
            </p>
            <p className="text-sm font-normal">{item.offer}</p>
          </div>
          <Button className="hidden group-hover:block w-fit">
            {item.button.title}
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

//TODO edit main image card 3
