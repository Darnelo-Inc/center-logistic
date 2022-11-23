const burger = document.getElementById("burger")
const nav = document.getElementById("nav")

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
}

function closeMenu() {
    burger.classList.remove("active")
    nav.classList.remove("active")
}