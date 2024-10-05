import { useForm } from "react-hook-form";
import Botao from "../components/Botao";
import InputEmail from "../components/InputEmail";
import InputNome from "../components/InputNome";
import InputSenha from "../components/InputSenha";

export default function FormPerfil() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <InputNome register={register} error={errors.nome} />
            <InputEmail register={register} error={errors.email} />
            <InputSenha register={register} error={errors.senha} />
            <Botao texto="Salvar" />
        </form>
    );
}
