const mobile_nav=document.querySelector(".mobile_nav_icon");
const header=document.querySelector(".header");
const toggleNavbar=()=>{
    header.classList.toggle("active");
    console.log(5+6);
}

mobile_nav.addEventListener('click',()=>toggleNavbar());
// Using smooth scroll behavior
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
  
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
  
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth'
        });
        header.classList.remove("active");
      }
    });
  });
  

const texts = ["Web Developer", "Software Engineer", "C Developer","Java Developer"];
let textIndex = 0; // Index for the current text in the array
let letterIndex = 0; // Index for individual letters within the text

function type() {
  if (letterIndex < texts[textIndex].length) {
    document.getElementById('typed-text').innerHTML += texts[textIndex].charAt(letterIndex);
    letterIndex++;
    setTimeout(type, 100); // Speed of typing animation (milliseconds)
  } else {
    setTimeout(erase, 1000); // Time to wait before erasing (milliseconds)
  }
}

function erase() {
  if (letterIndex >= 0) {
    const currentText = texts[textIndex];
    document.getElementById('typed-text').innerHTML = currentText.substring(0, letterIndex);
    letterIndex--;
    setTimeout(erase, 100); // Speed of erasing animation (milliseconds)
  } else {
    textIndex = (textIndex + 1) % texts.length; // Move to the next text in the array
    setTimeout(type, 500); // Time to wait before typing the next text (milliseconds)
  }
}

// Start typing when the window loads
window.onload = function() {
  setTimeout(type, 500); // Initial delay before starting typing (milliseconds)
};
