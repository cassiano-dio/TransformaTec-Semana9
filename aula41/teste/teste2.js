var pessoas = {
    "pessoa1": {
        "nome" : "João",
        "idade" : 10
    },
    "pessoa2": {
        "nome" : "Maria",
            "idade" : 8
    }
}

console.log(pessoas.pessoa1)

var string = JSON.stringify(pessoas)

console.log(string)

var frutas ='[ "apple", "mango", "banana"]'
JSON.parse(frutas)
console.log(frutas)