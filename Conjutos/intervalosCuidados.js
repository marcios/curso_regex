const texto = 'ABC [abc] a-c 1234'

console.log(texto.match(/[a-c]/g))

console.log(texto.match(/a-c/g)) //nao define um range

console.log(texto.match(/[A-z]/g)) // intervalos usam a ordem da tabela unicode

//tem que respeita a ordem da tabela unicode ASCII

console.log(texto.match(/[a-Z]/g))