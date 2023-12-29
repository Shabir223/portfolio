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


let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;

valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue == endValue) {
            clearInterval(counter);
        }

    },duration);
});
