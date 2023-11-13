// 1. Funksiya yazacaqsınız və bu funksiya parametr olaraq number qəbul edir. Əgər number cütdürsə, həmin number-i 2-yə bölürsünüz, təkdirsə 3-ə vurub üzərinə 1 gəlirsiniz. Bu prosesi həmin number 1 olana qədər təkrarlanır ( 3 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1)

function processNumber1(number) {
    while (number !== 1) {
      if (number % 2 === 0) {
        number /= 2;
      } else {
        number = number * 3 + 1;
      }
    }
    return 1;
  }
  
  // misal:
  const result1 = processNumber1(3);
  console.log(result1); 
  




// 2. Array-dəki ən böyük və ən kiçik ədədi tapın və onların fərqini console-a çıxarın.


let numbers = [3, 8, 2, 10, 5];

let maxNumber = numbers[0];

let minNumber = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxNumber) {
        maxNumber = numbers[i];
    }
    
    if (numbers[i] < minNumber) {
        minNumber = numbers[i];
    }
}

let difference = maxNumber - minNumber;

console.log("en boyuk eded: " + maxNumber);
console.log("en kichik eded: " + minNumber);
console.log("Ferq: " + difference);
  


// 3. Funksiya yazacaqsiniz və parametr olaraq array və number qəbul edəcək. Həmin number-in array-də olub-olmadığını yoxlayacaqsınız.
function checkNumberInArray(array, numberA) {
    let foundNumber = array.find(function(element) {
        return element === numberA;
    });

    return foundNumber !== undefined;
}

let numbersA = [3, 8, 2, 10, 5];

let result = checkNumberInArray(numbersA, 10);

if(result===true ){


console.log("eded array-a daxildir ");
}
else{
    console.log("eded array-a daxil deyil ");

}
