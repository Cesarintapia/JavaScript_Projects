function full_sentence() {                                                        //starting concatenate function 
    var part_1 = "Hello ";
    var part_2 = "Parrots you ";
    var part_3 = "are amazing ";
    var part_4 = "birds.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("concatenate").innerHTML = whole_sentence;
}

function slice_method() {                                                                 //starting slice function
    var sentence = "Hello Parrots you are amazing birds.";
    var section = sentence.slice(6,13);
    document.getElementById("slice").innerHTML = section;
}

function Upper_case() {                                                                     //starting upper case function
    var sentence = "Hello Parrots you are amazing birds"
    var upper_case1 = sentence.toUpperCase();
    document.getElementById("Upper").innerHTML = upper_case1;
}

function Search_method() {                                                                     //starting search function
    var sentence = "Hello Parrots you are amazing birds"
    var search_method = sentence.indexOf("Parrots");
    document.getElementById("Search").innerHTML = search_method;
}

function string_method() {                                                                      //starting string function
    var x = 542;
    document.getElementById("numbers_to_string").innerHTML = x.toString();
}

function precision_method() {                                                                   //starting presicion function
    var x = 73635537238.7347347347347542;
    document.getElementById("Precision").innerHTML = x.toPrecision();
}

function fixed_method() {                                                                           //starting Fixed function
    var X = 44.852;
    document.getElementById("Fixed").innerHTML = X.toFixed();
}


function value_method() {                                                                     //starting value function
    var sentence1 = "Hello Parrots";
    document.getElementById("Value").innerHTML = sentence1.valueOf();
}
