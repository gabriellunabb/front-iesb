export default function InputEmail({ register, error }) {
    const regras = {
        required: "Email é obrigatório!",
        pattern: {
            value: /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/,
            message: "Email inválido!",
        },
    };

    return (
        <>
            <label htmlFor="email">E-mail</label>
            <input type="email" {...register("email", regras)} />
            {error && <p>{error.message}</p>}
        </>
    );
}
