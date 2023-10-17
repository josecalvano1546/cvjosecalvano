import styled from "styled-components";

export const TextBgColor = styled.span`
  position: relative;

  &:before {
    content: "";
    position: absolute;
    width: var(--bg-width);
    height: 100%;
    background: var(--highlightColor);
    z-index: -1;
    transition: width 2s ease-in-out;
  }
`;
