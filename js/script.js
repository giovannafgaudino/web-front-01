const button = document.querySelector('button');
const inputNota = document.querySelector('#Nota');


//criando um elemneto
const pMensagem = document.createElement("p");
const pAprovado = document.createElement("p");
const pReprovado = document.createElement("p");

function clearForm(){
    inputNota.value = ""; 
}


button.addEventListener("click", (event) => { //function
    //alert("Hey!")
    event.preventDefault();
    //console.log(inputNota.value);
    const inputNotaValue = inputNota.value; 
    if (inputNotaValue.trim() === "") {
        //alert("Campo Obrigatório");
        pMensagem.textContent = "Campo Obrigatório";
        inputNota.insertAdjacentElement("afterend", pMensagem);
        pMensagem.setAttribute("class", "error");
        return false;
    }

    if (inputNotaValue >=  6) {
        // alert("Você está aprovado!")
        pAprovado.textContent = "Você está aprovado!";
        inputNota.insertAdjacentElement("afterend", pAprovado);
    } else {
        //alert("Você está aprovado!")
        pReprovado.textContent = "Você está reprovado!";
        inputNota.insertAdjacentElement("afterend", pReprovado);
       
    }
    pMensagem.classList.add("d-none");
    /// pAprovado.classList.add("d-none");
    /// pReprovado.classList.add("d-none");
})