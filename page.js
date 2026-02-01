
const cards = document.querySelectorAll(".card")
const wrapper = document.querySelector(".wrapper")
const counterElement = document.querySelector(".counter")
let counter = 0

const progressBar = document.querySelector(".status .progress")
const locationDetails = document.querySelector(".content-details .location")
const title = document.querySelector(".content-details .title")
const description = document.querySelector(".content-details .description")
const contents = document.querySelector(".content-details")

const data = [
    {
        location: "Switzerland Alps",
        title: `SAINT ANTONIEN`,
        description: `Tucked away in the Switzerland Alps, Saint Antönien offers an idyllic retreat for those seeking tranquility and adventure alike. It's a hidden gem for backcountry skiing in winter and boasts lush trails for hiking and mountain biking during the warmer months.`
    },
    {
        location: "Japan Alps",
        title: `NANGANO PREFECTURE`,
        description: `Nagano Prefecture, set within the majestic Japan Alps, is a cultural treasure trove with its historic shrines and temples, particularly the famous Zenkō-ji. The region is also a hotspot for skiing and snowboarding, offering some of the country's best.`
    },
    {
        location: "Sahara Desert - Morocco",
        title: `MARRAKECH MEROUGA`,
        description: `The journey from the vibrant souks and palaces of Marrakech to the tranquil, starlit sands of Merzouga showcases the diverse splendor of Morocco. Camel treks and desert camps offer an unforgettable immersion into the nomadic way of life.`
    }
    , {
        location: "Sierra Nevada - USA",
        title: `YOSEMITE
NATIONAL PARAK`,
        description: `Yosemite National Park is a showcase of the American wilderness, revered for its towering granite monoliths, ancient giant sequoias, and thundering waterfalls. The park offers year-round recreational activities, from rock climbing to serene valley.`
    },
    {
        location: "Tarif Spain",
        title: `LOS LANCES
BEACH`,
        description: `Los Lances Beach in Tarifa is a coastal paradise known for its consistent winds, making it a world-renowned spot for kitesurfing and windsurfing. The beach's long, sandy shores provide ample space for relaxation and sunbathing, with a vibrant atmosphere of beach bars and cafes.`
    },
    {
        location: "Cappadocia - Turkey",
        title: `Göreme Valley`,
        description: `Göreme Valley in Cappadocia is a historical marvel set against a unique geological backdrop, where centuries of wind and water have sculpted the landscape into whimsical formations. The valley is also famous for its open-air museums, underground cities, and the enchanting experience of hot air ballooning.`
    },

]

function rolar() {
    cards.forEach((element, index) => {
        const classList = element.className
        if (classList.includes(`first`)) {
            element.style.zIndex = "0"
            setTimeout(() => {
                element.className = `card card-${index + 1} sixth`
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
        else if (classList.includes("sixth")) {
            setTimeout(() => {
                element.className = `card card-${index + 1} fiveth`
                element.style.zIndex = "3"
            }, 500)
        }
    }
    )

    if (counter == 5) {
        counter = 0
    }
    else {
        counter++
    }


    contents.classList.add("animate")

    setTimeout(() => {
        description.innerHTML = data[counter].description
        title.textContent = data[counter].title
        locationDetails.textContent = data[counter].location
    }, 400)

    setTimeout(() => {
        contents.classList.remove("animate")
    }, 1200)

    counterElement.innerHTML = counter + 1

    progressBar.style.width = `${(100 * (counter + 1)) / 6}%`
}

window.addEventListener("DOMContentLoaded", () => {

    rolar()
    setInterval(() => {
        rolar()
    }, 8200)
})

