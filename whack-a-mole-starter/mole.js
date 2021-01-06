// Write your JS here.
const moles = document.getElementsByClassName("wgs__mole-head");


function popUpRandomMole() {

    let moleIdx = Math.floor(Math.random() * 8);
    console.log(moleIdx);

    moles[moleIdx].classList.remove("wgs__mole-head--hidden");

    setTimeout(() => {
        hideMole(moles[moleIdx]);
    }, 3000)
}

function hideMole(mole) {
    mole.classList.add("wgs__mole-head--hidden");

    setTimeout(() => {
        popUpRandomMole();
    }, 1000)
}

window.addEventListener("DOMContentLoaded", (event) => {
    setTimeout(() => {
        popUpRandomMole();
    }, 0)

    moles.forEach(mole => {
        document.addEventListener("click", (event) => {
            mole.classList.add("wgs__mole-head--hidden");
        })
    });
});
