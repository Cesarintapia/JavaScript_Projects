var Alfa= 410;                                                      //asignating a general variable
function Add_numbers_1() {                                          //starting function
    document.write(20 + Alfa + "<br>");
}

function Add_numbers_2() {                                          //starting function
    var Beta=32;                                                    //asignating a local variable
    document.write(Beta + 100);
}
Add_numbers_1();    
Add_numbers_2();

function Add_numbers_3() {                                         //starting function with error no declaration of z variable
    console.log(z + 100);                                          // performing console for debuging instead the error
}
Add_numbers_3();

function get_Date() {                                                   //starting function
    if (new Date().getHours() < 18) {                                   //performing the date function
    document.getElementById("Greeting").innerHTML = "How is't going";
    }
}

function Age_Function() {                                                //starting if/else function
    Age = document.getElementById("Age").value;
     if (Age >= 18) {                                                    // operator >=
        vote = "You are old enough to vote!";
    }
    else {
        vote = "You are not enough to vote!";
    }
    document.getElementById("How_old_are_you").innerHTML= vote;          //performing the results
}

function Time_function () {                                              //starting else if fucntion
    var Time = new Date().getHours();                                    //asignating variables 
    var Reply;
    if (Time < 12 == Time > 0) {                                         //first condition
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {                                   //second condition
        Reply = "It is afternoom.";
    }
    else {                                                                //third condition
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;            //performing results
}