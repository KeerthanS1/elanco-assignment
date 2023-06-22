import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import React from "react";

interface props {
  id: string;
  value: string;
  label: string;
  handleChange: any;
  placeholder: string;
  data: [];
}

const SelectInput: React.FunctionComponent<props> = ({
  id,
  value,
  label,
  handleChange,
  placeholder,
  data,
}) => {
  return (
    <Select
      displayEmpty
      id={id}
      value={value}
      size="small"
      fullWidth
      onChange={handleChange}
    >
      <MenuItem value={""} disabled>
        {placeholder}
      </MenuItem>
      {data?.map((element: any, index: number) => (
        <MenuItem value={element} key={index}>
          {element}
        </MenuItem>
      ))}
    </Select>
  );
};

export default SelectInput;
