import React from "react";

export type AccordionPropsType = {
  titleText: string;
  count: number;
  collapsed: boolean;
  callback: (value: boolean) => void;
};
type AccordionPropsTypeCount = {
  count: number;
};
type AccordionPropsTypeTitle = {
  title: string;
  value: boolean;
  callback: (value: boolean) => void;
};

let countI = (pr: number) => {
  let arr = [];
  for (let i = 1; i <= pr; i++) {
    arr.push(<li key={i}>{i}</li>);
  }
  return <ul>{arr}</ul>;
};

export function Accordion(props: AccordionPropsType) {
  return (
    <div>
      <AccordionTitle
        title={props.titleText}
        callback={props.callback}
        value={props.collapsed}
      />
      {props.collapsed && <AccordionBody count={props.count} />}
    </div>
  );
}

function AccordionTitle(props: AccordionPropsTypeTitle) {
  return (
    <div
      onClick={() => {
        props.callback(!props.value);
      }}
    >
      {props.title}
    </div>
  );
}

function AccordionBody(props: AccordionPropsTypeCount) {
  return countI(props.count);
}
