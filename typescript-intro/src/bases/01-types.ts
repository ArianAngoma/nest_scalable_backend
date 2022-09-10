export let name: string = 'Arian';

export const age: number = 22;

export const isAlive: boolean = true;

export const tamplateString = `Esto es un string
multilinea
que puede tener
" dobles
' simple
inyectar valores ${name}
expresiones ${1 + 1}
números ${age}
booleanos ${isAlive}`;

console.log(tamplateString);