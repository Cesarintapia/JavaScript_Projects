
function addition_Function() {                                                                                      //initializing function
    var addition = 24+24;                                                                                           //defining variable an giving value
    document.getElementById("Addition") .innerHTML= "Addition of 24 + 24 = " + addition;                            //performing results
}

function Substraction_Function() {                                                                                  //initializing function
    var Substraction = 234-134;                                                                                      //defining variable an giving value
    document.getElementById("Substraction") .innerHTML= "Substraction of 234 - 134 = " + Substraction;               //performing results
}

function Multiplication_Function() {                                                                                //initializing function
    var Multiplication = 234*1000;                                                                                   //defining variable an giving value
    document.getElementById("Multiplication") .innerHTML= "Multiplication of 234 * 1000 = " + Multiplication;        //performing results
}

function Division_Function() {                                                                                       //initializing function
    var Division = 234 / 100;                                                                                         //defining variable an giving value
    document.getElementById("Division") .innerHTML= "Division of 234 / 100 = " + Division;                            //performing results
}

function Multiple_Math() {                                                                                            //initializing function
    var Math = (564 - 64) * 1000 / 50;                                                                                 //defining variable an giving value  
    document.getElementById("Math") .innerHTML= "If you substrac 64 to 564 after that you multiplicate by 1000 and after that make the division by 50 = " + Math;  //performing results
}

function Remainder_Math() {                                                                                             //initializing function
    var Remainder = 50 % 8;                                                                                             //defining variable an giving value
    document.getElementById("Remainder") .innerHTML= "If you divide 50 by 8 you'll have the remainder = " + Remainder;  //performing results
}

function Negation_Function() {                                                                                           //initializing function
    var Negation = 674;                                                                                                  //defining variable an giving value
    document.getElementById("Negation") .innerHTML= "The negation of 674 = "+ (-Negation);                               //performing results
}

//increment
function Increment_Function() {                                                                                           //initializing function
var X=865;                                                                                                                //defining variable an giving value
X++;                                                                                                                      //apply operator
document.getElementById("X") .innerHTML= "The Increment of 865 = "+ X;                                                    //performing results
}

//decrement
function Decrement_Function() {                                                                                            //initializing function
    var Y=865;                                                                                                            //defining variable an giving value
    Y--;                                                                                                                  //apply operator
    document.getElementById("Y") .innerHTML= "The Decrement of 865 = "+ Y;                                                //performing results
}

//random
window.alert(Math.random());                                                                            //initializing random function 0-1

window.alert(Math.random() * 546);                                                                       //initializing random function 0-546
