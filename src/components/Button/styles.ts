import { css, SerializedStyles } from "@emotion/react";
import { Theme } from "../../theme";

/**
 * Function that accepts a theme and returns an array of style objects or maps of style objects
 *
 * Eg Style Object:
 *
 * css`
    color:"red"
  `;
 *
 * Eg Map of Style Objects:
 *
 * const buttonMode = {
    primary: css`
      color: "red";
    `,
    secondary: css`
      color: "blue"
    `,
  }
 *
 */
const styles = (
  theme: Theme,
): ({ [key: string]: SerializedStyles } | SerializedStyles)[] => {
  /**
     * Common button styles
     */
  const buttonBase = css`
      font-family: ${theme.fonts.button};
      font-weight: ${theme.fontWeights[2]};
      border: 0;
      border-radius: ${theme.borders.radius};
      cursor: pointer;
      display: inline-block;
      line-height: ${theme.lineHeights.button};
    `;

  /**
     * Primary/Secondary button variants
     */
  const buttonMode = {
    primary: css`
        ${buttonBase}
        color: ${theme.colors.primaryText};
        background-color: ${theme.colors.primary};
      `,
    secondary: css`
        ${buttonBase}
        color: #${theme.colors.secondaryText};
        background-color: transparent;
        border:${theme.borders.light} solid ${theme.colors.muted};
        box-shadow: ${theme.boxShadow.base};
      `,
  };

  /**
     * Size variants
     */
  const buttonSize = {
    small: css`
        font-size: ${theme.fontSizes[0]};
        padding: 10px 16px;
      `,
    medium: css`
        font-size: ${theme.fontSizes[1]};
        padding: 11px 20px;
      `,
    large: css`
        font-size: ${theme.fontSizes[2]};
        padding: 12px 24px;
      `,
  };

  return [buttonSize, buttonMode];
};

export default styles;
