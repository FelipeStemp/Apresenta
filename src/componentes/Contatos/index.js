import git from '../../img/githubwhite.png'
import linkedin from '../../img/linkedin.png'
import wpp from '../../img/wpp.png'
import styled from 'styled-components'

const ContatosContainer = styled.section`
    margin-left: 14vw;
    @media (max-width: 768px){
    align-items: center;
    margin-left: 0px;
  }
`
const ImagensCont = styled.img`
    max-height: 3vw;
    margin-left: 2vw;

    ${({ id }) => id === 'git' &&`
    border-radius: 5px;
    `}

    @media (max-width: 768px){
    align-items: center;
    margin: 1vw 2vw;
    max-height: 7vw;
  }
`

function Contatos(){
    return(
        <ContatosContainer>
            <a href='https://github.com/FelipeStemp'>
                <ImagensCont id='git' src={git}/>
            </a>
            
            <a href='https://www.linkedin.com/in/felipe-stempkowski/'>
                <ImagensCont  src={linkedin}/>
            </a>

            <a href='https://w.app/xdGc5g'>
                <ImagensCont src={wpp}/>
            </a>
            
        </ContatosContainer>
    )
}

export default Contatos