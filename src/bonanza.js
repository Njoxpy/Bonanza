const prompt = require("prompt-sync")();

const deposit = () => {
    // while tunatumia kulloop katika function yetu kama atakuwa anakosea hiyo kiwango kila muda tutakuwa tunamuuliza hadi pale atakapoweza
    while (true) {
        // mruhusu mtumiaji aweze kuingiza pesa(deposit)
        const kiwangoChaKuweka = prompt("Weka kiasi unachotaka kuweka: ");

        // badili kiwango kuwa katika float
        const nambaIliyoKatikaFloat = parseFloat(kiwangoChaKuweka);

        // angalia kama namba hiyo ni maneno ya ni chini ya sifuri(0)
        if (isNaN(nambaIliyoKatikaFloat) || nambaIliyoKatikaFloat <= 0) {
            console.log('Kiasi ulichoweka sio sahihi!');
        }
        else {
            return nambaIliyoKatikaFloat;
        }
    }
};

/* Tambua kiasi cha miswali ambayo user anataka kutumia */
const numberOfLines = () => {

    while (true) {
        // mruhusu mtumiaji aweze kuingiza pesa(deposit)
        const lines = prompt("Ingiza idadi ya mistari unayotaka kubetia kuanzia ya (1-3): ");

        // badili kiwango kuwa katika float
        const linesAmbazoZikoKatikaFloat = parseFloat(Math.floor(lines));

        // angalia kama namba hiyo ni maneno ya ni chini ya sifuri(0)
        if (isNaN(linesAmbazoZikoKatikaFloat) || linesAmbazoZikoKatikaFloat <= 0 || linesAmbazoZikoKatikaFloat > 3) {
            console.log('Idadi ya mistari sio sahihi!');
        }
        else {
            return linesAmbazoZikoKatikaFloat;
        }
    }
}

/* Kwanini nikitumia,nikijaza idadi ya mistari ambayo ipo katika decimal kati ya 1-3 bado inaleta majibu */
const kiwangoChaKuweka = deposit();
const linesAmbazoZikoKatikaFloat = numberOfLines();

// 2. Determine the number of lines they want to bet on
