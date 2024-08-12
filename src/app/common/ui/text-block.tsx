import React from "react";
import { PageWidth } from "./page-width";
import Link from "next/link";

export const CText: React.FC<
  React.PropsWithChildren<{
    tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
    content: string;
    orientation?: "left" | "right" | "center";
    spacingT?: "1x" | "2x" | "3x" | "4x" | "5x" | "6x" | "7x";
    spacingB?: "1x" | "2x" | "3x" | "4x" | "5x" | "6x" | "7x";
    spacingL?: "1x" | "2x" | "3x" | "4x" | "5x" | "6x" | "7x";
    spacingR?: "1x" | "2x" | "3x" | "4x" | "5x" | "6x" | "7x";
    type: "link" | "text";
    underline?: boolean;
    url?: string;
  }>
> = ({
  tag,
  content,
  orientation,
  spacingT,
  spacingB,
  spacingL,
  spacingR,
  type,
  underline,
  url,
}) => {
  const size =
    tag === "h1"
      ? "text-7xl font-bold"
      : tag === "h2"
      ? "text-4xl font-bold"
      : tag === "h3"
      ? "text-3xl font-bold"
      : tag === "h4"
      ? "text-2xl font-bold"
      : tag === "h5"
      ? "text-xl font-bold"
      : tag === "h6"
      ? "text-lg font-bold"
      : "text-base font-normal";

  const orient =
    orientation === "center"
      ? "text-center"
      : orientation === "left"
      ? "text-left"
      : orientation === "right"
      ? "text-right"
      : "text-center";

  const orientLink =
    orientation === "center"
      ? "justify-center"
      : orientation === "left"
      ? "justify-start"
      : orientation === "right"
      ? "justify-end"
      : "justify-center";
  const marginT =
    spacingT === "1x"
      ? "mt-1"
      : spacingT === "2x"
      ? "mt-3"
      : spacingT === "3x"
      ? "mt-6"
      : spacingT === "4x"
      ? "mt-9"
      : spacingT === "5x"
      ? "mt-12"
      : spacingT === "6x"
      ? "mt-15"
      : "mt-0";

  const marginB =
    spacingB === "1x"
      ? "mb-1"
      : spacingB === "2x"
      ? "mb-3"
      : spacingB === "3x"
      ? "mb-6"
      : spacingB === "4x"
      ? "mb-9"
      : spacingB === "5x"
      ? "mb-12"
      : spacingB === "6x"
      ? "mb-15"
      : "mb-0";

  const marginL =
    spacingL === "1x"
      ? "ml-1"
      : spacingL === "2x"
      ? "ml-3"
      : spacingL === "3x"
      ? "ml-6"
      : spacingL === "4x"
      ? "ml-9"
      : spacingL === "5x"
      ? "ml-12"
      : spacingL === "6x"
      ? "ml-15"
      : "ml-0";

  const marginR =
    spacingR === "1x"
      ? "mr-1"
      : spacingR === "2x"
      ? "mr-3"
      : spacingR === "3x"
      ? "mr-6"
      : spacingR === "4x"
      ? "mr-9"
      : spacingR === "5x"
      ? "mr-12"
      : spacingR === "6x"
      ? "mr-15"
      : "mr-0";

  return (
    <PageWidth>
      {type === "text" ? (
        <h3
          className={
            size +
            " " +
            orient +
            " " +
            marginT +
            " " +
            marginB +
            " " +
            marginL +
            " " +
            marginR
          }
        >
          {content}
        </h3>
      ) : (
        <div
          className={`flex ${orientLink} ${marginT} 
        ${marginB} ${marginL} ${marginR}
        `}
        >
          <Link href={url ? url : "#"}>{content}</Link>
          {underline && <div className="underline"></div>}
        </div>
      )}
    </PageWidth>
  );
};
