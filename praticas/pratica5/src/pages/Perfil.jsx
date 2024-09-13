import Botao from "../components/Botao";
import Cabecalho from "../components/Cabecalho";
import Conteudo from "../components/Conteudo";
import InputEmail from "../components/InputEmail";
import InputSenha from "../components/InputSenha";
import Menu from "../components/Menu";
import Secao from "../components/Secao";

function Perfil() {
    return (
        <>
            <Cabecalho />
            <Conteudo>
                <Menu />
                <Secao>
                    <InputEmail />
                    <InputSenha />
                    <Botao texto="Salvar" />
                </Secao>
            </Conteudo>
        </>
    );
}

export default Perfil;
