//Button.jsx

import React, { useState } from "react";

function Button({ label }) {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>{label}</button>
      <p>Clicked {count} times</p>
    </div>
  );
}

export default Button;
