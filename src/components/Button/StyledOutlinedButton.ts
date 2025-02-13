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
    whiteSpace: "nowrap", 
    overflow: "hidden",
    backgroundColor: "rgba(97, 160, 252, 0.1)",
    color:
      styleType === "default"
        ? theme.palette.text.primary
        : styleType === "inverted"
        ? theme.palette.primary.light
        : "",
    [theme.breakpoints.between("mobile", "tablet")]: {
      fontSize: "10px",
      fontWeight: "400",
      height: "24px",
      width: "30px",
    },
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
    [theme.breakpoints.between("mobile", "tablet")]: {
      fontSize: "10px",
      fontWeight: "500",
      height: "24px",
      width: "18px",
    },
  })
);

export { StyledOutlinedButton, StyledContainedButton };
