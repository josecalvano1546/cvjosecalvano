"use client";

// Next.js
import { useState } from "react";

// Theme
import { useTheme } from "next-themes";

//Styles
import * as Styled from "./styles";

// Images
import Moon from "../../../../public/moon.svg";
import Sun from "../../../../public/sun.svg";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [checked, setChecked] = useState(false);

  const handleClick = () => {
    setChecked(!checked);
    if (theme === "light") return setTheme("dark");
    setTheme("light");
  };

  return (
    <Styled.SwitchWrapper className="switch">
      <Styled.SwitchInput
        type="checkbox"
        onClick={handleClick}
        checked={checked}
      />
      <Styled.RoundedSlider className="slider round" />
      <Styled.MoonImage src={Moon} alt="moonIcon" height={30} width={30} />
      <Styled.SunImage src={Sun} alt="sunIcon" height={30} width={30} />
    </Styled.SwitchWrapper>
  );
};
export default ThemeSwitcher;
