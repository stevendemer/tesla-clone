import { Header } from './components/Header';
import { Homepage } from './components/Homepage';
import styled from 'styled-components';

import './index.css';

function App() {
  return (
    <Wrapper>
      <Header />
      <Homepage />
    </Wrapper>
  );
}


const Wrapper = styled.div`

    width: 100%;
    box-sizing: border-box;
    color: #393c41;
    padding: 0;
    margin: 0;
    font-family: "Lotto", sans-serif;

`

export default App;
