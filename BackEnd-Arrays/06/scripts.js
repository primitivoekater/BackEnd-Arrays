const usuarios = [
    {
        nome: "João",
        pets: ["Max"],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
]
const animalBuscado="Naninha"
for(bicho of usuarios){
    if (bicho.pets.includes(animalBuscado)===true){
        console.log(`o  dono do ${animalBuscado} é o ${bicho.nome}`)
    } 
} 


