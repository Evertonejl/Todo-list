const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-tesks')

let minhaLista = []


function adicionarTarefa() {
  
  minhaLista.push({
    tarefa: input.value,
    concluida: false
  })
  input.value = ''
  mostrarTarefas()

}


function mostrarTarefas() {

  let novaLi = ''

  minhaLista.forEach((item, index) => {
    novaLi = novaLi +`

 <li class="tesks ${item.concluida && "done"}" >
    <img src="img/checked.png" alt="check-na-tarefa" onclick="concluirTarefa(${index})">
    <p>${item.tarefa}</p>
    <img src="img/trash.png" alt="tarefa para o lixo" onclick="deletarItem(${index})">
 </li>
   
    
    `
  });

  listaCompleta.innerHTML = novaLi
   localStorage.setItem('lista', JSON.stringify(minhaLista))
}

function concluirTarefa(index){
 minhaLista[index].concluida = !minhaLista[index].concluida
 console.log(index)
 mostrarTarefas()
}

function deletarItem(index){
  minhaLista.splice(index, 1)
  mostrarTarefas()

}

function recarregarTarefa(){
  const tarefasLocalStorage = localStorage.getItem('lista')
  if (tarefasLocalStorage){
    
      minhaLista = JSON.parse(tarefasLocalStorage)
  }

  mostrarTarefas()
}

recarregarTarefa()

button.addEventListener('click', adicionarTarefa)
