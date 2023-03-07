const arrayuno = ['a', 10, 'b', 'hola', 122, 15];

for (let i = 0; i < arrayuno.length; i++) {
  console.log(arrayuno[i]);
}


/* a */
const arraydos = ['a', 10, 'b', 'hola', 122, 15];
const texto = [];

for (let i = 0; i < arraydos.length; i++) {
  if (typeof arraydos[i] === 'string') {
    texto.push(arraydos[i]);
  }
}
console.log(texto);

/* b */
const arraytres = ['a', 10, 'b', 'hola', 122, 15];

const numeros = [];

for (let i = 0; i < arraytres.length; i++) {
  if (typeof arraytres[i] === 'number') {
    numeros.push(arraytres[i]);
  }
}
console.log(numeros);

/* c */

const arrayc = [ "a", 10, "b", "hola", 122, 15 ];

let mayor = null;

for (let i = 0; i < arrayc.length; i++) {
  if (typeof arrayc[i] === 'number') {
    if (mayor === null || arrayc[i] > mayor) {
      mayor = arrayc[i];
    }
  }
}

console.log("mayor: " + mayor);
