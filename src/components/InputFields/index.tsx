import { useController } from "react-hook-form";
import { InputContainer, LabelText } from "./styled";
import React from "react";
import { TextField, TextFieldVariants, Typography } from "@mui/material";

interface InputFieldProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control?: any;
  id?: string;
  name: string;
  label: string;
  type: string;
  variant: TextFieldVariants;
  placeholder: string;
  rules?: Record<string, unknown>;
}

const InputField: React.FC<InputFieldProps> = (props) => {
  const { field, fieldState } = useController(props);

  return (
    <>
  
    <InputContainer>
      <LabelText>{props.label}</LabelText>
      <TextField
        {...field}
        fullWidth
        hiddenLabel
        id={props.id}
        name={props.name}
        type={props.type}
        variant={props.variant}
        // label={props.label}
      />
      {fieldState.error && (
        <Typography sx={{ color: "red", marginTop: "2px", fontSize: "12px" }}>
          {fieldState.error.message}
        </Typography>
      )}
    </InputContainer>
    </>
  );
};

export default InputField;
