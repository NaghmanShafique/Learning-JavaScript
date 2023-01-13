
// Create an Function which can take any number of parameters and do Addition of All and then Return
// the result to Result variable and after that show the result using console
    
 const myCalculation = (...numbers) => {
   let add = 0
   for (number of numbers) {
    add += number;
    
   }
   return add;
}

let result = myCalculation(10,20,30);
console.log(result);