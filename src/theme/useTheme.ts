import { Theme, theme as defaultTheme } from "./theme";
import { useTheme as useEmotionTheme } from "@emotion/react";

export const useTheme = (): Theme => {
  // use the hook to get the provided theme
  let theme: Theme = useEmotionTheme() as Theme;
  // if its null just use the
  if (!Object.keys(theme).length) theme = defaultTheme;

  return theme as Theme;
};
