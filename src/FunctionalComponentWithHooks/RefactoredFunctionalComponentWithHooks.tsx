import React, { useState } from 'react';

export function RefactoredFunctionalComponentWithHooks() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h4>You clicked {count} times</h4>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={() => setCount(count - 1)}>Added on refactor</button>
    </>
  );
}
