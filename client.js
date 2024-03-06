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
  
