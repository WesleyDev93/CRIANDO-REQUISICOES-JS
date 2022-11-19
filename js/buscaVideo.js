import { conectaApi } from "./conectaApi.js";
import constroiCard from "./mostrarVideos.js";

async function buscaVideo (evento) {
    evento.preventDefault ()

   const dadosDePesquisa = document.querySelector ("[data-pesquisa]").value

    const busca = await conectaApi.buscaVideo ()
 
    const lista = document.querySelector ("[data-lista]")


    busca.foreach (elemento => lista.appendChild (constroiCard (elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)))


     if (busca.length == 0) {
        
        lista.innerHTML = `<hr class="mensagem__">Não existem vídeos com esse termo</h2>`;
     }
}

const botaoPesquisa = document.querySelector ("[data-botao-pesquisa]")


botaoPesquisa.addEventListener ("click", evento => buscaVideo (evento))