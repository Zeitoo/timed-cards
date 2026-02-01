const card1 = document.querySelector(".card-1")
const card2 = document.querySelector(".card-2")
const card3 = document.querySelector(".card-3")
const card4 = document.querySelector(".card-4")
const card5 = document.querySelector(".card-5")
const cards = document.querySelectorAll(".card")
const wrapper = document.querySelector(".wrapper")



function rolar() {
    cards.forEach((element, index) => {
        const classList = element.className
        if (classList.includes(`first`)) {
            element.style.zIndex = "0"
            setTimeout(() => {
                element.className = `card card-${index + 1} fiveth`
            }, 1500)
        }
        else if (classList.includes(`second`)) {
            element.className = `card card-${index + 1} first`
            element.style.zIndex = "1"


            setTimeout(() => {
                element.className = `card card-${index + 1} first active`
            }, 500)
        }
        else if (classList.includes(`third`)) {
            setTimeout(() => {
                element.className = `card card-${index + 1} second`
                element.style.zIndex = "2"
            }, 200)
        }
        else if (classList.includes(`fourth`)) {
            setTimeout(() => {
                element.className = `card card-${index + 1} third`
                element.style.zIndex = "3"
            }, 300)
        }
        else if (classList.includes(`fiveth`)) {
            setTimeout(() => {
                element.className = `card card-${index + 1} fourth`
                element.style.zIndex = "3"
            }, 500)
        }
    })
}

window.addEventListener("DOMContentLoaded", () => {
    rolar()
    setInterval(() => {
        rolar()
    }, 8000)
})

