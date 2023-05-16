let taskX = '--- TASK';
// const separator = '-------------------------';

// TASK 5-14 - start

// ----------------
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
document.write(`${taskX} 5-14 <br>(Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)<br>`);

let sumUAH = +prompt('Input sumUAH:', '0');
let exchangeCurrency = prompt('Input currency:', 'USD');
let arrExchange = [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}];

let exchange = (exchangeCurrency, obj) => {
    if (obj.currency === exchangeCurrency) {
        return obj.value
    } else {
        return false
    }
}
for (const arrExchangeKey in arrExchange) {
    if (exchange(exchangeCurrency, arrExchange[arrExchangeKey])) {
        document.write(`<br>При обміні ${sumUAH} UAH Ви отримаєте ${sumUAH / exchange(exchangeCurrency, arrExchange[arrExchangeKey])} ${exchangeCurrency}`);
    }
}

// ----------------
// console.log(separator);
// TASK 5-14 - end

