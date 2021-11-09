
function My_Dictionary() {                                                                           //initializing function
    var Animal = {                                                                                  //defining variable an giving diferent attributes
        Species: "Parrot",
        Color: "Green_Red_Yellow",
        Breed: "Autumallis",
        Age: 5,
        Sound: "Sing"                                                                              
    }
    delete Animal.Sound;                                                                           //Deleting the value Sing
    document.getElementById("Dictionary") .innerHTML= "The Parrot " + Animal.Sound;                //performing results
}
