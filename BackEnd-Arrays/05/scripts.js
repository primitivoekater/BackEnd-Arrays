const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];
const opcao1=  new agendarPaciente(pacientes,pacientes[0]);
function agendarPaciente(Lista,nome){
    Lista.shift();
    Lista.push(nome);
 }
const opcao2=  new atenderPaciente(pacientes);
function atenderPaciente(Lista){
Lista.shifpusht()
console.log(Lista)
}
const opcao3=  new cancelarAtendimento(pacientes,pacientes[3])
function cancelarAtendimento(Lista,nome){
    Lista.splice(Lista[nome],1)
}
