"use client";

// NextJS
import { useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

// Translations
import { useTranslation } from "react-i18next";

// Styles
import * as Styled from "./styles";

// Components
import ThemeSwitcher from "../ThemeSwitcher";
import LanguageSwitcher from "../LanguageSwitcher";

// Assets
import NavBarMenuLight from "../../../../public/navBarMenuLight.svg";
import NavBarMenuDark from "../../../../public/navBarMenuDark.svg";

// Utils
import { SECTIONS } from "@/app/utils/navBar";
import { RampartOne, RubikFont } from "@/app/utils/fonts";

const NavBar = () => {
  const { t } = useTranslation("NAVBAR");
  const [showNavBar, setShowNavBar] = useState(false);
  const { theme } = useTheme();

  const renderSections = () => {
    return SECTIONS.map(({ key, label }, id) => (
      <Styled.NavList
        key={id}
        to={key}
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        activeClass="active"
        className={RubikFont.className}
        onClick={() => {
          setShowNavBar(!showNavBar);
        }}
      >
        {t(label)}
      </Styled.NavList>
    ));
  };

  return (
    <>
      <Styled.NavMobile
        onClick={() => {
          setShowNavBar(!showNavBar);
        }}
      >
        <Image
          src={theme === "dark" ? NavBarMenuDark : NavBarMenuLight}
          alt="NavBar Menu icon"
        />
      </Styled.NavMobile>

      <Styled.ShadowBackground
        $showNavBar={showNavBar}
        onClick={() => {
          setShowNavBar(!showNavBar);
        }}
      />

      <Styled.NavContainer $showNavBar={showNavBar}>
        <Styled.LogoContainer>
          <Styled.LogoText data-text="." className={RampartOne.className}>
            JC
          </Styled.LogoText>
        </Styled.LogoContainer>

        <Styled.NavWrapper>{renderSections()}</Styled.NavWrapper>

        <Styled.ButtonsContainer>
          <ThemeSwitcher />
          <LanguageSwitcher />
        </Styled.ButtonsContainer>
      </Styled.NavContainer>
    </>
  );
};
export default NavBar;
