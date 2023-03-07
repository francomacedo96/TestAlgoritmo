let a = 10;
const array = [ 1, 11, "a", "b", 123 ];

if (array.indexOf(a) === -1) {
  console.log(a + " no está en el array");
} else {
  console.log(a + " está en el array");
}


/* a */
let aa = 10;

const arraya = [ 1, 11, "a", "b", 123 ];

let noesta = true;

for (let i = 0; i < arraya.length; i++) {
  if (arraya[i] === aa) {
    noesta = false;
    break; 
  }
}
if (noesta) {
    console.log(aa + " no está en el array");
} else {
    console.log(aa + " está en el array");
}