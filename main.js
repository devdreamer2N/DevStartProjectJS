const form = document.querySelector("#post-form");
const titulo = document.querySelector("#titulo");
const conteudo = document.querySelector("#conteudo");
const renderTitulo = document.querySelector("#render-titulo");
const renderConteudo = document.querySelector("#render-conteudo");

form.addEventListener("submit", event => {
    event.preventDefault();

    const data = {
        title: titulo.value,
        body: conteudo.value,
        userId: 1
    };

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    })
    .then(response => response.json())
    .then(() => {
        renderTitulo.innerHTML = data.title;
        renderConteudo.innerHTML = data.body;
        titulo.value = "";
        conteudo.value = "";
    });
});
