import styled from 'styled-components'
import { Logo } from './components/Logo';
import { TipCalculator } from './components/TipCalculator';

const Container = styled.section`
  background-color: #C5E4E7;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  @media only screen and (min-width: 1440px) {
    justify-content: center;
  }
`;

export default function App() {
  return (
    <Container>
      <Logo />
      <TipCalculator />
    </Container>
  )
}
