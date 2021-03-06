import { ButtonHTMLAttributes, ReactNode } from "react";
import { Container } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function PinkButton({ children, ...rest }: ButtonProps) {
  return(
    <Container type='button' {...rest}>
      {children}
    </Container>
  );
}