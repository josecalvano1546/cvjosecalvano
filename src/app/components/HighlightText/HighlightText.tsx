"use client";

// NextJS
import { useEffect, useState } from "react";

// Styles
import * as Styled from "./styles";

// Utils
import { RubikFont } from "@/app/utils/fonts";

// Types
export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

const HighlightText = ({ children }: Props) => {
  const [bgWidth] = useState("100%");

  useEffect(() => {
    const wt = document.querySelector(".anim-bg") as HTMLElement | null;
    if (wt) {
      wt.style.setProperty("--bg-width", bgWidth);
    }
  }, [bgWidth]);

  return (
    <Styled.TextBgColor className="anim-bg"> {children}</Styled.TextBgColor>
  );
};
export default HighlightText;
