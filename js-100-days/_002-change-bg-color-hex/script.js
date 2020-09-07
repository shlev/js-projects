const btn = document.querySelector("button");
const hexText = document.querySelector("header span")
const container = document.querySelector(".container");
const hexDigits = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
btn.addEventListener('click', updateColor);

function updateColor() {
    const hexColor = getHexColor();
    hexText.innerHTML = hexColor;
    container.style.backgroundColor = hexColor;

}

function getHexColor() {
    let r = "#";
    for (let i=0; i<6 ; i++) {
        let digit = Math.floor(Math.random()* 16);
        r = r.concat(hexDigits[digit]);
    }

    return r;
}