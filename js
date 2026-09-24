// criação de lista,. ao se adicionar frases se torna uma lista de strings.
const frases = [
    "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
    "Acredite que você pode e você já está no meio do caminho.",
    "Não espere por oportunidades, crie-as.",
    "O único lugar onde o sucesso vem antes do trabalho é no dicionário.",
    "Sua única limitação é aquela que você impõe a si mesmo.",
    "Grandes coisas nunca vêm de zonas de conforto.",
    "Comece onde você está, use o que você tem e faça o que você pode.",
    "A persistência é o caminho do êxito.",
    "Transforme seus erros em sementes de sabedoria.",
    "O código que você escreve hoje é o futuro que você constrói amanhã."
]

// criar constade para o botão e parágrafo, para que com isso manipulêmos
const btnNova = document.getElementById("#btn-nova");
const textoFrase = document.getElementById("#texto-frase");

// Adicionar um ouvinte
btnNova.addEventListener("click", function() {
//Sorteia um índice da lista para mostrar alguma frase

const indiceAleatorio = Math.floor(Math.random() * length())
textoFrase.textContent = indiceAleatorio





}

);
