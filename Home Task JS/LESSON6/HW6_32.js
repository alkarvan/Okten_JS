let taskX = '--- TASK';
const separator = '-------------------------';

// TASK 6-32 - start

// ----------------
//      описати колоду карт (від 6 до туза без джокерів)
//  - знайти піковий туз
//  - всі шістки
//  - всі червоні карти
//  - всі буби
//  - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

let deckOfCards = [
    { cardSuit: 'spade', value: '6', color: 'black' },
    { cardSuit: 'diamond', value: '6', color: 'red' },
    { cardSuit: 'heart', value: '6', color: 'red' },
    { cardSuit: 'clubs', value: '6', color: 'black' },
    { cardSuit: 'spade', value: '7', color: 'black' },
    { cardSuit: 'diamond', value: '7', color: 'red' },
    { cardSuit: 'heart', value: '7', color: 'red' },
    { cardSuit: 'clubs', value: '7', color: 'black' },
    { cardSuit: 'spade', value: '8', color: 'black' },
    { cardSuit: 'diamond', value: '8', color: 'red' },
    { cardSuit: 'heart', value: '8', color: 'red' },
    { cardSuit: 'clubs', value: '8', color: 'black' },
    { cardSuit: 'spade', value: '9', color: 'black' },
    { cardSuit: 'diamond', value: '9', color: 'red' },
    { cardSuit: 'heart', value: '9', color: 'red' },
    { cardSuit: 'clubs', value: '9', color: 'black' },
    { cardSuit: 'spade', value: '10', color: 'black' },
    { cardSuit: 'diamond', value: '10', color: 'red' },
    { cardSuit: 'heart', value: '10', color: 'red' },
    { cardSuit: 'clubs', value: '10', color: 'black' },
    { cardSuit: 'spade', value: 'jack', color: 'black' },
    { cardSuit: 'diamond', value: 'jack', color: 'red' },
    { cardSuit: 'heart', value: 'jack', color: 'red' },
    { cardSuit: 'clubs', value: 'jack', color: 'black' },
    { cardSuit: 'spade', value: 'queen', color: 'black' },
    { cardSuit: 'diamond', value: 'queen', color: 'red' },
    { cardSuit: 'heart', value: 'queen', color: 'red' },
    { cardSuit: 'clubs', value: 'queen', color: 'black' },
    { cardSuit: 'spade', value: 'king', color: 'black' },
    { cardSuit: 'diamond', value: 'king', color: 'red' },
    { cardSuit: 'heart', value: 'king', color: 'red' },
    { cardSuit: 'clubs', value: 'king', color: 'black' },
    { cardSuit: 'spade', value: 'ace', color: 'black' },
    { cardSuit: 'diamond', value: 'ace', color: 'red' },
    { cardSuit: 'heart', value: 'ace', color: 'red' },
    { cardSuit: 'clubs', value: 'ace', color: 'black' },
];
// - знайти піковий туз
console.log('- знайти піковий туз')
let findSpadeAce = deckOfCards.filter(value =>
    value.cardSuit === 'spade' && value.value === 'ace' )
console.log(findSpadeAce)

// - знайти всі шістки
console.log('- знайти всі шістки')
let findAll6card = deckOfCards.filter(value => value.value === '6' )
console.log(findAll6card)

// - всі червоні карти
console.log('- знайти всі червоні карти')
let findAllRedCard = deckOfCards.filter(value => value.color === 'red')
let sortRedCards = findAllRedCard.sort((a, b) => a.cardSuit.localeCompare(b.cardSuit))
console.log(sortRedCards)

// - всі буби
console.log('- знайти всі буби')
let findAllDiamondCard = deckOfCards.filter(value => value.cardSuit === 'diamond' )
console.log(findAllDiamondCard)

// - всі трефи від 9 та більше
console.log('- знайти всі трефи від 9 та більше')
let findAllClubsCard = deckOfCards.filter(value => value.cardSuit === 'clubs')
let newArrayOfCardGreaterThan9 = findAllClubsCard.splice(3, findAllClubsCard.length)
// console.log(findAllClubsCard);
console.log(newArrayOfCardGreaterThan9);
// console.log(deckOfCards);
console.log(separator);

// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }
console.log('- Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об"єкт')

let allCardsTo4Obj = deckOfCards.reduce((previousValue, currentValue) =>
{
    // варіант обходу через if ()
    // if (currentValue.cardSuit === 'spade') {
    //     previousValue.spades.push(currentValue)
    // }
    // умови відбору для об"єкту {currentValue} та заповнення {previousValue}
    switch (currentValue.cardSuit) {
        case 'clubs':
            previousValue.clubs.push(currentValue)
            break
        case 'diamond':
            previousValue.diamonds.push(currentValue)
            break
        case 'heart':
            previousValue.hearts.push(currentValue)
            break
        case 'spade':
            previousValue.spades.push(currentValue)
        break
    }
return previousValue
},
    // описує об"єкт {previousValue}
    {spades:[], diamonds:[], hearts:[], clubs:[]})

console.log(allCardsTo4Obj);
// ----------------
// document.write(separator);
// console.log(separator);
// TASK 6-32 - end

