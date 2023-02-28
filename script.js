
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
        container.appendChild(color)

    }
}
generatePalette();
refreshBtn.addEventListener("click", generatePalette);