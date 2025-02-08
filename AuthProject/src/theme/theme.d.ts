import { PaletteOptions as PaletteOptionsMUI } from "@mui/material";

// eslint-disable-next-line @typescript-eslint/no-unused-expressions
PaletteOptions;

declare module "@mui/material/styles" {
  interface Palette {
    button: {
      primary: string;
      radius: string;
      hoverColor: string;
    };
    customTextColor: {
      primary: string;
      secondary: string;
    };
    categoryColor: {
      bgColor1: string;
      textColor1: string;
      bgColor2: string;
      textColor2: string;
      bgColor3: string;
      textColor3: string;
      bgColor4: string;
      textColor4: string;
      bgColor5: string;
      textColor5: string;
      bgColor6: string;
      textColor6: string;
    };
  }
  interface PaletteOptions extends PaletteOptionsMUI {
    button: {
      primary: string;
      radius: string;
      hoverColor: string;
    };
    heading: {
      primary: string;
    };
    text: {
      primary: string;
      textColor: string;
      textColor: string;
    };
    border: {
      primary: string;
    };
    radius: {
      shape: string;
      inputRadius: string;
    };
    customTextColor: {
      primary: string;
      secondary: string;
    };
    categoryColor: {
      bgColor1: string;
      textColor1: string;
      bgColor2: string;
      textColor2: string;
      bgColor3: string;
      textColor3: string;
      bgColor4: string;
      textColor4: string;
      bgColor5: string;
      textColor5: string;
      bgColor6: string;
      textColor6: string;
    };
  }
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface Palette extends PaletteOptions {}

declare module "@mui/material/styles" {
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
