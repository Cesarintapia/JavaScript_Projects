function displayType1(character) {
    var characterType = character.getAttribute("data-parrot-placed");
    alert("In " + characterType + " lives the " + character.innerHTML);
}