import { useContext, useState } from "react";
import { TarefaContext } from "../context/TarefaContext";

export default function FormTarefa() {
    const { incluir } = useContext(TarefaContext);

    const [tarefa, setTarefa] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (tarefa) {
            incluir(tarefa);
            setTarefa("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Digite uma tarefa"
                value={tarefa}
                onChange={(e) => setTarefa(e.target.value)}
            ></input>
            <button type="submit">Adicionar</button>
        </form>
    );
}
