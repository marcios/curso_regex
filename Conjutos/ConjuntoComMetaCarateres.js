const texto = '.$+*?-';

console.log(texto.match(/[+.?*$]/g)) //não precisa de escape dentro do conjunto (a mairia dos metacaracteres)

console.log(texto.match(/[$-?]/g))
console.log(texto.match(/[$\-?]/g))

