let lien = document.querySelector("#lienTrailer");

lien.addEventListener("click", () => {
    toggle();
})

let close = document.querySelector(".close");

close.addEventListener("click", () => {
    toggleInvert();
})

function toggle() {
    var trailer = document.querySelector(".trailer");
    trailer.classList.toggle('active');
}

function toggleInvert() {
    var trailer = document.querySelector(".trailer");
    trailer.classList.remove('active');
}