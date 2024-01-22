import React from "react";
import { Button } from "./styles";

interface LoginButtonProps {
  onClick:any;
}

export const LoginButton:React.FC<LoginButtonProps> = ({onClick}) => {
  return (
    <>
      <Button
      onClick={onClick}
      >Entrar</Button>
    </>
  );
};
