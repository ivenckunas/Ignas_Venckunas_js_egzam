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

window.addEventListener('load', async () => {
    const carsArr = await getCarsData(ENDPOINT);
    createBrandCard(carsArr)
    console.log('carsArr ===', carsArr);
});


async function getCarsData() {
    const resp = await fetch(ENDPOINT);
    const data = await resp.json();
    return data
}

function createBrandCard(arr) {
    arr.forEach(element => {
        const userDiv = document.createElement('div');
        userDiv.className = "oneCard card"
        userDiv.innerHTML = `<p class="brand">${element.brand}</p> </br> <p class="models">
        ${element.models}</p>`
        outputContainer.append(userDiv)
    });
}
