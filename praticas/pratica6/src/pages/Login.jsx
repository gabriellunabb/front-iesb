import Conteudo from "../components/Conteudo";
import FormLogin from "../components/FormLogin";
import Titulo from "../components/Titulo";

function Login(props) {
    return (
        <Conteudo>
            <Titulo texto="Aluno Online" />
            <FormLogin navegaPara={props.navegaPara} />
        </Conteudo>
    );
}

export default Login;
