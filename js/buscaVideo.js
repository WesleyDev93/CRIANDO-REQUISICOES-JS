import { conectaApi } from "./conectaApi.js";


async function buscaVideo (evento) {
    evento.preventDefault ()

   const dadosDePesquisa = document.querySelector ("[data-pesquisa]").value

    const busca = await conectaApi.buscaVideo ()


}

const botaoPesquisa = document.querySelector ("[data-botao-pesquisa]")


botaoPesquisa.addEventListener ("click", evento => buscaVideo (evento))