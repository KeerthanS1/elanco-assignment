import { TextField } from "@mui/material";
import React from "react";

interface props {
  onChange?: any;
  placeholder: string;
  label: string;
  id: string;
  onInputChange?: any;
}

const TextInput: React.FunctionComponent<props> = ({
  onChange,
  placeholder,
  label,
  id,
  onInputChange,
}) => {
  return (
    <TextField
      id={id}
      size="small"
      fullWidth
      onChange={onChange || null}
      placeholder={placeholder}
      label={label}
      onInput={onInputChange}
    />
  );
};

export default TextInput;
