"use client";

// Style
import * as Styled from "./styles";

// Hooks
import { useBrowserLanguageState } from "@/app/hooks/contexts/useBrowserLanguage";

// Images
import EN from "../../public/EN.svg";
import ES from "../../public/ES.svg";

const LanguageSwitcher = () => {
  const { browserLanguage, handleBrowserLanguage } = useBrowserLanguageState();
  
  const handleClick = () => {
    handleBrowserLanguage(browserLanguage === "ES" ? "EN" : "ES");
  };

  return (
    <Styled.Container>
      <Styled.FlagImage
        src={browserLanguage === "ES" ? ES : EN}
        alt="Flag Icon"
        height={30}
        width={30}
        onClick={handleClick}
      />
    </Styled.Container>
  );
};
export default LanguageSwitcher;
