import { ProductOption } from "@medusajs/medusa";
import { clx } from "@medusajs/ui";
import React from "react";

import { onlyUnique } from "@/lib/util/only-unique";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

type OptionSelectProps = {
  option: ProductOption;
  current: string;
  updateOption: (option: Record<string, string>) => void;
  title: string;
  disabled: boolean;
  "data-testid"?: string;
};

const OptionSelect: React.FC<OptionSelectProps> = ({
  option,
  current,
  updateOption,
  title,
  "data-testid": dataTestId,
  disabled,
}) => {
  const filteredOptions = option.values.map((v) => v.value).filter(onlyUnique);

  return (
    <div key={option.id} className="flex flex-col gap-4">
      <h4 className="text-sm font-semibold">{title}</h4>
      <div className="grid  grid-cols-2 gap-3" data-testid={dataTestId}>
        {filteredOptions.map((v) => (
          <Card
            onClick={() => updateOption({ [option.id]: v })}
            key={v}
            className="p-0 cursor-pointer rounded-md border border-gray-400"
          >
            <CardContent
              className={`flex flex-row items-center justify-between h-[3rem]  p-0 px-4 rounded-md
                          ${disabled ? "bg-gray-50" : "bg-sky-50"}
                          `}
            >
              <h6 className="text-sm text-gray-600 font-medium p-0 m-o">{v}</h6>
              <Checkbox checked={v === current} />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
    // <div className="flex flex-col gap-y-3">
    //   <span className="text-sm">Select {title}</span>
    //   <div
    //     className="flex flex-wrap justify-between gap-2"
    //     data-testid={dataTestId}
    //   >
    //     {filteredOptions.map((v) => {
    //       return (
    //         <button
    //           onClick={() => updateOption({ [option.id]: v })}
    //           key={v}
    //           className={clx(
    //             "border-ui-border-base bg-ui-bg-subtle border text-small-regular h-10 rounded-rounded p-2 flex-1 ",
    //             {
    //               "border-ui-border-interactive": v === current,
    //               "hover:shadow-elevation-card-rest transition-shadow ease-in-out duration-150":
    //                 v !== current,
    //             }
    //           )}
    //           disabled={disabled}
    //           data-testid="option-button"
    //         >
    //           {v}
    //         </button>
    //       );
    //     })}
    //   </div>
    // </div>
  );
};

export default OptionSelect;
