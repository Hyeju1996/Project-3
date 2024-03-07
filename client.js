"use strict"

/* =======show menu========*/
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')


/*== MENU SHOW====*/
/* Varidate if constant exists */
if(navToggle){
navToggle.addEventListener('click',() =>{
  navMenu.classList.add('show-menu')
})
}

/*====MENU HIDDEN ====*/
/* VALIDATE OF CONSTANT EXISTES */

if(navClose){
navClose.addEventListener('click',()=>{
  navMenu.classList.remove('show-menu')
})
}
  

// JavaScript to handle the button click event
document.getElementById("myButton").addEventListener("click", function() {
  // Redirect to another page
  window.location.href = "book.html";
});

function toggleMenu() {
var menu = document.getElementById("menu");
menu.classList.toggle("open");
}


document.getElementById("appointmentForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var date = document.getElementById("date").value;
  var time = document.getElementById("time").value;
  // Here you can add code to send the appointment details to a server or perform any other action
  alert("Appointment booked!\nName: " + name + "\nEmail: " + email + "\nDate: " + date + "\nTime: " + time);
});




  
