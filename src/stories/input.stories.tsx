import React, { ChangeEvent, useRef, useState } from "react";
import { action } from "@storybook/addon-actions";

export default {
  title: "UncontrolledInput",
};

export const UncontrolledInput = () => <input />;

export const ControlledInputWithFixedValue = () => (
  <input value={"Hello world!"} />
);

export const TrackInput = () => {
  let [value, setValue] = useState("");

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    let actual = e.currentTarget.value;
    setValue(actual);
  };

  return (
    <>
      <input value={value} onChange={onChangeHandler} />- {value}
    </>
  );
};

export const GetValueInputButtonPress = () => {
  let [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const save = () => {
    const el = inputRef.current as HTMLInputElement;
    setValue(el.value);
  };
  return (
    <>
      <input ref={inputRef} />
      <button onClick={save}>V</button>
      actual value: {value}
    </>
  );
};

//_____CONTROLLED INPUT

export const ControlledInput = () => {
  const [parentValue, setParentValue] = useState("");

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setParentValue(e.currentTarget.value);
  };

  return <input value={parentValue} onChange={onChangeHandler} />;
};

//_____CONTROLLED CHECKBOX

export const ControlledCheckbox = () => {
  const [parentValue, setParentValue] = useState(true);
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setParentValue(e.currentTarget.checked);
  };
  return (
    <input type="checkbox" checked={parentValue} onChange={onChangeHandler} />
  );
};

//_____CONTROLLED SELECT

export const ControlledSelect = () => {
  const [parentValue, setParentValue] = useState<string | undefined>("3");
  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    setParentValue(e.currentTarget.value);
  };
  return (
    <select value={parentValue} onChange={onChangeHandler}>
      <option value={"1"}>Minsk</option>
      <option value={"2"}>Moscow</option>
      <option value={"3"}>Kiev</option>
    </select>
  );
};
