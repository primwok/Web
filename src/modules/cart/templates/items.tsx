import { LineItem, Region } from "@medusajs/medusa";

import Item from "@/modules/cart/components/item";
import SkeletonLineItem from "@/modules/skeletons/components/skeleton-line-item";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type ItemsTemplateProps = {
  items?: Omit<LineItem, "beforeInsert">[];
  region?: Region;
};

const ItemsTemplate = ({ items, region }: ItemsTemplateProps) => {
  return (
    <div>
      <div className="pb-3 flex items-center">
        <h2 className="text-[1.5rem] leading-[2.75rem]">Cart</h2>
      </div>
      <Table>
        <TableHeader className="border-t-0">
          <TableRow className="text-ui-fg-subtle txt-medium-plus">
            <TableHead className="!pl-0">Item</TableHead>
            <TableHead></TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead className="hidden sm:table-cell">Price</TableHead>
            <TableHead className="!pr-0 text-right">Total</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items && region
            ? items
                .sort((a, b) => {
                  return a.created_at > b.created_at ? -1 : 1;
                })
                .map((item) => {
                  return <Item key={item.id} item={item} region={region} />;
                })
            : Array.from(Array(5).keys()).map((i) => {
                return <SkeletonLineItem key={i} />;
              })}
        </TableBody>
      </Table>
    </div>
  );
};

export default ItemsTemplate;
