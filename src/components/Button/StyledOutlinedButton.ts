import { Button, ButtonProps, styled } from "@mui/material";

interface StyleButtonProps extends ButtonProps {
  fs?: number;
  styleType?: "default" | "inverted";
}

const StyledOutlinedButton = styled(Button)<StyleButtonProps>(
  ({ theme, fs, styleType }) => ({
    fontSize: fs ? `${fs}px` : "12px",
    fontWeight: "600",
    height: "35px",
    borderRadius: "8px",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    backgroundColor: "rgba(97, 160, 252, 0.1)",
    color:
      styleType === "default"
        ? theme.palette.text.primary
        : styleType === "inverted"
        ? theme.palette.primary.light
        : "",
  })
);
const StyledContainedButton = styled(Button)<StyleButtonProps>(
  ({ theme, fs, styleType }) => ({
    fontSize: fs ? `${fs}px` : "12px",
    fontWeight: "500",
    height: "35px",
    borderRadius: "10px",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    backgroundColor: theme.palette.button.primary,
    color:
      styleType === "default"
        ? "#FFFFFF"
        : styleType === "inverted"
        ? theme.palette.button.hoverColor
        : "",
  })
);

export { StyledOutlinedButton, StyledContainedButton };
