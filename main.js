// 1. deposit some money
// 2. no of lines bet on
// 3. collect a bet ammount
// 4. spin the slot machine
// 5. check if the user won
// 6. give the user their winings
// 7. play again

const prompt = require('prompt-sync')()

const deposit = () => {
    const depositAmmount = parseFloat(prompt('Enter a deposit ammount: '))

    if (isNaN(depositAmmount) || depositAmmount <= 0) {
        console.log('Invalid deposit, try again.');
    }
};

deposit()