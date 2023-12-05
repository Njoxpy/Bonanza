const prompt = require("prompt-sync")();

const deposit = () => {
    while (true) {
        const kiwangoChaKuweka = prompt("Weka kiasi unachotaka kuweka: ");
        const nambaIliyoKatikaFloat = parseFloat(kiwangoChaKuweka);

        if (isNaN(nambaIliyoKatikaFloat) || nambaIliyoKatikaFloat <= 0) {
            console.log('Kiasi ulichoweka sio sahihi!');
        } else {
            return nambaIliyoKatikaFloat;
        }
    }
};

const numberOfLines = () => {
    while (true) {
        const lines = prompt("Ingiza idadi ya mistari unayotaka kubetia kuanzia 1 hadi 3: ");
        const linesAmbazoZikoKatikaFloat = parseFloat(lines);

        if (isNaN(linesAmbazoZikoKatikaFloat) || linesAmbazoZikoKatikaFloat <= 0 || linesAmbazoZikoKatikaFloat > 3) {
            console.log('Idadi ya mistari sio sahihi!');
        } else {
            return linesAmbazoZikoKatikaFloat;
        }
    }
};

const getBet = (kiasiKilichopo, linesAmbazoZikoKatikaFloat) => {
    while (true) {
        const bet = prompt("Ingiza idadi ya bet unazotaka kuweka: ");
        const numberBet = parseFloat(bet);

        if (isNaN(numberBet) || numberBet <= 0 || numberBet > kiasiKilichopo / linesAmbazoZikoKatikaFloat) {
            console.log('Bet sio sahihi!');
        } else {
            return numberBet;
        }
    }
};

let kiasiKilichopo = deposit();
const linesAmbazoZikoKatikaFloat = numberOfLines();
const newBet = getBet(kiasiKilichopo, linesAmbazoZikoKatikaFloat);

// 2. Determine the number of lines they want to bet on
