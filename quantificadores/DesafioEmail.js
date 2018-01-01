const texto = `
Os e-mails dos convidados são:
- fulano@cod3r.com.br
- chico@gmail.com
- joao@empresa.info.br
- maria_silva@registro.br
`;

//const regex = /\w{1,}@\w{1,}/g;
var regex = /[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]{2,4}/g;
console.log(texto.match(regex));
console.log(texto.match(/\w+@\w+\.\w{2,4}/g))
console.log(texto.match(/[\w.]+@\w+\.\w{2,4}/g));
console.log(texto.match(/[\w.]+@\w+\.\w{2,4}\.?\w{0,2}/g));

//no futuro
console.log(texto.match(/[\w]+@\w+\.\w{2,4}(\.\w{2})?/g))