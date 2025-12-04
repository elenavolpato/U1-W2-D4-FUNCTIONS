/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

const arrayOfNumbers = [];
function giveMeRandom(n) {
  for (let i = 0; i < n; i++) {
    let randomNum = Math.floor(Math.random() * 11);
    arrayOfNumbers.push(randomNum);
  }
  return arrayOfNumbers;
}
console.log(giveMeRandom(18));

console.log("<---- EXTRA 1 ---->");
function checkArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 5) {
      let sumNumbers;
      return (sumNumbers = +arr[i]);
    }
  }
}
console.log(checkArray(arrayOfNumbers));

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

console.log("<---- EXTRA 2 ---->");

const shoppingCart = [
  {
    price: 14,
    name: "blouse",
    id: 78963,
    quantity: 2,
  },
  {
    price: 48,
    name: "pants",
    id: 48569,
    quantity: 1,
  },
  {
    price: 10,
    name: "purse",
    id: 12345,
    quantity: 1,
  },
];

function shoppingCartTotal(arr) {
  let totalToPay = 0;
  for (let i = 0; i < arr.length; i++) {
    totalToPay += arr[i].price * arr[i].quantity;
  }
  return totalToPay;
}
console.log(shoppingCartTotal(shoppingCart));

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

console.log("<---- EXTRA 3 ---->");

const newItem = {
  price: 12000,
  name: "moto",
  id: 666,
  quantity: 1,
};

function addToShoppingCart(arr, item) {
  arr.push(item);
  return arr.length;
}
console.log(addToShoppingCart(shoppingCart, newItem));

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

console.log("<---- EXTRA 4 ---->");

function maxShoppingCart(arr) {
  let sortedHighestPrice = [];
  sortedHighestPrice = arr.sort(function (a, b) {
    return b.price - a.price;
  });

  return sortedHighestPrice[0];
}

console.log(maxShoppingCart(shoppingCart));
/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

console.log("<---- EXTRA 5 ---->");

function latestShoppingCart(arr) {
  return arr[arr.length - 1];
}

console.log(latestShoppingCart(shoppingCart));

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

console.log("<---- EXTRA 6 ---->");

function loopUntil(x) {
  let consecutiveCount = 0;
  if (x < 0 || x > 9) {
    console.log("Number is out of the accepted parameter");
  } else {
    while (true) {
      const randomNum = Math.floor(Math.random() * 10);
      //console.log(randomNum);
      if (randomNum > x) {
        consecutiveCount++;
        if (consecutiveCount === 3) {
          break;
        }
      } else {
        consecutiveCount = 0;
      }
      //console.log(consecutiveCount, randomNum);
    }
  }
}

console.log(loopUntil(8));

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

console.log("<---- EXTRA 7 ---->");

function average(arr) {
  let sumElements = 0;
  for (let i = 0; i < arr.length; i++) {
    sumElements += arr[i];
  }
  return sumElements / arr.length;
}
console.log(average([10, 10, 10, 10]));

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

console.log("<---- EXTRA 8 ---->");

function longest(arr) {
  let lengthOfElements = arr.sort(function (a, b) {
    return b.length - a.length;
  });
  return lengthOfElements[0];
}
console.log(longest(["ouhf", "idhoiuhighfhgkiuo", "fdgkdhfdh", "qwertyuiop", "inconstitucionalissimamente"]));

/*  */
/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

console.log("<---- EXTRA 9 ---->");

function emailContent(str) {
  const lowerStr = str.toLowerCase();
  if (lowerStr.includes("scam") || lowerStr.includes("spam")) {
    return true;
  } else {
    return false;
  }
}
console.log(emailContent("spam"));
console.log(emailContent("It's a SCAM"));
console.log(emailContent("It's a Slum"));

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/
console.log("<---- EXTRA 9 ---->");

function daysSince(date) {
  const startDate = new Date(date); //in case the date passed is a string
  const today = new Date();
  const differenceMS = today - startDate;

  // Convert milliseconds to days (1 day = 24 hours * 60 min * 60 sec * 1000 ms) - this part I got from the intentet :D
  return Math.floor(differenceMS / (1000 * 60 * 60 * 24));
}
console.log(daysSince("1995-06-25"));

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"]
 ["10","11","12"]
*/

console.log("<---- EXTRA 10 ---->");

function matrixGenerator(x, y) {
  // x = number of elements in each array
  // y = total of arrays
  let result = [];
  for (let row = 0; row < y; row++) {
    const currentRow = [];
    for (let col = 0; col < x; col++) {
      currentRow.push(`${row}${col}`);
    }
    result.push(currentRow);
  }
  return result;
}
console.log(matrixGenerator(7, 5));
