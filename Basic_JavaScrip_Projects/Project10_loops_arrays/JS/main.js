function Call_Loop() {                                                //initialazing function
    var Digit = "";                                                   //asigning variables
    var X = 1;
    while (X < 11) {                                                   //starting condition
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;                 //performing results
}

function String_Leng() {                                                     //initialazing function
    var Sentence = "Hello Parrots!!";                                        //asigning variables
    document.getElementById("stringleng").innerHTML = Sentence.length;       //performing results
}


var Parrots = ["Blue Parrot", "Green Parrot", "Yellow Parrot", "Green-Red Parrot", "Grey Parrot", "Green-Blue Parrot", "Green-Yellow Parrot"]; //asigning variables
var Content = "";
var Y;                                                                         //asigning variables
function for_Loop() {                                                         //initialazing loop function
    for (Y = 0; Y < Parrots.length; Y++) {
    Content += Parrots[Y] + "<br>";
    }
    document.getElementById("List_of_Parrots") .innerHTML = Content;           //performing results
}

function Parrot_pics() {                                                                //initialazing function
    var Parrot_Picture = [];                                                             //asigning variables
        Parrot_Picture[0] = "Sleeping";
        Parrot_Picture[1] = "Playing";
        Parrot_Picture[2] = "Eating";
        Parrot_Picture[3] = "Purring";
    document.getElementById("Parrot").innerHTML = "In the picture, the parrot is " + Parrot_Picture[1] + "."; //performing results
}

function My_Parrots() {                                                                    //initialazing function
    var Parrot = [];                                                                        //asigning variables
    Parrot[0] = "Oratrix";
    Parrot[1] = "Autumalis";
    Parrot[2] = "Guaetemalae";
    document.getElementById("Array_Parrot").innerHTML = "I take care of three kind of parrots: " + Parrot[0] + ", " + Parrot[1] + " y " + Parrot[2] +"."; //performing results
}

function myFunction() {                                                                  //initialazing function
    var carName = "Corvette";                                                             //asigning variables
        document.getElementById("carname").innerHTML = carName;                           //performing results
}

function Constant_Function () {                                                                      //initialazing constant function
    const Parrot_Picture = {type: "Parrot", specie: "Guatemalae", color: "Green and Blue"};             //asigning constant
        Parrot_Picture.color = "sepia";
        Parrot_Picture.price = "$ 5 DLS.";
        document.getElementById("constant").innerHTML = "The cost of the picture with a " + Parrot_Picture.type +" is " + Parrot_Picture.price + "."; //performing results
}

function let_function() {                                                                                //initialazing let function
var X = 675;                                                                                               //asigning variables
document.write(X);
{
        let X = 421;                                                                                //let function
        document.write("<br>" + X);
}
document.write("<br>" + X);                                                                        //performing results
document.getElementById("letting").innerHTML = X;                                                   //performing results
}

function myFunctionreturn() {                                                                          //initialazing function
    function returnPI(){                                                                                 //initialazing return function
        return Math.PI;
    }
    document.getElementById("Piof").innerHTML = returnPI();                                             //performing results
}

function myFunctionreturn1(){                                                                           //initialazing function
function returnname(name) {                                                                              //initialazing return like a nested function
    return "Hello " + name;
}
document.getElementById("nameof").innerHTML = returnname("Luis");                                        //performing results
}

function kingloro() {                                                                                    //initialazing function
    let Loro = {                                                                                          //making description
        specie: "Autumalis ",
        color: "green, red and yellow face ",
        height: "10 Inches ",
        description: function () {
            return "The king loro is a " + this.specie + this.color + this.height;
            }
    };
    document.getElementById("king_loro").innerHTML = Loro.description();                                         //performing results
}

function DinosaurGame () {                                                                                 //initialazing function
let Dinosaur_game = "";
for (let i = 1; i < 10; i++) {                                                                              //starting condition
  if (i === 4) { break; }
  Dinosaur_game += "Dinosaur king always wins " + i + " place" +"<br>";
}
document.getElementById("dinosaur").innerHTML = Dinosaur_game;                                                 //performing results
}

function NadiaLove () {                                                                                    //initialazing function
let BrokemyHeart = "";
for (let i = 0; i < 10; i++) {                                                                              //starting condition
  if (i === 3) { continue; }
  BrokemyHeart += "Nadia Broke my heart " + i + " times" +"<br>";
}
document.getElementById("Nadia_Brokes_My_Heart").innerHTML = BrokemyHeart;                                      //performing results
}



