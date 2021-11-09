function my_Function() {                                                              //inizialiting function
    document.getElementById("Test") .innerHTML =0/0;                                  //performing NaN value 
    document.getElementById("Test1") .innerHTML = isNaN('This is string');            //performing true value
    document.getElementById("Test2") .innerHTML = isNaN('007');                       //performing false value
}

