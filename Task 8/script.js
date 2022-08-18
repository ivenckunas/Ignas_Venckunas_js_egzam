/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */


function Calculator(a, b) {
    this.sum = function () {
        const sum = a + b
        console.log('sum ===', sum);
    }

    this.sub = function () {
        const sub = a - b
        console.log('sub ===', sub);
    }

    this.mult = function () {
        const mult = a * b
        console.log('mult ===', mult);
    }

    this.div = function () {
        const div = a / b
        console.log('div ===', div);
    }
}


const num = new Calculator(8, 5)
num.sum()
num.sub()
num.mult()
num.div()