import React from "react";
import Accordion from "./component/Accordion";
import Search from "./component/Search";

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

export default () => {
  return <Search />;
  return <Accordion items={items} />;
};
