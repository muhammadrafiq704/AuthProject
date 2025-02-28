import { ButtonProps } from "@mui/material";
import {
  StyledContainedButton,
  StyledOutlinedButton,
} from "./StyledOutlinedButton";

interface UIButtonProps extends ButtonProps {
  label?: string;
  variant?: "contained" | "outlined";
  fs?: number;
  styletype?: "default" | "inverted";
  isLoading?: boolean;
}

const UIButton = ({
  label,
  variant,
  fs,
  styletype,
  isLoading = false,
  ...props
}: UIButtonProps) => {
  return variant === "outlined" ? (
    <StyledOutlinedButton
      fs={fs}
      styletype={styletype}
      disabled={isLoading}
      {...props}
    >
      {label}
    </StyledOutlinedButton>
  ) : variant === "contained" ? (
    <StyledContainedButton
      fs={fs}
      styletype={styletype}
      disabled={isLoading}
      {...props}
    >
      {label}
    </StyledContainedButton>
  ) : null;
};

export default UIButton;
