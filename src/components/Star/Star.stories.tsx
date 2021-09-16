import React from "react";
import { action } from "@storybook/addon-actions";
import { Star } from "./Star";

export default {
  title: "old/Uncontrolled/Star",
  component: Star,
};

const callback = action("rating change insane components");

export const StarDefault1 = () => <Star defaultValue={1} onChange={callback} />;
export const StarDefault2 = () => <Star defaultValue={2} onChange={callback} />;
export const StarDefault3 = () => <Star defaultValue={3} onChange={callback} />;
export const StarDefault4 = () => <Star defaultValue={4} onChange={callback} />;
export const StarDefault5 = () => <Star defaultValue={5} onChange={callback} />;
