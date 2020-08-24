var myIndex = 0;
slideshow();

function slideshow() {
  var i;
  var slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > slides.length) {
    myIndex = 1;
  }
  slides[myIndex-1].style.display = "block";
  setTimeout(slideshow, 4000);
}
