import { PaletteOptions as PaletteOptionsMUI } from "@mui/material";

// eslint-disable-next-line @typescript-eslint/no-unused-expressions
PaletteOptions;

declare module "@mui/material/styles" {
  interface Palette{
    button: {
      primary: string;
      radius: string;
      hoverColor:string;
    },
  }
  interface PaletteOptions extends PaletteOptionsMUI {
    button: {
      primary: string;
      radius: string;
      hoverColor: string,
    };
    heading: {
      primary: string;
    };
    text: {
      primary: string;
    };
    border: {
      primary: string;
    };
    radius: {
      shape: string;
      inputRadius: string;
    };
  }
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface Palette extends PaletteOptions {}

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false; // removes the `xs` breakpoint
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true; // adds the `mobile` breakpoint
    tablet: true;
    laptop: true;
    desktop: true;
  }
}