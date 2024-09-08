import { Search } from "lucide-react";

export const SearchTriggerBtn: React.FC<{
  height?: number;
  width?: number;
}> = ({ height, width }) => {
  return <Search className={`w-${width ?? 5} h-${height ?? 5}`} />;
};
