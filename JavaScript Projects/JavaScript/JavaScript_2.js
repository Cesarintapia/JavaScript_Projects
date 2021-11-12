function validateForm(form) {
    let x = document.forms["myForm"]["fname"].value;
    let y = document.forms["myForm"]["lname"].value;
    if (x == "" || y == "") {
      alert("Blanks must be fill in");
      return false;
    }
}

