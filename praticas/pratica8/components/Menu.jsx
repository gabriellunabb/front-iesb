import { NavLink } from "react-router-dom";

export default function Menu() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/home">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/perfil/1">Perfil</NavLink>
                </li>
                <li>
                    <NavLink to="/">Sair</NavLink>
                </li>
            </ul>
        </nav>
    );
}
