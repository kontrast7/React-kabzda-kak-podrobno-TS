import React from "react";

type PropsType = {
  value: boolean;
  callback: (value: boolean) => void;
};

export function OnOff(props: PropsType) {
  const onStyle = {
    display: "inline-block",
    width: "30px",
    height: "20px",
    margin: "5px",
    border: "1px solid black",
    backgroundColor: props.value ? "green" : "white",
  };
  const offStyle = {
    display: "inline-block",
    width: "30px",
    height: "20px",
    margin: "5px",
    border: "1px solid black",
    backgroundColor: props.value ? "white" : "red",
  };
  const circleStyle = {
    display: "inline-block",
    width: "20px",
    height: "20px",
    borderRadius: "10px",
    border: "1px solid black",

    backgroundColor: props.value ? "green" : "red",
  };
  const wrapperStyle = {
    display: "flex",
    alignItems: "center",
  };
  const onClickHandler = (boo: boolean) => {
    props.callback(boo);
  };

  return (
    <div style={wrapperStyle}>
      <span style={onStyle} onClick={() => onClickHandler(true)}>
        On
      </span>
      <span style={offStyle} onClick={() => onClickHandler(false)}>
        Off
      </span>
      <span
        style={circleStyle}
        onClick={() => {
          props.callback(!props.value);
        }}
      />
    </div>
  );
}
