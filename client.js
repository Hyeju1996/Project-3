"use strict"

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

// JavaScript to handle the button click event
document.getElementById("myButton").addEventListener("click", function() {
  // Redirect to another page
  window.location.href = "buy.html";
});


  