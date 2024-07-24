import Tecs from '../Tecs';
import { NomeAp } from '../desc';
import { DescMe } from '../desc';
import Contatos from '../Contatos';
import styled from 'styled-components';


const CorpoAp = styled.section`
    @media (max-width: 768px){
    display: column;
    font-size: 10vw;
    justify-content:center;
  }
`

const TopContainer = styled.div`
    display: flex;
    margin-top: 20vh;
    font-size: 3vw;
    align-items: center;
    @media (max-width: 768px){
    margin-top : 10vh;
    flex-direction: column;
  }
`

const ApContainer = styled.div`
    display: flex;
    height:  max-content;
    flex-direction: column;
    align-items: right;
    @media (max-width: 768px){
    align-items: center;
  }
`

const Txt1 = styled.h1`
    font-size: 10vw;
    margin: 0px;
    @media (max-width: 768px){
    flex-direction: column;
    font-size: 15vw;
  }
`

const Txt2 = styled.h2`
    font-size: 5vw;
    margin: 0px;
    display: flex;
    @media (max-width: 768px){
    flex-direction: column;
    font-size: 10vw;
    align-items: center;
  }
    
`
const FooterContainer =styled.div`
    max-width: 50vw;
    font-size: 1vw;
    @media (max-width: 768px){
    font-size: 3vw;
    max-width: 100vw;
    margin: 8vw;
  }
`



function TextoApresenta(){
    return(
        <CorpoAp >
            <TopContainer>

                <NomeAp/>
                <Contatos/>

            </TopContainer>
            

            <ApContainer>
                <Txt1>
                    Developer
                </Txt1>

                <Txt2>
                    Back-End
                    <Tecs/>
                </Txt2>
            </ApContainer>


            <FooterContainer>
                <DescMe/>
            </FooterContainer>
            

        </CorpoAp>
        
    )
}

export default TextoApresenta