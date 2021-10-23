const menuBtn = document.getElementById("menu-btn")
const dropDown = document.querySelector(".nav-links")
const pageLinks = document.querySelectorAll(".nav-link")
let clickCount = 0



const showMenue = () => {
    clickCount ++
    clickCount % 2 === 0 ? hideNav() : showNav()
}

const hideNav = () => {
    clickCount = 0
    const menueDisplay = window.getComputedStyle(menuBtn, null).display
    menueDisplay === "block" ? dropDown.style.display = "none" : dropDown
}

const showNav = () => { 
    dropDown.style.display = "flex"

}

pageLinks.forEach(link => {
    link.addEventListener("click", hideNav)
})


menuBtn.addEventListener("click", showMenue)

