import Conteudo from "../components/Conteudo";
import FormLogin from "../components/FormLogin";
import Rodape from "../components/Rodape";

export default function Login() {
    return (
        <>
            <Conteudo>
                <img
                    src="https://www.svgrepo.com/show/411955/learn.svg"
                    alt="Logo da Aplicação"
                />
                <h1>Aluno Online</h1>
                <FormLogin />
            </Conteudo>
            <Rodape />
        </>
    );
}
