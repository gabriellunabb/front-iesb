import Menu from "../components/Menu";
import { useEffect, useState } from "react";

export default function Home() {
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setCarregando(false);
        }, 1000);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <>
            <header>
                <h1>Aluno Online</h1>
            </header>
            <main>
                <Menu />
                <section>
                    <h2>Página Inicial</h2>
                    {carregando ? (
                        <h3>Aguarde!</h3>
                    ) : (
                        <div className="card-grid">
                            <article>
                                <h3>Mural de Avisos</h3>
                                <ul>
                                    <li></li>
                                </ul>
                            </article>
                            <article>
                                <h3>Agenda Acadêmica</h3>
                                <ul>
                                    <li></li>
                                </ul>
                            </article>
                            <article>
                                <h3>Histórico de Datas</h3>
                                <ul>
                                    <li></li>
                                </ul>
                            </article>
                            <article>
                                <h3>Histórico de Faltas</h3>
                                <ul>
                                    <li></li>
                                </ul>
                            </article>
                        </div>
                    )}
                </section>
            </main>
        </>
    );
}
