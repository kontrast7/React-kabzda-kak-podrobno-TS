import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import { OnOff } from "./OnOff";

export default {
  title: "old/OnOff",
  component: OnOff,
};

export const onMod = () => (
  <OnOff value={true} callback={action("on or off clicked")} />
);
export const offMod = () => (
  <OnOff value={false} callback={action("on or off clicked")} />
);

export const ModeChanging = () => {
  const [value, setValue] = useState<boolean>(true);
  return <OnOff value={value} callback={setValue} />;
};
