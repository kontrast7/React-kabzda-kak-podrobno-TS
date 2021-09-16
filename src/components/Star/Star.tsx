import React, { useState } from "react";

type StarPropsType = {
  defaultValue?: RaitingsType;
  onChange: (value: RaitingsType) => void;
};

type RaitingsType = 0 | 1 | 2 | 3 | 4 | 5;

type StarPropsType1 = {
  selected: boolean;
  callback: (value: 1 | 2 | 3 | 4 | 5) => void;
  value: 1 | 2 | 3 | 4 | 5;
};

export function Star(props: StarPropsType) {
  const [value, setValue] = useState<RaitingsType>(
    props.defaultValue ? props.defaultValue : 0
  );
  return (
    <>
      <StarOne
        selected={value > 0}
        callback={() => {
          setValue(1);
          props.onChange(1);
        }}
        value={1}
      />
      <StarOne
        selected={value > 0}
        callback={() => {
          setValue(2);
          props.onChange(2);
        }}
        value={2}
      />
      <StarOne
        selected={value > 0}
        callback={() => {
          setValue(3);
          props.onChange(3);
        }}
        value={3}
      />
      <StarOne
        selected={value > 0}
        callback={() => {
          setValue(4);
          props.onChange(4);
        }}
        value={4}
      />
      <StarOne
        selected={value > 0}
        callback={() => {
          setValue(5);
          props.onChange(5);
        }}
        value={5}
      />
    </>
  );
}
function StarOne(props: StarPropsType1) {
  return (
    <span
      onClick={() => {
        props.callback(props.value);
      }}
    >
      {props.selected ? <b>star </b> : "star "}
    </span>
  );
}
