function Fly_Function() {                                                                             //starting function
    var Height, Can_fly;                                                                              //asigning variables
    Height = document.getElementById("Height") .value;                                                //asigning the value to input function
    Can_fly = (Height < 32) ? "You are too short Blue Parrot":"You are tall enough Blue Parrot";    
    document.getElementById("Fly") .innerHTML = Can_fly + " to fly";                                  //perform the results
}

function vote_Function() {                                                                              //starting function
    var Age, Can_vote;                                                                                  //asigning variable
    Age = document.getElementById("Age") .value;                                                        //asigning the value to input function
    Can_vote = (Age < 18) ? "You are not enough to":"You can";                                          
    document.getElementById("vote") .innerHTML = Can_vote + " vote";                                    //perform the results
}


function Vehicle(Make, Model, Year, Color)                                                              //starting function
{
    this.Vehicle_Make = Make;                                                                           //asinging varibles
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jean = new Vehicle("Dodge", "Viper", "2020", "Red");                                                 //creating objects
var Rose = new Vehicle("Jeep", "Trail", "2019", "White and Black");
var Jim = new Vehicle("Ford", "Pinto", "2022", "Mustard");

function myFunction1() 
{
    document.getElementById("Keywords_and_constructions1") .innerHTML = "Luis drives a "                //perform the construction and results
     + Jean.Vehicle_Color + " -colored " + Jean.Vehicle_Model 
    + "  manufactutred in " + Jean.Vehicle_Year;
}




function Parrot(specie, age, height, color)                                                               //starting function
{
    this.Parrot_specie = specie;                                                                          //asinging varibles
    this.Parrot_age = age;
    this.Parrot_height = height;
    this.Parrot_color = color;
}

var Luis = new Parrot("Autumallis", "5", "30", "green-red-yellow");                                         //creating objects
var Leo = new Parrot("Oratrix", "3", "25", "green-yellow");
var Mary = new Parrot("Guatemalae", "12", "35", "green-blue");

function myFunction()                                                                                         //starting function
{
    document.getElementById("Keywords_and_constructions") .innerHTML = "Luis has a " + Luis.Parrot_color +  //perform the construction and results
     " colored Parrot with " + Luis.Parrot_age 
    + " years old and " + Luis.Parrot_height + " of height";
}


//reserved word null, the construction doesn't work using this king of word
function Person(first, last, age, eye) {                                  
  this.firstName = first;
  this.lastName = last;
  this.age = null;
  this.eyeColor = color;
}

var gel = new Person("Cesar", "Tapia", "45", "brown" );                                                     

function Myperson()
{
document.getElementById("reserved_words").innerHTML = "My father is " + gel.null + "."; 
}

//defining variables as a integer and string
var X=214;
var y="Osita Polar"

function count_function() {                                                                                 //starting nested function
    document.getElementById("counting").innerHTML=Count();                                                  //asigning values to nested function
    function Count() {                                                                                      //starting new function in the nest
        var Starting_point=9;                                                                               //asigning variables
        function plus_one() {Starting_point += 1;}                                                          //function of count in the nest
        plus_one();                                                                                             //value
        return Starting_point;                                                                                  //result
    }
}