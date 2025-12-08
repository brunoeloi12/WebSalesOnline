import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import styled from 'styled-components';
import { Button, Space } from 'antd';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <StyledLink isblue={count > 4} className="app">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h1>Vite + React</h1>
      </StyledLink>
      <StyledLink className="card">
        <Button type="primary" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </StyledLink>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

interface PStyledLink {
  isblue?: boolean;
}

const StyledLink = styled.div<PStyledLink>`
  color: ${(props) => (props.isblue ? 'blue' : 'pink')};
  font-weight: bold;
`;

export default App;
