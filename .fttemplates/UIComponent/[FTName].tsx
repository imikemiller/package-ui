/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/react";
import { useTheme } from "../../theme";
import styles from "./styles";

export interface <FTName | pascalcase>Props {
  /* Props go here */
  label: string;
}

/**
 * <FTName | pascalcase> component
 */
export const <FTName | pascalcase> = ({
  label = "<FTName | pascalcase>",
  ...props
: <FTName | pascalcase>Props}) => {
  const theme = useTheme();
  const [baseStyles] = styles(theme);
  return (
    <div
      {...props}
      css={css`
        ${baseStyles}
      `}
    >
      {label}
    </div>
    );
};
