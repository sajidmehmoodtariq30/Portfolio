let navbarBtn = document.getElementById('navbar-btn');
let header = document.querySelector('header');
let theme_img = document.getElementById("theme_img");
let isDarkTheme = true;

// Check if theme is already stored in localStorage
let storedTheme = localStorage.getItem('theme');
if (storedTheme) {
  isDarkTheme = storedTheme === 'dark' ? false : true;
  toggleTheme();
}

// loader
window.addEventListener("load", function () {
  setTimeout(function () {
    document.getElementById("preloader").style.display = "none";
  }, 1000);
})

// Add an event listener to the navbar button
navbarBtn.addEventListener('click', () => {
  header.style.display = header.style.display === 'block' ? 'none' : 'block';
  if (header.style.display === 'block') {
    if (isDarkTheme === true) {
        navbarBtn.classList.add("bg");
    }
  } else {
    navbarBtn.classList.remove("bg");
  }
})

// Define the toggleTheme function
function toggleTheme() {
  if (isDarkTheme) {
    document.querySelectorAll('*').forEach(element => {
      element.style.color = "#159599";
    });
    document.body.style.background = "#f0f0f0";
    header.style.background = "#e6dddd";
    theme_img.src = "images/moon.png";
    // iterate over the elements with class
    Array.prototype.forEach.call(document.getElementsByClassName('skill'), function(element) {
      element.style.background = "#e6dddd";
    });
    Array.prototype.forEach.call(document.getElementsByClassName('project'), function(element) {
      element.style.background = "#e6dddd";
    });
    document.getElementById("contact-form").style.background = "#e6dddd";
    document.getElementById("footer").style.background = "#e6dddd";
    localStorage.setItem('theme', 'light');
  } else {
    document.querySelectorAll('*').forEach(element => {
      element.style.color = "#fff";
    });
    document.body.style.background = "#2C3333";
    theme_img.src = "images/sun.png";
    header.style.background = "#2a5e5e";
    // iterate over the elements with class
    Array.prototype.forEach.call(document.getElementsByClassName('skill'), function(element) {
      element.style.background = "#838080";
    });
    Array.prototype.forEach.call(document.getElementsByClassName('project'), function(element) {
      element.style.background = "#838080";
    });
    Array.prototype.forEach.call(document.getElementsByClassName('contact-form-info'), function(element) {
      element.style.color = "#838080";
    });
    document.getElementById("contact-form").style.background = "#838080";
    document.getElementById("footer").style.background = "#2a5e5e";
    document.getElementById("contact-btn").style.color = "#838080";
    localStorage.setItem('theme', 'dark');
  }
  isDarkTheme = !isDarkTheme;
}

theme_img.addEventListener('click', toggleTheme);


// scroll animation
const animatedElements = document.querySelectorAll('.animated-element');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    } else {
      entry.target.classList.remove('in-view');
    }
  });
}, {
  root: null,
  threshold: 0.6, // trigger when element is fully visible
});

animatedElements.forEach((element) => {
  observer.observe(element);
});