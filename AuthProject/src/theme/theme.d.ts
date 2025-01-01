import { PaletteOptions as PaletteOptionsMUI } from "@mui/material";

// eslint-disable-next-line @typescript-eslint/no-unused-expressions
PaletteOptions;

declare module "@mui/material/styles" {
  interface PaletteOptions extends PaletteOptionsMUI {
    button: {
      primary: string;
      radius: string;
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
