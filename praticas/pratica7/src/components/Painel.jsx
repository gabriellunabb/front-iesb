export default function Painel(props) {
    return (
        <article>
            <h1>{props.texto}</h1>
            <ul>
                {props.itens.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </article>
    );
}
