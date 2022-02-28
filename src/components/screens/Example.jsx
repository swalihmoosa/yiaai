import React, { useState } from 'react';
import styled from 'styled-components';

export default function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <Div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </Div>
  );
}
const Div = styled.div`
  padding-top: 15%;
`