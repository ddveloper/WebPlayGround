import React, { useState } from "react";
import Accordion from "./component/Accordion";
import Search from "./component/Search";
import Dropdown from "./component/Dropdown";
import Translate from "./component/Translate";

const items = [
  {
    title: "What is React?",
    content: "React is a front end js framework",
  },
  {
    title: "Why use React?",
    content: "React is a favoraite js library among engineers",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components",
  },
];

const options = [
  {
    label: "The Red",
    value: "red",
  },
  {
    label: "The Blue",
    value: "blue",
  },
  {
    label: "The Yellow",
    value: "yellow",
  },
];

export default () => {
  return (
    <div>
      <Translate />
    </div>
  );
  return <Search />;
  return <Accordion items={items} />;
};
