const texto = "<div>Conteudo 01</div><div>COnteudo 02</div>"

//Quantificadores são gulosos (greedy)


console.log(texto.match(/<div>.+<\/div>/g))
console.log(texto.match(/<div>.*<\/div>/g))
console.log(texto.match(/<div>.{0,100}<\/div>/g))

//quantificadores não guloso

console.log(texto.match(/<div>.+?<\/div>/g))
console.log(texto.match(/<div>.*?<\/div>/g))

console.log(texto.match(/<div>.{0,100}?<\/div>/g))