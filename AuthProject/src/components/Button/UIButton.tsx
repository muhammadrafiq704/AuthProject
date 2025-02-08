import { ButtonProps } from "@mui/material";
import {
  StyledContainedButton,
  StyledOutlinedButton,
} from "./StyledOutlinedButton";

interface UIButtonProps extends ButtonProps {
  label?: string;
  variant?: "contained" | "outlined";
  fs?: number;
  styleType?: "default" | "inverted";
  isLoading?: boolean;
}

const UIButton = ({
  label,
  variant,
  fs,
  styleType,
  isLoading = false,
  ...props
}: UIButtonProps) => {
  return variant === "outlined" ? (
    <StyledOutlinedButton
      fs={fs}
      styleType={styleType}
      disabled={isLoading}
      {...props}
    >
      {label}
    </StyledOutlinedButton>
  ) : variant === "contained" ? (
    <StyledContainedButton
      fs={fs}
      styleType={styleType}
      disabled={isLoading}
      {...props}
    >
      {label}
    </StyledContainedButton>
  ) : null;
};

export default UIButton;
