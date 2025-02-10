// Función para actualizar el color y el valor hexadecimal
function updateColor() {
    const red = document.getElementById("redRange").value;
    const green = document.getElementById("greenRange").value;
    const blue = document.getElementById("blueRange").value;

    const color = `rgb(${red}, ${green}, ${blue})`;
    document.getElementById("colorBox").style.backgroundColor = color;

    const hexColor = rgbToHex(red, green, blue);
    document.getElementById("hexCode").textContent = hexColor;
}

// Convierte valores RGB a Hexadecimal
function rgbToHex(r, g, b) {
    return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;
}

function componentToHex(c) {
    const hex = parseInt(c).toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

// Convierte un código hexadecimal a RGB
function hexToRgb(hex) {
    const result = /^#([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})$/i.exec(hex);
    return result ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)] : [0, 0, 0];
}

// Asigna eventos de cambio a los controles de color
document.getElementById("colorPicker").addEventListener("input", (e) => {
    const color = e.target.value;
    const [r, g, b] = hexToRgb(color);
    document.getElementById("redRange").value = r;
    document.getElementById("greenRange").value = g;
    document.getElementById("blueRange").value = b;
    document.getElementById("redInput").value = r;
    document.getElementById("greenInput").value = g;
    document.getElementById("blueInput").value = b;
    updateColor();
});

// Vincula los sliders y inputs de número
["red", "green", "blue"].forEach(color => {
    document.getElementById(`${color}Range`).addEventListener("input", updateColor);
    document.getElementById(`${color}Input`).addEventListener("input", (e) => {
        document.getElementById(`${color}Range`).value = e.target.value;
        updateColor();
    });
});

// Inicializa el color al cargar
updateColor();

