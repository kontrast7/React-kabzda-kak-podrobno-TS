import React, { useState } from "react";
import "./App.css";
import { Star } from "./components/Star/Star";
import { OnOff } from "./components/OnOff/OnOff";
import {
  RaitingValueType,
  StarControl,
} from "./components/StarContol/StarControl";
import { Accordion } from "./components/Accordion/Accordion";

function App() {
  let [raitingValue, setRaitingValue] = useState<RaitingValueType>(0);
  let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true);
  let [on, setOn] = useState<boolean>(false);
  return (
    <div>
      <Title titleText={"This APP"} />
      <hr />
      <Accordion
        titleText={"Acc!"}
        count={6}
        collapsed={accordionCollapsed}
        callback={setAccordionCollapsed}
      />
      <hr />
      <Star onChange={(x) => x} />
      <hr />
      <StarControl value={raitingValue} onClick={setRaitingValue} />
      <hr />
      <OnOff value={on} callback={setOn} />
    </div>
  );
}

type TitleProps = {
  titleText: string;
};

function Title(props: TitleProps) {
  return <div>{props.titleText}</div>;
}

export default App;
