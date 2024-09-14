import Botao from "./Botao";
import InputEmail from "./InputEmail";
import InputSenha from "./InputSenha";

import { useState } from "react";

function FormLogin(props) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    return (
        <form>
            <InputEmail
                valor={email}
                mudaValor={(e) => setEmail(e.target.value)}
            />
            <InputSenha
                valor={senha}
                mudaValor={(e) => setSenha(e.target.value)}
            />
            <Botao texto="Entrar" navegaPara={props.navegaPara} />
        </form>
    );
}

export default FormLogin;
