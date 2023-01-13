// 1 : Make an Object using new Object() Constructor and add some Properties and Methods of your 
//     choice and access them.
const myObj = new Object(
                         {name : "Naghman",
                         age :39,
                         printName : function () {
                                            console.log(this.name);
                                            }
                         }
                        );

myObj.printName();
console.log("Initialized Age:",myObj.age);

// 2 : Reassign values in your object properties and access using Methods with the help of this Keyword.
myObj.name = "Zayyan";
myObj.age  = 9;
myObj.printName();
console.log("Updated Age:",myObj.age);

// 3 : Make a Function which Prints your Name
const myName = () => {
    console.log("Naghman Shafeeque");
}
myName()

// 4 : Make a Methods which takes 2 papameters and do Addition, Substraction, Multiplecation and Division.

const myFunc = (num1, num2) => {
    console.log("Addition:",num1 + num2);
    console.log("Substraction:",num1 - num2);
    console.log("Multiplication:",num1 * num2);
    console.log("Division:",num1 / num2);
}

myFunc(9,3);