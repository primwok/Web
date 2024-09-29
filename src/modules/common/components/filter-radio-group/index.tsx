import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { MinusIcon, PlusIcon } from "lucide-react";
import React, { ChangeEvent } from "react";

type FilterRadioGroupProps = {
  title: string;
  items: {
    value: string;
    label: string;
  }[];
  value: any;
  handleChange: (...args: any[]) => void;
  "data-testid"?: string;
};

const FilterRadioGroup = ({
  title,
  items,
  value,
  handleChange,
  "data-testid": dataTestId,
}: FilterRadioGroupProps) => {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <div className="flex flex-col bg-white p-4 w-full">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <div className="flex items-center justify-between">
          <h6 className="text-sm font-bold text-gray-900 uppercase">{title}</h6>
          <CollapsibleTrigger>
            <Button variant="ghost" size="sm" className="w-9 p-0">
              {isOpen ? <MinusIcon /> : <PlusIcon />}
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent>
          <div className="flex flex-col gap-2 p-2">
            {items.map((i, index) => (
              <div key={index} className="flex items-center justify-between">
                <Checkbox
                  className="rounded-full"
                  data-testid={dataTestId}
                  checked={i.value === value}
                  onClick={(e) =>
                    handleChange(
                      e as unknown as ChangeEvent<HTMLButtonElement>,
                      i.value
                    )
                  }
                  value={i.value}
                />
                <p className="text-sm">{i.label}</p>
              </div>
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default FilterRadioGroup;
