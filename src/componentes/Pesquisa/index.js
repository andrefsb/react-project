import Input from "../Input";
import styled from 'styled-components';

const PesquisaContainer = styled.section`
        background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
        color: #FFF;
        text-align: center;
        padding: 85px 0;
        height: 270px;
        width: 100%;
`

const Titulo = styled.h2`
        color: #FFF;
        font-size: 36px;
        text-align: center;
        width: 100%;
`

const Subtitulo = styled.h3`
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 40px;
`

function Pesquisa(){
    return (
        <PesquisaContainer>
            <Titulo>Do you know where to start?</Titulo>
            <Subtitulo>Find your book on our bookcase</Subtitulo>
            <Input
                placeholder="Search your next reading"
            />
        </PesquisaContainer>
    )
}

export default Pesquisa;