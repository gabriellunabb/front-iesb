const root = document.getElementById("root");

function Cabecalho() {
    const logo = Imagem("", "Logo da Aplicação");
    const titulo = Titulo("Aluno Online");
    const grupo1 = document.createElement("div");
    grupo1.append(logo, titulo);

    const pesquisar = InputSearch();
    const icone = Imagem("", "Icone de Pesquisa");
    const grupo2 = document.createElement("div");
    grupo2.append(pesquisar, icone);

    const header = document.createElement("header");

    header.append(grupo1, grupo2);
    return header;
}

function Principal() {
    const main = document.createElement("main");

    return main;
}

function Rodape(texto) {
    const footer = document.createElement("footer");
    const paragrafo = document.createElement("p");
    paragrafo.innerText = texto;

    footer.append(paragrafo);

    return footer;
}

function Botao(nome) {
    const button = document.createElement("input");
    button.setAttribute("type", "submit");
    button.setAttribute("value", nome);

    return button;
}

function Input(id, tipo, rotulo, obrigatorio = false) {
    const label = document.createElement("label");
    label.setAttribute("for", id);
    label.innerText = rotulo;

    const input = document.createElement("input");
    input.setAttribute("type", tipo);
    input.setAttribute("name", id);
    input.setAttribute("id", id);
    if (obrigatorio) input.setAttribute("required", "");

    const div = document.createElement("div");
    div.append(label, input);

    return div;
}

function InputSearch() {
    const input = document.createElement("input");
    input.setAttribute("type", "search");
    input.setAttribute("placeholder", "Pesquisar...");

    return input;
}

function Link(texto, rota) {
    const link = document.createElement("a");
    link.setAttribute("href", rota);
    link.innerText = texto;

    return link;
}

function Titulo(texto) {
    const titulo = document.createElement("h1");
    titulo.innerText = texto;

    return titulo;
}

function Imagem(origem, texto) {
    const imagem = document.createElement("img");
    imagem.setAttribute("src", origem);
    imagem.setAttribute("alt", texto);

    return imagem;
}

function Menu() {
    const lista = document.createElement("ul");
    const opcoes = [
        { menu: "Home", rota: "/home" },
        { menu: "Perfil", rota: "/perfil" },
        { menu: "Sair", rota: "/login" },
    ];
    opcoes.forEach((opcao) => {
        const link = Link(opcao.menu, opcao.rota);
        link.addEventListener("click", (e) => {
            e.preventDefault();
            navega(e.target.getAttribute("href"));
        });
        const item = document.createElement("li");
        item.append(link);
        lista.append(item);
    });
    const nav = document.createElement("nav");
    nav.append(lista);

    return nav;
}

function FormLogin() {
    const email = Input("email", "email", "E-mail");
    const senha = Input("senha", "password", "Senha");
    const button = Botao("Entrar");

    const form = document.createElement("form");
    form.setAttribute("action", "");
    form.setAttribute("method", "post");
    form.append(email, senha, button);
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        navega("/home");
    });

    return form;
}

function FormPerfil() {
    const nome = Input("nome", "text", "Nome");
    const email = Input("emai", "email", "E-mail");
    const senha = Input("senha", "password", "Senha");
    const button = Botao("Salvar");

    const form = document.createElement("form");
    form.append(nome, email, senha, button);
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        navega("/perfil");
    });

    return form;
}

function navega(rota) {
    root.innerHTML = "";
    switch (rota) {
        case "/login":
            Login();
            break;
        case "/home":
            Home();
            break;
        case "/perfil":
            Perfil();
            break;
    }
}

function Perfil() {
    const cabecalho = Cabecalho();
    const menu = Menu();

    const main = Principal();
    const form = FormPerfil();

    main.append(menu, form);
    root.append(cabecalho, main);
}

function Home() {
    const cabecalho = Cabecalho();
    const menu = Menu();
    const main = Principal();
    main.append(menu);
    root.append(cabecalho, main);
}

function Login() {
    const titulo = Titulo("Aluno Online");
    const imagem = Imagem(
        "https://svgrepo.com/show/489120/school.svg",
        "Logo da Aplicação"
    );
    const form = FormLogin();
    const link = Link("Esqueceu sua senha?", "/esqueceu-senha");

    const main = Principal();
    main.setAttribute("class", "login-container");
    main.append(titulo, imagem, form, link);

    const rodape = Rodape("Copyright (C) 2024");
    root.append(main, rodape);
}

Login();
