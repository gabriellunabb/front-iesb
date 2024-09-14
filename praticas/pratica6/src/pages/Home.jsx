import Conteudo from "../components/Conteudo";
import Menu from "../components/Menu";
import Titulo from "../components/Titulo";

function Home(props) {
    return (
        <Conteudo>
            <Titulo texto="Pagina Inicial" />
            <Menu navegaPara={props.navegaPara} />
        </Conteudo>
    );
}

export default Home;
