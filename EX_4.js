//Ask the user to input the temperature as a number (store in variable FTEMP), and convert it to celcius
//(store in variable CTEMP)
// Log the message FTEMP Fahrenheit equals CTEMP in Celcius

var FTEMP =prompt("Enter temperature");
var CTEMP = (Math.round((FTEMP - 32) * 5 / 9));


console.log(FTEMP," " + "Fahrenheit equals"," ",CTEMP, " ","in Celcius");




