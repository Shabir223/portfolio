var tablinks = document.getElementsByClassName("tab-links");
var tabcontains = document.getElementsByClassName("tab-contains");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontain of tabcontains){
        tabcontain.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}


let currentindex = 0;

function showSlide(index) {
    const slider = document.querySelector(' .slider');
    const totalSlides = document.querySelectorAll(' .slide').length;

 
if (index < 0){
    index = totalSlides - 1;
} 
else if (index >= totalSlides) {
    index = 0;
}

currentindex = index;
const translateValue = -index * 100 + '%';
slider.style.transform = 'translateX(' + translateValue +')';
}

function prevSlide(){
    showSlide(currentindex - 1);
     
}
function nextSlide(){
    showSlide(currentindex + 1);
}
