import Tecs from '../Tecs';
import { NomeAp } from '../desc';
import { DescMe } from '../desc';
import Contatos from '../Contatos';
import styled from 'styled-components';

const TopContainer = styled.div`
    display: flex;
    margin-top: 20vh;
    font-size: 1.5vw;
    align-items: center;
`

const ApContainer = styled.div`
    display: flex;
    height:  max-content;
    flex-direction: column;
    align-items: right;
`

const Txt1 = styled.h1`
    font-size: 10vw;
    margin: 0px;
`

const Txt2 = styled.h2`
    font-size: 5vw;
    margin: 0px;
    display: flex;
`
const FooterContainer =styled.div`
    max-width: 50vw;
    font-size: 1vw;
`




function TextoApresenta(){
    return(
        <section >
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
            

        </section>
        
    )
}

export default TextoApresenta