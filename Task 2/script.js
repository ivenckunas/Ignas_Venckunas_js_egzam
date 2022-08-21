/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
'use strict';

const clickBtn = document.getElementById('btn__element');
const clickCounter = document.getElementById('btn__state');
const resetBtn = document.querySelector("button")
let num = 0

clickBtn.addEventListener("click", () => {
    num++
    clickCounter.textContent = num
})

resetBtn.addEventListener("click", () => {
    num = 0
    clickCounter.textContent = 0
})