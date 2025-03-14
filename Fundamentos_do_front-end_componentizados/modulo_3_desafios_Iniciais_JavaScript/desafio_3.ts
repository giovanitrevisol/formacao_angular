// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde: 
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

let M = parseInt(gets());
let A = parseInt(gets());
let B = parseInt(gets());

// Calcula a idade do terceiro filho
let C = M - A - B;

// Determina a idade do filho mais velho
let res = A;
if (res < B) res = B;
if (res < C) res = C;

// Imprime a idade do filho mais velho
print(res);