import { useController } from "react-hook-form";
import { InputContainer, LabelText } from "./styled";
import React from "react";

interface InputFieldProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: any;
  name: string;
  label: string;
  type: string;
  placeholder: string;
  rules: Record<string, unknown>;
  defaultValue?: string;
}

const InputField: React.FC<InputFieldProps> = (props) => {
  const { field, fieldState } = useController(props);

  return (
    <InputContainer>
      <LabelText>{props.label}</LabelText>
      <input
        {...field}
        placeholder={props.placeholder}
        type={props.type}
        style={{
          padding: "16px 10px",
          width: "auto",
          outline: "none",
          borderRadius: "20px",
          backgroundColor: "white",
          color: "black",
          border: "none",
        }}
      />
      {fieldState.error && (
        <span style={{ color: "red", marginTop: "2px", fontSize: "12px" }}>
          {fieldState.error.message}
        </span>
      )}
    </InputContainer>
  );
};

export default InputField;
