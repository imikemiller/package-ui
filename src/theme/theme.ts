export interface Theme {
    breakpoints: string[];
    space: number[];
    fonts: Fonts;
    fontSizes: number[];
    fontWeights: FontWeights;
    lineHeights: LineHeights;
    colors: Colors;
    borders: Borders;
    boxShadow: BoxShadow;
}

export interface Fonts {
    body: string;
    heading: string;
    title: string;
    label: string;
    button: string;
}

export interface FontWeights {
    body: number;
    heading: number;
    bold: number;
    normal: number;
}

export interface LineHeights {
    body: number;
    heading: number;
    title: number;
    label: number;
    button: number;
}

export interface Colors {
    primaryText: string;
    secondaryText: string;
    background: string;
    primary: string;
    secondary: string;
    muted: string;
}

export interface Borders {
    light: string;
    heavy: string;
    radius: string;
}

export interface BoxShadow {
    base: string;
    hover: string;
}

export const theme: Theme = {
  breakpoints: ["40em", "52em", "64em"],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body:
        "system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", sans-serif",
    heading: "inherit",
    title: "Menlo, monospace",
    label:
    "system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", sans-serif",
    button:
    "system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", sans-serif",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
    normal: 400,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
    title: 1.2,
    label: 1.125,
    button: 1.2,
  },
  colors: {
    primaryText: "#fff",
    secondaryText: "#111",
    background: "#fff",
    primary: "#07c",
    secondary: "#30c",
    muted: "#f6f6f6",
  },
  borders: {
    light: "1px",
    heavy: "2px",
    radius: "4px",
  },
  boxShadow: {
    base: "0px 4px 12px rgba(0, 0, 0, 0.06), 0px 0px 4px rgba(0, 0, 0, 0.08);",
    hover: "0px 12px 32px -12px rgba(3, 19, 18, 0.29)",
  },
};
