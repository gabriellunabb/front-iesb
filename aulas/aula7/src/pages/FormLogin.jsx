import { useForm } from "react-hook-form";
import InputEmail from "../components/InputEmail";
import InputSenha from "../components/InputSenha";

export default function FormLogin() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    return (
        <>
            <form
                onSubmit={handleSubmit((data) => {
                    console.log(data);
                })}
            >
                <InputEmail register={register} error={errors.email} />
                <InputSenha register={register} error={errors.senha} />
                <button>Entrar</button>
            </form>
        </>
    );
}
