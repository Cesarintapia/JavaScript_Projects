//document.write('Hello, World!!!');
var A = "This is a parrot <br>";
var B = " Beautifull bird";
var C = A + B;

var Family = "Hartrowth", Dad="Wilson", Mon="Melanie", Daughter="Mily", Son="Toby";
document.write(A);

window.alert(B);

document.write("Lisa told Bart,\"Knock it off Bart! Or I'll tell dad!\"<br>\"Eat my shorts!\"Bart responded.");
document.write("\"hola Parrots sing the beautifull song about the magic fly," + " because you don\'t be affraid anymore and you must be a rich flies forever.\"" +"<br>-Dr. Dre");
document.write (C);
document.write(Dad);

var blues= "I have the Blues.";
var blues= blues.fontcolor ("blue");
document.write (blues);

var Alipus=5;
var Belipus=4;
document.write ("<br>");
document.write (Alipus+Belipus);
document.write ("<br>");
document.write (8+89);
document.write ("<br>");
//first function

function My_First_Funtion() {                                                           //initializing function
    var str = "the Text is magic GREEN!";                                               //defining variable an giving value
    var result = str.fontcolor ("green");                                                 //using font color
    document.getElementById ("Green_Text") .innerHTML = result;                         //putting value of result into HTML element with "Green_Text" id
}



//start the new task

var x = "Hello BLUE PARROT, How's it going";                                                //defining variable x.
var y = "I love fly";                                                                       //defining variable y.
var result1 = x+y;                                                                          //concatenation x and y.
var result1 = result1.fontcolor("green");                                                   //defining variable color 

window.alert(x);                                                                            //pop up message "Hello BLUE PARROT, How's it going"
document.write("<br>");

var x1=90;                                                                                  //defining variable x1.
var x2=120;                                                                                 //defining variable x2.
var result2=String(x1+x2);                                                                  //operation x1 plus x2
var result2=result2.fontcolor("blue");                                                      //defining variable color

document.write (result1);                                                                    //printing resul1
document.write ("<br>");                                                                    
document.write (result2);                                                                    //printing resul2
document.write ("<br>");
