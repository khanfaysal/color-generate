// fixed navbar
const navbar = document.getElementById("nav");
window.addEventListener('scroll', function () {
    const scrollHeight = window.scrollY;
    const navHeight = navbar.getBoundingClientRect().height;

    if (scrollHeight > navHeight) {
        navbar.classList.add('fixed-nav');
    } else {
        navbar.classList.remove('fixed-nav');
    }
    console.log(window.scrollY);
})
// navbar js start
const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');


navToggle.addEventListener('click', function () {
    links.classList.toggle('show-links')
})
// navbar js end



// color js start
const container = document.querySelector(".container")
const refreshBtn = document.querySelector(".refresh-btn");

// generate random color
const maxPaletteBoxes = 100;

const generatePalette = () => {
    container.innerHTML = ""; //clear the container
    for (let i = 0; i < maxPaletteBoxes; i++) {
        let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
        randomHex = `#${randomHex.padStart(6, "0")}`

        // creating a new li element and insert it to the container
        const color = document.createElement("li");
        color.classList.add("color");
        color.innerHTML = `<div class="rect-box" style="background: ${randomHex}"></div>
                           <span class="hex-value">${randomHex}</span>`

        // adding click event to current li element to copy color

        color.addEventListener("click", () => copyColor(color, randomHex))
        container.appendChild(color)

    }
}
generatePalette();

// copy color function chunk
const copyColor = (elem, hexVal) => {
    const colorElement = elem.querySelector(".hex-value");
    navigator.clipboard.writeText(hexVal).then(() => {
        colorElement.innerText = "Copied";
        setTimeout(() => {
            colorElement.innerText = hexVal;
        }, 1000);
    }).catch(() => alert("'Failed to copy color!'"));
}
refreshBtn.addEventListener("click", generatePalette);
// color js end