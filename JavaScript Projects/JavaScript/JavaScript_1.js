function specie_function () {                                                          //iniciating switch function
    var specie_output;                                                                 //asigning variables
    var specie = document.getElementById("specie_input").value;                     
    var specie_string = " is a great specie";
    switch (specie) {                                                                   //starting switch function 
        case "Autumalis":                                                               //iniciating case
            specie_output = "Autumalis " + specie_string;
        break;                                                                           //finising case  with brake
        case "Oratrix":                                                                  //iniciating case
            specie_output = "Oratrix " + specie_string;
        break;                                                                            //finising case  with brake
        case "Guatemalae":                                                                //iniciating case
            specie_output = "Guatemalae " + specie_string;
        break;                                                                            //finising case  with brake     
        default:
        specie_output = "Select the Parrot that you think is the king_loro."               //seting input message
    }
    document.getElementById("output").innerHTML = specie_output;                            //performing results
}

function Hello_World_Function () {                                                      //iniciating 

    var A = document.getElementsByClassName("click");                                  //calling getElementsByClassName
    A[0].innerHTML = "The text has change"                                              //performing result
}

function draw(direction) {                                                              //initialazing canvas function with image
    var c = document.getElementById("canvas_loro");                                     //declaring variables
    var ctx = c.getContext("2d");
    ctx.clearRect(300, 150, c.width, c.height);
    var img = document.getElementById("loro")
    var pat = ctx.createPattern(img, direction);
    ctx.rect(0, 0, 300, 150);                                                            //filling rectangule
    ctx.fillStyle = pat;
    ctx.fill();
  }
function Mycanvas1() {
  var c = document.getElementById("myCanvas");                                           //declaring variables
  var ctx = c.getContext("2d");
  
  var grd = ctx.createLinearGradient(0, 0, 170, 0);
  grd.addColorStop(0, "black");
  grd.addColorStop(1, "white");
  
  ctx.fillStyle = grd;
  ctx.fillRect(20, 20, 150, 100);                                                         //filling rectangule
}
document.getElementById("gradient").innerHTML = ctx.fillStyle;                            //performing results
