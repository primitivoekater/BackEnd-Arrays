const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];
const opDeOperacao=["atender", "agendar"]
const paciente=pacientes[0]
const opcao1=opDeOperacao[0]
const opcao2= opDeOperacao[1]
const chamada=opcao2
if (chamada==opcao1){
    pacientes.shift()
    }else pacientes.push(paciente)&&pacientes.shift()    
    console.log(`nome do paciente: ${paciente}. opção selecionada: ${chamada}.lista atualizada :${pacientes}`)    
