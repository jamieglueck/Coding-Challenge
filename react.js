var carousel = document.getElementById('slides');
var carouselSlides = carousel.children;
var nextButton = document.getElementById('next-button');
var prevButton = document.getElementById('prev-button');
var count = 0;


prevButton.addEventListener('click',function(e) {PrevSlide();});
nextButton.addEventListener('click',function(e) {NextSlide();});

window.onresize = function(event) {
  carousel.classList.add('staystill');
  updateView();
  carousel.classList.remove('staystill');
};

function NextSlide() {
  if (count >= carouselSlides.length - 1) {
    count = 0;
  }
  else {
    count = count +1;
  }
  updateView();
}

function PrevSlide() {
  if (count <= 0) {
    count = carouselSlides.length - 1;
  }
  else {
    count= count - 1;
  }
  updateView();
}


function updateView() {
  carousel.style.marginLeft = -1*(count * document.documentElement.clientWidth)+'px';
}