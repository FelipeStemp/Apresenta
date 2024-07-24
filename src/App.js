
import TextoApresenta from './componentes/Apresentacao';
import styled from 'styled-components';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  display: flex;
  justify-content: center;
  color: aliceblue;
`


function App() {
  return (
    <AppContainer>
      
      <TextoApresenta/>

    </AppContainer>
  );
}

export default App;
