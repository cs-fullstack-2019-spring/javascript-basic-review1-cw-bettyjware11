//Write a JavaScript program that does the following:
//
// Prompts the User to enter their outstanding loan amount as a number (LOANAMT)
// Prompts the User to enter the number of months in which they want to pay off the loan (NUMMONTHS)
// Calculates the monthly payment they need to make and logs it to the console as To pay of a loan of LOANAMT it will take NUMMONTHS months

var LOANAMT = prompt("What is loan amount?");
var NUMMONTHS = prompt("How many months do you want to pay?");
var monthlyPayment = (LOANAMT / NUMMONTHS);
 console.log("To pay off a loan in the amount of", " ", LOANAMT," ", "the monthly payment will be"," ",monthlyPayment);
