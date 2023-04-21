function findMostFrequent(arr) {
    let maxCount = 0;
    let dominant = arr[0];

    arr.forEach(num => {
        const count = arr.filter(n => n === num).length;
        if (count > maxCount) {
            maxCount = count;
            dominant = num;
        }
    });

    return dominant;
}

function removeMostFrequent(arr) {
    const dominant = findMostFrequent(arr);
    return arr.filter(num => num !== dominant);
}

let arr = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5];
let data = findMostFrequent(arr);// 5
arr = removeMostFrequent(arr);
console.log(arr); // [4, 2, 1, 6, 3, 2]