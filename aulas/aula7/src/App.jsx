import { BrowserRouter, Route, Routes } from "react-router-dom";
import Perfil from "./pages/Perfil";
import Login from "./pages/Login";
import Home from "./pages/Home";

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Login />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/perfil" element={<Perfil />} />
                    <Route path="*" element={<h1>Errou</h1>} />
                </Routes>
            </BrowserRouter>
        </>
    );
}
