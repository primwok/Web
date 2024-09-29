"use client";

import { LineItem, Region } from "@medusajs/medusa";

import Item from "@/modules/cart/components/item";
import SkeletonLineItem from "@/modules/skeletons/components/skeleton-line-item";
import { cn } from "@/lib/utils";
import { Table, TableBody } from "@/components/ui/table";

type ItemsTemplateProps = {
  items?: Omit<LineItem, "beforeInsert">[];
  region?: Region;
};

const ItemsPreviewTemplate = ({ items, region }: ItemsTemplateProps) => {
  const hasOverflow = items && items.length > 4;

  return (
    <div
      className={cn({
        "pl-[1px] overflow-y-scroll overflow-x-hidden no-scrollbar max-h-[420px]":
          hasOverflow,
      })}
    >
      <Table>
        <TableBody data-testid="items-table">
          {items && region
            ? items
                .sort((a, b) => {
                  return a.created_at > b.created_at ? -1 : 1;
                })
                .map((item) => {
                  return (
                    <Item
                      key={item.id}
                      item={item}
                      region={region}
                      type="preview"
                    />
                  );
                })
            : Array.from(Array(5).keys()).map((i) => {
                return <SkeletonLineItem key={i} />;
              })}
        </TableBody>
      </Table>
    </div>
  );
};

export default ItemsPreviewTemplate;
