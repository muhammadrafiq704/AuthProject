import { useController } from "react-hook-form";
import { InputContainer, LabelText } from "./styled";
import React, { useState } from "react";
import { InputAdornment, TextField, Typography } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

interface InputFieldProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control?: any;
  id?: string;
  name: string;
  label: string;
  type: string;
  placeholder: string;
  rules?: Record<string, unknown>;
  icon?: boolean;
}

const InputField: React.FC<InputFieldProps> = (props) => {
  const { field, fieldState } = useController(props);

  const [showPassword, setShowPassword] = useState(false);

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
          type={showPassword ? "text" : props.type}
          placeholder={props.placeholder}
          sx={{
            backgroundColor: "#ffff",
            borderRadius: "50px",

            "& .MuiInputBase-root": {
              border: "none",
              boxShadow: "none",
            },
            "& .MuiInputBase-input": {
              fontSize: "14px",
            },
            "& .MuiInputBase-input::placeholder": {
              fontSize: "14px",
              color: "#888",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
          }}
          InputProps={{
            endAdornment: props.icon ? (
              <InputAdornment position="end">
                {showPassword ? (
                  <Visibility
                    onClick={() => setShowPassword(!showPassword)}
                    sx={{ fontSize: "20px", cursor: "pointer" }}
                    color="info"
                  />
                ) : (
                  <VisibilityOff
                    onClick={() => setShowPassword(!showPassword)}
                    sx={{ fontSize: "20px" }}
                    color="info"
                  />
                )}
              </InputAdornment>
            ) : null,
          }}
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
