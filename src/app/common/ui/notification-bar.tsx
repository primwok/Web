import { PageWidth } from "./page-width";

export const CNotificationBar: React.FC<{
  content: string;
  type: "info" | "warning" | "error";
}> = ({ content, type }) => {
  const bgColor =
    type === "info"
      ? "bg-black"
      : type === "warning"
      ? "bg-yellow-600"
      : "bg-red-600";
  const textColor =
    type === "info"
      ? "text-blue-600"
      : type === "warning"
      ? "text-yellow-600"
      : "text-red-600";
  return (
    // <PageWidth>
    <div
      className={
        bgColor +
        " " +
        textColor +
        " w-full h-12 flex items-center justify-center p-2"
      }
    >
      <p className="text-white text-sm font-bold">{content}</p>
    </div>
    // </PageWidth>
  );
};
