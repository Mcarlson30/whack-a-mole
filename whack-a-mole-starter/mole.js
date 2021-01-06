// Write your JS here.
// window.addEventListener('DOMContentLoaded', () => {

//     setInterval(() => {
//         const moleHeads = document.querySelectorAll('.wgs__mole-head');
//         for (let moleHead of moleHeads) {
//             moleHead.classList.toggle('wgs__mole-head--hidden');
//         }
//     }, 1000);

// });

function popUpRandomMole() {
    let moles = document.getElementsByClassName("wgs__mole-head");

    let moleIdx = Math.floor(Math.random() * 8);
    console.log(moleIdx);

    moles[moleIdx].classList.remove("wgs__mole-head--hidden");

    setTimeout(() => {
        hideMole(moles[moleIdx]);
    }, 1000)
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
});
