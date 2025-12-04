/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

console.log("<---- ESERCIZIO 1 ---->");
function area(l1, l2) {
  return l1 * l2;
}
console.log(area(45, 12));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

console.log("<---- ESERCIZIO 2 ---->");
function crazySum(x, y) {
  let sum = 0;
  if (x === y) {
    sum = (x + y) * 3;
  } else {
    sum = x * y;
  }
  return sum;
}
console.log("same numbers: ", crazySum(9, 9));
console.log("different numbers: ", crazySum(23, 7));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
console.log("<---- ESERCIZIO 3 ---->");
function crazyDiff(a) {
  if (a > 19) {
    return (a - 19) * 3;
  } else {
    return a - 19;
  }
}
console.log("greater then 19: ", crazyDiff(68));
console.log("smaller than 19: ", crazyDiff(15));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

console.log("<---- ESERCIZIO 4 ---->");
function boundary(n) {
  if (n > 20 && n <= 100) {
    return true;
  } else {
    return false;
  }
}
console.log("greater then 100: ", boundary(125));
console.log("in the boundary: ", boundary(37));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

console.log("<---- ESERCIZIO 5 ---->");
function epify(str) {
  let strInArray = str.split(" ");
  if (strInArray[0].toLowerCase() === "epicode") {
    return str;
  } else {
    strInArray.unshift("Epicode");
    return strInArray.join(" ");
  }
}
console.log("without epicode: ", epify("parola difficile in italiano"));
console.log("with epicode: ", epify("epicode is very italian"));
console.log("with epicode: ", epify("Epicode è una scoula italiAna di coding"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
console.log("<---- ESERCIZIO 6 ---->");
function check3and7(n) {
  if (typeof n === "number") {
    if (n % 3 === 0 || n % 7 === 0) {
      return true;
    } else false;
  } else {
    console.log("Value inserted is not a number");
  }
}
/* console.log(check3and7(9));
console.log(check3and7(11)); */
//console.log(check3and7("baba"));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

console.log("<---- ESERCIZIO 7 ---->");
function reverseString(str) {
  let strInArray = str.split("");
  let resversedArray = [];

  for (let i = strInArray.length - 1; i >= 0; i--) {
    resversedArray.push(strInArray[i]);
  }
  return resversedArray.join("");
}
console.log(reverseString("pindamonhangaba"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

console.log("<---- ESERCIZIO 8 ---->");
function upperFirst(str) {
  let strInArray = str.split(" ");
  let upperCasedArr = [];
  for (let i = 0; i < strInArray.length; i++) {
    let eachWordArray = strInArray[i].split("");
    let firstLetter = eachWordArray[0].toUpperCase();
    eachWordArray.splice(0, 1);
    upperCasedArr.push(firstLetter + eachWordArray.join(""));
  }
  return upperCasedArr.join(" ");
}

console.log(upperFirst("anhangabau é um lugar de são Paulo"));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

console.log("<---- ESERCIZIO 9 ---->");
function cutString(str) {
  let strInArray = str.split("");
  strInArray.splice(0, 1);
  strInArray.splice(strInArray.length - 1);
  return strInArray.join("");
}
console.log(cutString("jabuticaba"));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

console.log("<---- ESERCIZIO 10 ---->");

const arrayOfNumbers = [];
function giveMeRandom(n) {
  for (let i = 0; i < n; i++) {
    let randomNum = Math.floor(Math.random() * 11);
    arrayOfNumbers.push(randomNum);
  }
  return arrayOfNumbers;
}
console.log(giveMeRandom(18));

/* 
---------------------------------------------- EXTRAS ------------------------------------------------ 
*/
