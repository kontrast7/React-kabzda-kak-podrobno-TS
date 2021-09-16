import React from "react";

type StarPropsType = {
  value: RaitingValueType;
  onClick: (value: RaitingValueType) => void;
};
type StarOneType = {
  selected: boolean;
  value: RaitingValueType;
  onClick: (value: RaitingValueType) => void;
};
export type RaitingValueType = 0 | 1 | 2 | 3 | 4 | 5;

export function StarControl(props: StarPropsType) {
  return (
    <>
      <StarOne selected={props.value > 0} onClick={props.onClick} value={1} />
      <StarOne selected={props.value > 1} onClick={props.onClick} value={2} />
      <StarOne selected={props.value > 2} onClick={props.onClick} value={3} />
      <StarOne selected={props.value > 3} onClick={props.onClick} value={4} />
      <StarOne selected={props.value > 4} onClick={props.onClick} value={5} />
    </>
  );
}
function StarOne(props: StarOneType) {
  return (
    <span
      onClick={() => {
        props.onClick(props.value);
      }}
    >
      {props.selected ? <b>star </b> : "star "}
    </span>
  );
}
