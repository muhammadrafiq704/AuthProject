import { Button, ButtonProps, styled } from "@mui/material";

interface StyleButtonProps extends ButtonProps {
  fs?: number;
  styletype?: "default" | "inverted";
}

const StyledOutlinedButton = styled(Button)<StyleButtonProps>(
  ({ theme, fs, styletype }) => ({
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
    styletype === "default"
        ? theme.palette.text.primary
        : styletype === "inverted"
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
  ({ theme, fs, styletype }) => ({
    fontSize: fs ? `${fs}px` : "12px",
    fontWeight: "500",
    height: "35px",
    borderRadius: "10px",
    paddingLeft: "1.5rem",
    paddingRight: "1.5rem",
    backgroundColor: theme.palette.button.primary,
    color:
    styletype === "default"
        ? "#FFFFFF"
        : styletype === "inverted"
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
