import React, { useState } from "react";

function App() {
  const [arr, pusharr] = useState([]);
  const [item, setItem] = useState("");
  function handleClick() {
    pusharr(prev => {
      return [...prev, item];
    });
    setItem("");
  }
  function handleList(event) {
    const value = event.target.value;
    setItem(value);
  }
  const listItems = arr.map(item => <li>{item}</li>);
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleList} type="text" value={item} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>{listItems}</ul>
      </div>
    </div>
  );
}

export default App;
