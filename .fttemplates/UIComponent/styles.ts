import { css, SerializedStyles } from "@emotion/react";
import { Theme } from "../../theme";

/**
 * Function that accepts a theme and returns an array of style objects or maps of style objects.
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
    // define some styles here
    const baseStyles = css`
      color:${theme.colors.primary}
    `

    // return them in this array
    return [baseStyles];
  };
  
  export default styles;