import { PageWidth } from "./page-width";

export const CNotificationBar: React.FC<{
  content: string;
  type: "info" | "warning" | "error";
}> = ({ content, type }) => {
  const bgColor =
    type === "info"
      ? "bg-blue-500"
      : type === "warning"
      ? "bg-yellow-500"
      : "bg-red-500";
  const textColor =
    type === "info"
      ? "text-blue-500"
      : type === "warning"
      ? "text-yellow-500"
      : "text-red-500";
  return (
    <PageWidth>
      <div
        className={
          bgColor +
          " " +
          textColor +
          " w-full h-12 flex items-center justify-center"
        }
      >
        <p className="text-white">{content}</p>
      </div>
    </PageWidth>
  );
};
