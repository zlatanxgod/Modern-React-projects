import React from "react";
import Accordion from "./components/Accordion";

const App = () => {
  const items = [
    { title: "What react", content: "idkkkkks" },
    { title: "kyu bhai react", content: "me like it " },
    { title: "What react", content: "idkkkkks" },
  ];
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};

export default App;
