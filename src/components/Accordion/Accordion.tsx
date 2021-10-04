import React from "react";

export type AccordionPropsType = {
  titleText: string;
  collapsed: boolean;
  callback: (value: boolean) => void;
  items: Array<ItemType>;
  onClick: (value: any) => any;
};
export function Accordion(props: AccordionPropsType) {
  return (
    <div>
      <AccordionTitle
        title={props.titleText}
        callback={props.callback}
        value={props.collapsed}
      />
      {props.collapsed && (
        <AccordionBody items={props.items} onClick={props.onClick} />
      )}
    </div>
  );
}

type AccordionPropsTypeTitle = {
  title: string;
  value: boolean;
  callback: (value: boolean) => void;
};

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

export type ItemType = {
  title: string;
  value: any;
};
export type AccordionBodyType = {
  items: Array<ItemType>;
  onClick: (value: any) => any;
};

function AccordionBody(props: AccordionBodyType) {
  return (
    <ul>
      {props.items.map((m, index) => (
        <li
          onClick={() => {
            props.onClick(m.value);
          }}
          key={index}
        >
          {m.title}
        </li>
      ))}
    </ul>
  );
}
