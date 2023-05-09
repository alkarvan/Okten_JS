// let taskX = '--- TASK';
const separator = '-------------------------';

// TASK 3-4 - start
// console.log(`${taskX} 3_1 ---`);
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
let filterArrStatusTrue = [];
let filterArrStatusFalse = [];
let filterArrAgeMore30 = [];
for (const usersKey in users) {
    if (users[usersKey].status) {
        filterArrStatusTrue[filterArrStatusTrue.length] = users[usersKey];
    } else {
        filterArrStatusFalse[filterArrStatusFalse.length] = users[usersKey];
    }
    if (users[usersKey].age > 30) {
        filterArrAgeMore30[filterArrAgeMore30.length] = users[usersKey];
    }
}

document.write('--- Users with status = TRUE');
document.write('<ul>');
for (const filterArrStatusTrueKey in filterArrStatusTrue) {
    document.write('<li>' + filterArrStatusTrue[filterArrStatusTrueKey].name + ' - status:'
        + filterArrStatusTrue[filterArrStatusTrueKey].status + '<br>' + '</li>');
}
document.write('</ul>');
document.write(separator);

document.write('<br> --- Users with status = FALSE');
document.write('<ul>');
for (const filterArrStatusFalseKey in filterArrStatusFalse) {
    document.write('<li>' + filterArrStatusFalse[filterArrStatusFalseKey].name + ' - status:'
        + filterArrStatusFalse[filterArrStatusFalseKey].status + '<br>' + '</li>');
}
document.write('</ul>');
document.write(separator);

document.write('<br> --- Users with Age > 30');
document.write('<ul>');
for (const filterArrAgeMore30Key in filterArrAgeMore30) {
    document.write('<li>' + filterArrAgeMore30[filterArrAgeMore30Key].name + ' - age:'
        + filterArrAgeMore30[filterArrAgeMore30Key].age + '<br>' + '</li>');
}
document.write('</ul>');
document.write(separator);


// console.log(separator);
// TASK 3-4 - end

