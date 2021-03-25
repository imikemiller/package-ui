import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { storyTemplate } from "../../utils/storyTemplate";

import { <FTName | pascalcase >} from "./<FTName | pascalcase>";

export default {
  title: "UI/<FTName | pascalcase>",
  component: <FTName | pascalcase >,
} as Meta;


const template = storyTemplate(<FTName | pascalcase >);

export const Example<FTName | pascalcase > = template({});