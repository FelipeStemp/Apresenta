import c from  '../../img/c.png';
import python from '../../img/python.png';
import node from '../../img/node.png';
import react from '../../img/react.png';
import styled from 'styled-components';

const TecContainer = styled.div`
    display: flex;
    align-items:center;
    margin-left: 1vw;
`

const Imagens = styled.img`
    max-height: 4vw;
    margin-left: 2vw;
`

const imagensopt = [c, python, node, react]

function Tecs(){
    return(
        <TecContainer>
            {
                imagensopt.map((img) =>(
                    <TecContainer>
                        <Imagens src={img}/>
                    </TecContainer>
                )
            )
            }
        </TecContainer>
    )
}

export default Tecs