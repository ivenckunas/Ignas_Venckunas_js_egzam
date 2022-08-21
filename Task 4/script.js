/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';
const outputContainer = document.getElementById('output');

async function init() {
    const carsArr = await getCarsData(ENDPOINT);
    createBrandCard(carsArr)
};

init()

async function getCarsData() {
    const resp = await fetch(ENDPOINT);
    const data = await resp.json();
    return data
}

function createBrandCard(arr) {
    arr.map(element => {
        const userDiv = document.createElement('div');
        userDiv.className = "oneCard card"
        userDiv.innerHTML = `<h3 class="brand">${element.brand}</h3>
        <ul class="models
        ">${createModelsList(element.models)}
        </ul>`
        outputContainer.append(userDiv)
    });
}

function createModelsList(arr) {
    const modelsList = arr.map((element) => `<li >${element}</li>`).join('')
    return modelsList
}