let alertMsg="We are in a pandemic. Keep it mind and safe Travel. Stay Safe!."

//Alert a message when the loading of the home page.
function showAlert(){
    //alert(alertMsg);
}

let topBtn = document.getElementById("topBtn");

// When the user scrolls down 20px from the top of the page will be Shown the back to top button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the page
function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//Hamburger Menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}