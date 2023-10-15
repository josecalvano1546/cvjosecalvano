import { Link } from "react-scroll";
import styled, { css } from "styled-components";

export const NavContainer = styled.nav<{ $showNavBar?: boolean }>`
  display: flex;
  position: fixed;
  flex-direction: column;
  justify-content: space-around;
  top: 0;
  left: 0;
  width: 150px;
  height: 100%;
  padding: 30px 50px;
  background: var(--navbackground);
  box-shadow: 5px 4px 10px 0px rgba(0, 0, 0, 0.1);

  @media (width < 769px) {
    transform: translateX(-100%);
    transition: 0.5s ease;
    ${(props) =>
      props.$showNavBar &&
      css`
        transform: translateX(0);
      `}
  }

  @media (width >= 769px) {
    background: var(--navbackgroundDesktop);
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  flex: 1;
`;

export const LogoText = styled.h1`
  line-height: 0;
  font-size: 40px;
  color: var(--logoColor);
  &:after {
    content: attr(data-text);
    color: var(--logoDot);
  }
`;

export const NavWrapper = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
  width: 100%;
  font-weight: 700;
  font-size: 16px;
  gap: 22px;
`;

export const NavList = styled(Link)`
  cursor: pointer;
  color: var(--linkColor);
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 75px;
`;

export const NavMobile = styled.div`
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  position: fixed;
  align-items: center;
  padding-left: 30px;
  background-color: var(--navBgMobile);
  box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.2);

  @media (width >= 769px) {
    display: none;
  }
`;

export const ShadowBackground = styled.div<{ $showNavBar?: boolean }>`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  background: #00000066;

  @media (width < 769px) {
    ${(props) =>
      props.$showNavBar &&
      css`
        opacity: 1;
      `}
  }

  @media (width >= 769px) {
    display: none;
  }
`;
