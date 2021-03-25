import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { Button as ThemedButton, ButtonProps, ThemeProvider } from "../";

import { theme } from "../tests/theme/testTheme";

export default {
  title: "Example/Theme",
  component: ThemedButton,
} as Meta;

const Template: Story<ButtonProps> = (args) => (
  <ThemeProvider theme={theme}>
    <ThemedButton {...args} />
  </ThemeProvider>
);

export const ThemedPrimary = Template.bind({});
ThemedPrimary.args = {
  mode: "primary",
  label: "Themed",
  size: "small",
};
