// Styles
import { RubikFont } from "@/app/utils/fonts";
import * as Styled from "./styles";

// Types
export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  visible?: boolean;
  children?: React.ReactNode;
}

const Button = ({ disabled = false, onClick, children }: Props) => {
  return (
    <Styled.ButtonContainer
      className={RubikFont.className}
      onClick={onClick}
      $disabled={disabled}
    >
      {children}
    </Styled.ButtonContainer>
  );
};

export default Button;
