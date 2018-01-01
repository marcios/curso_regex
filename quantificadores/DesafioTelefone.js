const texto = `
 Lista telefonica:
  - (11) 98765-4567
  -98874-4561
  -(85) 99988-7766
  -(21) 3215-8899
`;

//console.log(texto.match(/\(\d{2}\)?\s?\d{4,5}-\d{4}/g))

console.log(texto.match(/\(?\d{0,2}\)?\s?\d{4,5}-\d{4}/g));