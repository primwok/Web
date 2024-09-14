import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import React from "react";
import { Slide } from "./carousel";

type PropType = {
  selected: boolean;
  index: number;
  onClick: () => void;
  slide: Slide;
};

export const Thumb: React.FC<PropType> = (props) => {
  const { selected, index, onClick, slide } = props;

  selected && console.log("selected", selected);

  return (
    <div
      className={"embla-thumbs__slide".concat(
        selected ? " embla-thumbs__slide--selected" : ""
      )}
    >
      <Card
        className={`embla-thumbs__slide__number shadow-md w-10 h-10 flex items-center justify-center rounded-full bg-red-200 
					${selected ? "border border-sky-500" : ""}
			
			`}
        onClick={onClick}
      >
        <CardContent>
          <Image
            src={slide.url ?? ""}
            alt={slide.title ?? "image"}
            width={400}
            height={400}
          />
          {selected && (
            <h6 className="text-sm text-gray-600 font-medium p-0 m-0">
              {slide.title}
            </h6>
          )}
        </CardContent>
      </Card>
      {/* <button
        onClick={onClick}
        type="button"
        className="embla-thumbs__slide__number shadow-md w-10 h-10 flex items-center justify-center rounded-full bg-red-200"
      >
        {index + 1}
      </button> */}
    </div>
  );
};
