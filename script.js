const hamburger = document.getElementsByClassName('hamburger')[0]
const navlinks = document.getElementsByClassName('nav-links')[0]



hamburger.addEventListener('click', () => {
    navlinks.classList.toggle('active');
    hamburger.classList.toggle('active');
})

document.onclick = function(e){
    if(e.target.id != 'hamburger' && e.target.id != 'bar' && e.target.id != 'nav-links')
    {
        navlinks.classList.remove('active');
        hamburger.classList.remove('active');
        console.log("work");
    }
}






//CAROUSEL

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}



function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
