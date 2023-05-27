// 1. deposit some money
// 2. no of lines bet on
// 3. collect a bet ammount
// 4. spin the slot machine
// 5. check if the user won
// 6. give the user their winings
// 7. play again

const prompt = require('prompt-sync')()

const deposit = () => {

    while(true) {
        const depositAmmount = parseFloat(prompt('Enter a deposit ammount: '))

        if (isNaN(depositAmmount) || depositAmmount <= 0) {
            console.log('Invalid deposit, try again.');
        } else {
            return depositAmmount
        }
    }
};

const getnumberOfLines = () => {
    while(true) {
        const numberOfLines = parseFloat(prompt('Enter the number of lines to bet (1-3): '))

        if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
            console.log('Invalid number of lines, please try again.');
        } else {
            return numberOfLines
        }
    }
}

const depositAmmount = deposit()
const numberOfLines = getnumberOfLines()