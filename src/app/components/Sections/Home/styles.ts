import { Link } from "react-scroll";
import styled from "styled-components";

export const ButtonContainer = styled(Link)`
  margin-top: 90px;
`;

export const HomeSection = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: flex-end;
  background-color: var(--homeSectionBg);
`;

export const HomeContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (width >= 769px) {
    width: calc(100% - 250px);
  }
`;

const Fonts = styled.p`
  z-index: 1;
  font-style: normal;
  line-height: normal;
  color: var(--textColorHome);
`;

export const Title = styled(Fonts)`
  font-size: 36px;
  font-weight: 600;
`;

export const SubTitle = styled(Fonts)`
  font-size: 18px;
  font-weight: 500;
`;

export const IconContainer = styled.div<{
  $iconTop?: string;
  $iconLeft?: string;
}>`
  position: absolute;
  top: ${(props) => props.$iconTop};
  left: ${(props) => props.$iconLeft};
`;
