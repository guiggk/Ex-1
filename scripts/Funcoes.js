const input = document.getElementById('input_item');
let contador = 0;

export function criarItemDaLista(){
    if(input.value === ""){
        alert("digite algo");
        return;
    }

    const itemDaLista = document.createElement("li");
    const containerItemDaLista = document.createElement("div");
    containerItemDaLista.classList.add("listaContainer");
    const inputcheckbox = document.createElement("input");
    inputcheckbox.type = "checkbox";
    inputcheckbox.id = "checkbox-"+contador++;
    inputcheckbox.classList.add("chackbox");
    const nomeItem = document.createElement("p");
    nomeItem.innerHTML = input.value;

    inputcheckbox.addEventListener("click",()=>{
        if(inputcheckbox.checked){
            nomeItem.style.textDecoration ="line-through";
        }else{
            nomeItem.style.textDecoration = "none";
        }
    })


    containerItemDaLista.appendChild(inputcheckbox);
    containerItemDaLista.appendChild(nomeItem);
    itemDaLista.appendChild(containerItemDaLista);

    const diaDaSemana = new Date().toLocaleDateString("pt-BR", {weekday: "long"});
    const data = new Date().toLocaleDateString("pt-BR");
    const horario = new Date().toLocaleTimeString("pt-BR",{hour:"numeric", minute: "numeric"});
    const dataCompleta = diaDaSemana + " ("+ data + ") " + horario;
    const itemData = document.createElement("p");
    itemData.innerHTML = dataCompleta;
    itemDaLista.appendChild(itemData);
    
    return itemDaLista
    
}

export function verificarListaVazia(lista){
    const mensagemDaList = document.querySelector(".mensagemDaLista");
    const itemDaLISTA = lista.querySelectorAll("li");
    if(itemDaLISTA.length === 0){
        mensagemDaList.style.display = "block";
    }else{
        mensagemDaList.style.display ="none";
    }
}

