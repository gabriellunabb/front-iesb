import { useContext, useState } from "react";
import { TarefaContext } from "../context/TarefaContext";

export default function FormTarefa() {
    const [tarefa, setTarefa] = useState();
    const { incluir } = useContext(TarefaContext);

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
                placeholder="Adicione uma nova tarefa"
                value={tarefa}
                onChange={(e) => setTarefa(e.target.value)}
            />
            <button type="sumbit">Adicionar</button>
        </form>
    );
}
