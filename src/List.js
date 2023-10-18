import React from "react";

const List = ({ propNames, propChange }) => {
  return (
    <>
      <ul>
        {propNames.map((obj) => (
          <li key={obj.id}>{obj.body}</li>
        ))}
      </ul>
      <button onClick={propChange}>change!!!</button>
    </>
  );
};

export default List;
