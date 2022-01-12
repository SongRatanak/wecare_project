let navbar = document.querySelector("nav")

window.onscroll=()=>{
    if(window.scrollY>=200){
        navbar.classList.add("active")
    }
    else{
        navbar.classList.remove("active")
    }
}