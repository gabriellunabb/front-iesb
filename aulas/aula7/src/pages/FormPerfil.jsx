import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import InputEmail from "../components/InputEmail";
import InputNome from "../components/InputNome";
import InputSenha from "../components/InputSenha";

export default function FormPerfil() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();

    return (
        <>
            <form
                onSubmit={handleSubmit((data) => {
                    navigate("/perfil");
                })}
            >
                <InputNome register={register} error={errors.nome} />
                <InputEmail register={register} error={errors.email} />
                <InputSenha register={register} error={errors.senha} />
                <button>Salvar</button>
            </form>
        </>
    );
}
