var texto = `1,2,3,4,5,6,a.b c!d?e\r	-
f_g`;

console.log(texto.match(/\d/g))
console.log(texto.match(/\D/g)); // não numeros [^0-9]
console.log(texto.match(/\w/g)) // equivalente [a-zA-Z0-9_]
console.log(texto.match(/\W/g)) //não caracters [^a-zA-Z0-9_]

console.log(texto.match(/\s/g)) //espaçõs [\t \n \r \f]

console.log(texto.match(/\S/g)) //  [^\t \n \r \f]

// \b \B