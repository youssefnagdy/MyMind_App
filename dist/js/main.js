/**
 * Created by YoussefNagdy on 7/14/2020.
 */

let currentSlide = 1;
// var slideIndex = 0;
// showSlides();
const slidesDivs = Array.from(document.querySelectorAll('.slides div'));
let slidesCount = slidesDivs.length;


let next = document.getElementById('next');
let prev = document.getElementById('prev');

next.addEventListener('click',nextSlide);
prev.addEventListener('click',prevSlide);

let PaginationElement = document.createElement('ul');
PaginationElement.setAttribute('id','pagination-ul');

for(var i = 1 ; i<= slidesCount;i++)
{
    let PaginationItems = document.createElement('li');

    PaginationItems.setAttribute('data-index',i);

    PaginationElement.appendChild(PaginationItems);
}

document.getElementById('bullets').appendChild(PaginationElement);

let paginationCreatedUl  = document.getElementById('pagination-ul');
// Get Pagination Items | Array.form [ES6 Feature]
var paginationsBullets = Array.from(document.querySelectorAll('#pagination-ul li'));

for(var i =0 ; i<paginationsBullets.length ; i++)
{
    paginationsBullets[i].onclick = function () {
        currentSlide = parseInt(this.getAttribute('data-index'));
        Checker();
    }
}
// Trigger The Checker Function
Checker();


//Previous & Next 
function nextSlide() {
    if(currentSlide == slidesCount)
    {
        currentSlide = 0;
        currentSlide++;
        Checker();
    }else{
        currentSlide++;
        Checker();
    }

}

function prevSlide() {
    if(currentSlide == 1)
    {
        currentSlide = slidesCount;
        Checker();
    }else{
        currentSlide--;
        Checker();
    }

}

function Checker() {
//Remove All Active Class
    removeAllActive();

    slidesDivs[currentSlide - 1].classList.add('active');
    paginationCreatedUl.children[currentSlide -1].classList.add('active');
}

function removeAllActive() {
    slidesDivs.forEach(function (div) {
        div.classList.remove('active');
    });

    paginationsBullets.forEach(function (bullet) {
        bullet.classList.remove('active');
    })
}


// function showSlides() {
//     var i;
//     for(i = 0; i < slidesCount ; i++)
//     {
//         slidesDivs[i].classList.remove('active');
//     }
//     slideIndex++;
//     if(slideIndex > slidesCount){slideIndex = 1}
//     slidesDivs[slideIndex - 1].classList.add('active');
//     setTimeout(showSlides,2000);
// }

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = Array.from(document.querySelectorAll('.slides div'));
    var dots = document.getElementById("pagination-ul").children;
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
    }
    slides[slideIndex-1].classList.add('active');
    dots[slideIndex -1].classList.add('active');
    setTimeout(showSlides, 2500); // Change image every 2 seconds
}

