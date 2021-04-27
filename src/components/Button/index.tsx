import { ButtonHTMLAttributes, ReactNode } from "react";
import { Container } from "./styles";

import chevronDownIcon from '../../assets/chevron-down.svg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function Button({ children, ...rest }: ButtonProps) {
  return(
    <Container type='button' {...rest}>
      <img src={chevronDownIcon} alt="Open genres"/>
      {children}
    </Container>
  );
}