import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import { Accordion, AccordionPropsType } from "./Accordion";
import { Story } from "@storybook/react";

export default {
  title: "new/Accordion",
  component: Accordion,
};

const callback = action("accordion mode change event fired");
const onClickCallback = action("some item was clicked");
/*const onClickCallback = action("some item was clicked");*/

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />;

const callbackProps = {
  callback: callback,
  /* onClick: onClickCallback,*/
};

export const MenuCollapsedModeFalse = Template.bind({});
MenuCollapsedModeFalse.args = {
  ...callbackProps,
  titleText: "--Menu--",
  collapsed: false,
  items: [
    { title: "cvbdffgfd", value: 1 },
    { title: "fgdfg", value: 2 },
    { title: "gfdgfd", value: 3 },
  ],
  onClick: onClickCallback,
};
export const MenuCollapsedModeTrue = Template.bind({});
MenuCollapsedModeTrue.args = {
  ...callbackProps,
  titleText: "--Menu--",
  collapsed: true,
  items: [
    { title: "cvbdffgfd", value: 1 },
    { title: "fgdfg", value: 2 },
    { title: "gfdgfd", value: 3 },
  ],
  onClick: onClickCallback,
};

export const ModeChanging: Story<AccordionPropsType> = (args) => {
  const [value, setValue] = useState<boolean>(true);
  const callback = () => {
    setValue(!value);
  };
  return (
    <Accordion
      {...args}
      collapsed={value}
      callback={callback}
      items={[
        { title: "cvbdffgfd", value: 1 },
        { title: "fgdfg", value: 2 },
        { title: "gfdgfd", value: 3 },
      ]}
      onClick={onClickCallback}
    />
  );
};

ModeChanging.args = {
  titleText: "--Menu--",
  collapsed: true,
  callback: callback,
};
