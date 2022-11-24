const burger = document.getElementById("burger")
const nav = document.getElementById("nav")
const body = document.body

burger.addEventListener("click", event => {
    if (burger.classList.contains("active")) {
        closeMenu()
    } else {
        showMenu()
    }
})

function showMenu() {
    burger.classList.add("active")
    nav.classList.add("active")
    body.classList.add("no-scroll")
}

function closeMenu() {
    burger.classList.remove("active")
    nav.classList.remove("active")
    body.classList.remove("no-scroll")
}