var listaDePresenca = 
{
    "pessoa1":{
        "nome":"Cassiano",
        "idade":32
    },

    "pessoa2":{
        "nome":"José",
        "idade": 54,
        "esportes" : [
            {
                "tipo":"futebol",
                "horario": "10:00"
            },
            {
                "tipo":"basquete",
                "horario": "20:00"
            }
        ]
    }
}

console.log(listaDePresenca.pessoa2.esportes[1].horario)

// obtendo todo o objeto de lista de presenca
console.log(listaDePresenca);

//obtendo uma pessoa da lista de presenca
console.log(listaDePresenca.pessoa1)

//obtendo o nome de uma pessoa da lista de presenca
console.log(listaDePresenca.pessoa1)