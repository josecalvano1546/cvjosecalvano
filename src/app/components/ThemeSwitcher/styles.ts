import Image from "next/image";
import styled from "styled-components";

// Componentes de estilo
export const SwitchWrapper = styled.label`
  position: relative;
  display: inline-block;
  width: 55px;
  height: 25px;
`;

export const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #353353e6;
  transition: 0.4s;

  ${SwitchInput}:checked + & {
    background-color: #d9d9d9;
  }

  ${SwitchInput}:focus + & {
    box-shadow: 0 0 1px #d9d9d9;
  }

  ${SwitchInput}:checked + &::before {
    transform: translateX(30px);
  }

  &:before {
    position: absolute;
    content: "";
    height: 21px;
    width: 21px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    transition: 0.4s;
    z-index: 2;
  }
`;

export const RoundedSlider = styled(Slider)`
  border-radius: 34px;
  &:before {
    border-radius: 50%;
  }
`;

export const MoonImage = styled(Image)`
  position: absolute;
  top: 20%;
  width: 15px;
  height: 15px;
  right: 5px;
`;

export const SunImage = styled(Image)`
  position: absolute;
  top: 20%;
  width: 15px;
  height: 15px;
`;
