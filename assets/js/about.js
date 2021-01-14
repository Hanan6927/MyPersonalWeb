function openModal(){
    document.getElementById('my-modal').style.display = "inline-flex";
}

function closeModal(){
    document.getElementById('my-modal').style.display = "none";
}

var slideIndexJs = 1;

showSlides(slideIndexJs);

function changeSlides(n){
    showSlides(slideIndexJs += n);
}

function currentSlide(n){
    showSlides(slideIndexJs = n);
}

function showSlides(n){
    var i;
    var slidesJS = document.getElementsByClassName("my-slides");
    if (n > slidesJS.length){
        slideIndexJs = 1
    }if (n < 1){ slideIndexJs = slidesJS.length;}

    for(i = 0; i < slidesJS.length; i++){
        slidesJS[i].style.display = "none";
    }

    slidesJS[slideIndexJs-1].style.display = "block";
}
function myFunction(x) {
    x.classList.toggle("fa-sort-down");
  }