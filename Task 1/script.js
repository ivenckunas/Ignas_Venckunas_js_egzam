/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

'use strict';


const formEl = document.forms[0]
const inputEl = document.getElementById('search');
const outputEl = document.getElementById('output');

formEl.addEventListener("submit", (e) => {
    e.preventDefault()
    createConvertedList(inputEl.value)
})

function createConvertedList(inputValue) {
    outputEl.textContent = ""
    outputEl.insertAdjacentHTML("afterbegin", `
    <div class="results card">
    <h2> Results: </h2>
    <p><span>${inputValue}</span>kg pavertus i svarus(lb) gausime <span>${(inputValue * 2.2046).toFixed(2)}</span>lb</p>
    <p><span>${inputValue}</span>kg pavertus i gramus(g) gausime <span>${(inputValue / 0.0010000).toFixed(2)}</span>g</p>
    <p><span>${inputValue}</span>kg pavertus i uncijas(oz) gausime <span>${(inputValue * 35.274).toFixed(2)}</span>oz</p>
    </div>
` )
}

