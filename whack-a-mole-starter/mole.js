// Write your JS here.

function popUpRandomMole() {
    let moles = document.querySelectorAll(".wgs__mole-head:not(.wgs__mole-head--whacked)");

    if (!moles.length) return alert("You Won!");


    let moleIdx = Math.floor(Math.random() * moles.length);

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

    let moles = document.getElementsByClassName("wgs__mole-head");
    let molesArr = Array.from(moles);
    molesArr.forEach(mole => {
        mole.addEventListener("click", (event) => {
            mole.classList.add("wgs__mole-head--whacked", "wgs__mole-head--hidden");

        })
    });
});
