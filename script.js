const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}


// when we click on hamburger icon its close 

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}
const getBtn = document.getElementById('get');
getBtn.addEventListener("click", function(){
    const validEl = document.getElementById('Roll').value;
    if (validEl === "") {
        return false
        alert('not a valid number')
    }
    const invidiul = document.getElementById('result');
    invidiul.style.display='none';
    const show= document.getElementById('show');
    show.style.display='block';
    const update= document.getElementById('updateRoll');
    update.innerText=validEl;
    let randomEl= Math.random()*2+2 ;
    document.getElementById('dynamic').innerText=randomEl.toFixed(2);
  
});
const mainPage = document.getElementById('refresh');
mainPage.addEventListener("click", function(){
    location.reload(true);
})


