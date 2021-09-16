import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import { Accordion } from "./Accordion";

export default {
  title: "old/Accordion",
  component: Accordion,
};

export const CollapsedMod = () => (
  <Accordion
    titleText={"--Menu--"}
    count={5}
    collapsed={false}
    callback={action("clicked")}
  />
);

export const UsersUnCollapsedMod = () => (
  <Accordion
    titleText={"--Users--"}
    count={5}
    collapsed={true}
    callback={action("clicked")}
  />
);

export const CollapsedChanging = () => {
  const [value, setValue] = useState<boolean>(false);
  return (
    <Accordion
      titleText={"--Menu--"}
      count={3}
      collapsed={value}
      callback={setValue}
    />
  );
};
