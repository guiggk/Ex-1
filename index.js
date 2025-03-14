import { criarItemDaLista } from "./scripts/Funcoes.js";
import { verificarListaVazia } from "./scripts/Funcoes.js";
const Lista = document.getElementById("listaDeTeste");
const btnSalvar = document.getElementById('salvar_item');


btnSalvar.addEventListener('click', (evento)=>{
    evento.preventDefault();
    const itemDaLista = criarItemDaLista();
    Lista.appendChild(itemDaLista);
    verificarListaVazia(Lista);
});


verificarListaVazia();