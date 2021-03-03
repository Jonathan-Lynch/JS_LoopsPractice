function ForLoop() {
var cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
var text = "";
var i;
for (i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
  console.log(cars[i])
}

}

function ForLoop2() {
for (let step = 0; step < 5; step++) {
  // Runs 5 times, with values of step 0 through 4.
  console.log('Walking east one step');
  }
}

let unsortedArr = [10, 5, 12, 7, 3, 21, 14, 16, 1];
let swapped;

function bubbleSort(arr) {
  swapped = false;
  let end = arr.length - 1;
  for (let i = 0; i < end; i++) {
    if (arr[i] > arr[i + 1]){
      swapped = true;
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
  }
  end--;
}

do {
  bubbleSort(unsortedArr);
} while (swapped);

console.log(unsortedArr);


const bubbleSort2 = (arr) => {

}

const arr = [10, 5, 7, 2, 9];
console.log