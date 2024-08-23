import "../assets/style/Board.css";
import { useState } from "react";

function Square({}) {
  const [value, setValue] = useState(null);

  function handleClick() {
    setValue('x');
  }

  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
}

export default Square;
