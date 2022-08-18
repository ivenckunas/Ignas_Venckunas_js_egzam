/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */

class Movie {
    constructor(title, director, budget) {
        this.title = title;
        this.director = director;
        this.budget = budget;
    }
    wasExpensive() {
        const bud = this.budget > 100000000 ? true : false
        console.log('Budget is more than 100 millions ===', bud);
        return bud
    }
}

const starWars = new Movie("A New Hope", "George Lucas", 11000000)
console.log('starWars ===', starWars);
starWars.wasExpensive();
