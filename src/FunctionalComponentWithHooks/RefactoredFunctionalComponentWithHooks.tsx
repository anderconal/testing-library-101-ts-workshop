import React, { useState } from 'react';

export function RefactoredFunctionalComponentWithHooks() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={() => setCount(count - 1)}>Added on refactor</button>
    </>
  );
}
