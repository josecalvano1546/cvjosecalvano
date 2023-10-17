"use client";

// NextJS
import Image from "next/image";
import { useTranslation } from "react-i18next";

// Styles
import * as Styled from "./styles";

// Images
import Profile from "../../../../../public/profile.svg";

// Component
import IconsBackground from "./IconsBackground";
import Button from "../../Button/Button";

// Utils
import { RubikFont } from "@/app/utils/fonts";
import HighlightText from "../../HighlightText";

const HomeSection = () => {
  const { t } = useTranslation("HOME");

  return (
    <Styled.HomeSection id="home" className={RubikFont.className}>
      <IconsBackground />
      <Styled.HomeContainer>
        <Image src={Profile} alt="Image profile" height={110} width={110} />
        <Styled.Title>José Calvano</Styled.Title>
        <Styled.SubTitle>
          {" "}
          {t("SUBTITLE_GREETING")}{" "}
          <HighlightText className="anim-bg">
            {" "}
            {t("SUBTITLE_ROL")}
          </HighlightText>
        </Styled.SubTitle>
        <Styled.ButtonContainer
          to="contact"
          smooth={true}
          offset={0}
          duration={500}
          activeClass="active"
        >
          <Button> {t("BUTTON")} </Button>
        </Styled.ButtonContainer>
      </Styled.HomeContainer>
    </Styled.HomeSection>
  );
};
export default HomeSection;
