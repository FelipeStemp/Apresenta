
import styled from 'styled-components';

const DescContainer = styled.div`
    margin: 0px;
    text-align: right;
     @media (max-width: 768px){
        text-align: center;
     }
`

export function DescMe(){
    return(
        <DescContainer>
                <p>
                    <strong>Desenvolvedor Back-end </strong> com foco em <strong>C#</strong>, possuo conhecimento <br/> 
                    e habilidades com <strong>Python e JavaScript voltado a node.js e React.js</strong><br/>
                    Sou formado em Analise e Desenvolvimento de Sistema pela<br/>
                    UNIP - Universidade Paulista, atualmente estou cursando Engenharia de Software.
                </p>
        </DescContainer>
    )
}

const NomeContainer = styled.h3`
    margin: 0px;
    font-size: 3vw;
    @media (max-width: 768px){
    font-size: 5vw;
  }
`



export function NomeAp(){
    return(
        <NomeContainer>Olá, sou Felipe</NomeContainer>
    )
}
