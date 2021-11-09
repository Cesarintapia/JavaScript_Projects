
document.write("typeof \"word\" is a: ");                                            //printing the typeof result as:
document.write(typeof "word");                                                       //performing the typeof function string
document.write("<br> typeof 4 is a: ");                                              //printing the typeof number as
document.write(typeof 4);                                                            //performing the typeof function string
document.write("<br>");
document.write("the coercion of 100 and 10 is: ");                                    //printing the coercion of two numbers as:
document.write("100"+10);                                                             //performing the coercion function

function my_Function1() {                                                              //inizialiting function
    document.getElementById("large_number") .innerHTML = 2E310;                        //performing infinite
    document.getElementById("large_negative_number") .innerHTML = -2E310;              //performing -infinite
}

function my_Function2() {                                                              //inizialiting function
    document.getElementById("Test") .innerHTML =0/0;                                   //performing NaN value 
    document.getElementById("Test1") .innerHTML = isNaN('This is string');             //performing true value
    document.getElementById("Test2") .innerHTML = isNaN('007');                        //performing false value
}

//comparations
document.write("<br>");
document.write("<br>");
document.write(100 > 10);                                                              //performing comparative >
document.write("<br>");
document.write(100 < 10);                                                               //performing comparative <
document.write("<br>");
document.write("<br>");

console.log(1200+200);                                                                   //comsole function

document.write("<br>");
document.write("<br>");
document.write(132 == 132);                                                              //performing doble equal function true
document.write("<br>");
document.write(132 == 130);                                                              //performing doble equal function false
document.write("<br>");
document.write("<br>");


//performing triple equal
var X=49;                                                                                  //declaring variables.
var Y=49;
document.write(X===Y);                                                                     //performing triple equal function as true
document.write("<br>");
var X=49;                                                                                   //declaring variables.
var Y2="49";
document.write(X===Y2);                                                                     //performing triple equal function as false
document.write("<br>");

var A="Parrot";                                                                              //declaring variables.
var B="Parrot";
document.write(A===B);                                                                       //performing triple equal function as true
document.write("<br>");
document.write("<br>");

document.write(53>34 && 34>12);                                   //performing boolean operator && and true.
document.write("<br>");                                  
document.write(3>34 && 34>12);                                   //performing boolean operator && and false.
document.write("<br>");
document.write(5>84 || 78>9);                                    //performing boolean operator || OR true.
document.write("<br>");                                    
document.write(33>14 || 21>132);                                 //performing boolean operator || OR true.
document.write("<br>");

function Not_Function(){                                         //inizialating function
    document.getElementById("Not") .innerHTML= !(956>452);       //performing Not operator as a false.
}
document.write("<br>");
function Not_Function1(){                                          //inizialating function
    document.getElementById("Not1") .innerHTML= !(956>2452);       //performing Not operator as a true.
}

