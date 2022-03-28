import React, { useState } from 'react';

export function RefactoredFunctionalComponentWithHooks() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h4>You clicked {count} times</h4>
      <button onClick={() => handleClick()}>Click me</button>
    </>
  );
}
