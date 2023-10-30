import React, { useState, useRef } from "react";
import List from "./List";

const App = () => {
  const inputRef = useRef();
  const [inputValue, setInputValue] = useState("");
  const [names, setNames] = useState([
    { id: 1, body: "Паша" },
    { id: 2, body: "Маша" },
    { id: 3, body: "Коля" },
  ]);

  const addElem = (e) => {
    e.preventDefault();
    if (!inputValue) return;
    const newLi = { id: Date.now(), body: inputValue };
    setNames([...names, newLi]);
    setInputValue("");
  };

  const changeElem = (e) => {
    e.preventDefault();
    const newNames = names.concat().map((obj) => {
      return {
        ...obj,
        body: obj.body + "!!!",
      };
    });
    setNames(newNames);
  };

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <h1>Сотрудники:</h1>
      <List propNames={names} propChange={changeElem} />
      <br />
      <br />

      <form onSubmit={addElem}>
        <input
          type="text"
          placeholder="Добавить имя"
          ref={inputRef}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </form>

      <button onClick={focusInput}>focus</button>
    </div>
  );
};

export default App;
