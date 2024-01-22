import React from "react";
import { LoginContent, Input } from "./styles";

interface InputTextProps {
  placeholder: string;
  value: string;
  onChange:any;
}

export const InputText: React.FC<InputTextProps> = ({ placeholder, value, onChange }) => {
  return (
    <LoginContent>
      <Input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
         />
    </LoginContent>
  );
};
