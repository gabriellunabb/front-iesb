import Menu from "../components/Menu";
import FormPerfil from "./FormPerfil";

export default function Perfil() {
    return (
        <>
            <header>
                <h1>Aluno Online</h1>
            </header>
            <main>
                <Menu />
                <section>
                    <h2>Perfil</h2>
                    <FormPerfil />
                </section>
            </main>
        </>
    );
}
