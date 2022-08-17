/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';
const showUsersBtn = document.getElementById('btn');
const outputContainer = document.getElementById('output');
const message = document.getElementById('message');


showUsersBtn.addEventListener("click", async () => {
    const cardsArr = await getCardData(ENDPOINT);
    createOneUserCards(cardsArr)
    message.style.display = "none"
})


async function getCardData() {
    const resp = await fetch(ENDPOINT);
    const data = await resp.json();
    return data
}

function createOneUserCards(arr) {
    arr.forEach(element => {
        const userDiv = document.createElement('div');
        userDiv.className = "oneCard"
        userDiv.innerHTML = `<img src="${element.avatar_url}" alt="${element.login} image">
        <p>${element.login}</p>`
        outputContainer.append(userDiv)
    });
}
