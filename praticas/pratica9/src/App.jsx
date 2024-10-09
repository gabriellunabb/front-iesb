import { TarefaProvider } from "./context/TarefaContext";
import FormTarefa from "./pages/FormTarefa";
import ListTarefa from "./pages/ListTarefa";

export default function App() {
    return (
        <TarefaProvider>
            <h1>Tarefas</h1>
            <FormTarefa />
            <ListTarefa />
        </TarefaProvider>
    );
}
