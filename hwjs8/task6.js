/// Завдання 6: Сортування масивів

const numbersList = [1, 10, 14, 2, 4, 5, 43, 34];
const copiedArray = numbersList.slice();

function sortingArr(a, b) {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
}

copiedArray.sort(sortingArr);
console.log(copiedArray);

