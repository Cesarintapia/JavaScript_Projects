var slideIndex = 1;                                              //setting general variable
showSlides(slideIndex);

function plusSlides(n) {                                         //starting function slide1
  showSlides(slideIndex += n);
}

function currentSlide(n) {                                        //starting function slide2
  showSlides(slideIndex = n);
}

function showSlides(n) {                                         //starting function
  var i;                                                         //setting local variables
  var slides = document.getElementsByClassName("mySlides");      
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}                        //starting if function
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";                    //performing results
  dots[slideIndex-1].className += " active";
}
