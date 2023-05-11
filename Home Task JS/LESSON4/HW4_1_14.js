let taskX = '--- TASK';
const separator = '-------------------------';

// TASK 4-14 - start

// ----------------
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
document.write(`${taskX} 4-14 <br>(Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)<br>`);

let sumUAH = +prompt('Input sumUAH:', '0');
let exchangeCurrency = prompt('Input currency:', 'USD');
let arrExchange = [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}];

function exchange(sumUAH, currencyValues, exchangeCurrency) {
    for (const currencyValuesElement of currencyValues) {
        for (const currencyValuesElementKey in currencyValuesElement) {
            if (currencyValuesElement[currencyValuesElementKey] === exchangeCurrency) {
                let getValue = {
                    getExchangeValue: function () {
                        return currencyValuesElement.value;
                    },
                    getSum: function () {
                        return sumUAH / currencyValuesElement.value;
                    },
                    getCurrency: function () {
                        return true;
                    }
                }
                return getValue;
            }
            // else {
            //     let getValue = {
            //         getCurrency: function () {
            //             return false;
            //         }
            //     }
            //     return getValue;
            // }
        }
    }
}

obj = exchange(sumUAH, arrExchange, exchangeCurrency);
// if(obj.getCurrency()){
    exchangeRate = obj.getExchangeValue();
    sumCurrency = obj.getSum();
    document.write(`<br>При обміні ${sumUAH} UAH Ви отримаєте ${sumCurrency} ${exchangeCurrency} <br>по курсу 1 ${exchangeCurrency} = ${exchangeRate} UAH.`);
// }else{document.write(`<br>Нажаль немає пропозиції для обміну валюти: ${exchangeCurrency}`)}

// document.write(separator);

// ----------------
// console.log(separator);
// TASK 4-12 - end

