import { PageWidth } from "./page-width";

export const CNotificationBar: React.FC<{
  content: string;
  type: "info" | "warning" | "error";
}> = ({ content, type }) => {
  const bgColor =
    type === "info"
      ? "bg-sky-600"
      : type === "warning"
      ? "bg-yellow-600"
      : "bg-red-600";
  const textColor = "text-white";
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
      <p className="text-sm font-medium">{content}</p>
    </div>
    // </PageWidth>
  );
};
