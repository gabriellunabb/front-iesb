import Botao from "../components/Botao";
import InputEmail from "../components/InputEmail";
import InputSenha from "../components/InputSenha";

import { useState } from "react";

function FormLogin(props) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const efetuaLogin = (e) => {
        e.preventDefault();
        props.navegaPara("/home")
    };

    return (
        <form onSubmit={efetuaLogin}>
            <InputEmail texto="Email" valor={email} mudaValor={setEmail} />
            <InputSenha texto="Senha" valor={senha} mudaValor={setSenha} />
            <Botao texto="Entrar" />
        </form>
    );
}

export default FormLogin;
