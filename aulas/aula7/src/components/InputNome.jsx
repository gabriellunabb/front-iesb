export default function InputNome({ register, error }) {
    const regras = {
        required: "Nome é obrigatório!",
        minLength: {
            value: 6,
            message: "Nome deve ter ao menos 6 caracteres!",
        },
    };

    return (
        <>
            <label htmlFor="nome">Nome</label>
            <input type="text" {...register("nome", regras)} />
            {error && <p>{error.message}</p>}
        </>
    );
}
