import React from "react";
import { Button } from "./styles";

interface LoginButtonProps {
  onClick:any;
  value:string;
}

export const LoginButton:React.FC<LoginButtonProps> = ({onClick, value}) => {
  return (
    <>
      <Button
      onClick={onClick}
      >{value} </Button>
    </>
  );
};
