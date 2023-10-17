import styled from "styled-components";

export const ButtonContainer = styled.button<{ $disabled: boolean }>`
  height: 42px;
  width: 130px;
  border-radius: 25px;
  font-size: 16px;
  font-weight: 800;
  border: none;
  cursor: pointer;
  background-color: var(--ButtonBg);
  color: var(--ButtonColor);
  &:hover {
    transition: transform 0.3s ease-in-out;
    transform: scale(1.05);
  }
`;
