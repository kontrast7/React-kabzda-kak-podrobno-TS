import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import { RaitingValueType, StarControl } from "../StarContol/StarControl";

export default {
  title: "old/Star",
  component: StarControl,
};

export const EmptyRaiting = () => <StarControl value={0} onClick={(x) => x} />;
export const Star1 = () => (
  <StarControl value={1} onClick={action("clicked")} />
);
export const Star2 = () => <StarControl value={2} onClick={(x) => x} />;
export const Star3 = () => <StarControl value={3} onClick={(x) => x} />;
export const Star4 = () => <StarControl value={4} onClick={(x) => x} />;
export const Star5 = () => <StarControl value={5} onClick={(x) => x} />;

export const ModeChanging = () => {
  const [value, setValue] = useState<RaitingValueType>(3);
  return <StarControl value={value} onClick={setValue} />;
};
