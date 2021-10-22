const menuBtn = document.getElementById("menu-btn")
const dropDown = document.getElementById("drop-down")
const pageLinks = document.querySelectorAll(".nav-link")
let clickCount = 0



const showMenue = () => {
    clickCount ++
    clickCount % 2 === 0 ? hideNav() : showNav()
}

const hideNav = () => {
    dropDown.style.display = "none"
}

const showNav = () => { 
    dropDown.style.display = "flex"

}

pageLinks.forEach(link => {
    link.addEventListener("click", hideNav)
})


menuBtn.addEventListener("click", showMenue)

