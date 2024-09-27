export default function Secao(props) {
    return (
        <section>
            <h2>{props.texto}</h2>
            {props.children}
        </section>
    );
}
