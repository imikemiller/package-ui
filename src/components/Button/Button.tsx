/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React from "react";
import { useTheme } from "../../theme";
import styles from "./styles";

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  mode?: "primary" | "secondary";
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
  mode = "primary",
  size = "medium",
  label,
  ...props
}) => {
  const theme = useTheme();
  const [buttonSize, buttonMode] = styles(theme);
  return (
    <button
      css={css`
        ${buttonMode[mode]}
        ${buttonSize[size]}
      `}
      {...props}
    >
      {label}
    </button>
  );
};
