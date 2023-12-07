const mobile_nav=document.querySelector(".mobile_nav_icon");
const header=document.querySelector(".header");
const toggleNavbar=()=>{
    header.classList.toggle("active");
    console.log(5+6);
}

mobile_nav.addEventListener('click',()=>toggleNavbar());