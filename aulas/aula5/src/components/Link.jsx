function Link(props) {
    const rotear = (e) => {
        e.preventDefault();
        props.navegaPara(e.target.getAttribute("href"));
    };

    return (
        <a href={props.rota} onClick={rotear}>
            {props.texto}
        </a>
    );
}

export default Link;
