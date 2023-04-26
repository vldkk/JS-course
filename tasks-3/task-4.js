// Написати функцію compact() яка має приймати на вхід масив, а на вихід має повертати значення нового масиву без повторень.
// приклад:
// const arr = [5, 3, 4, 5,6,7,3];
// const arr2 = compact(arr);
// console.log(arr2) ; // [5,3,4,6,7]
(function () {
    function compact(arr) {
        const currentArr = [...arr];
        for (let i=0; i<currentArr.length-1; i++) {
            for (let j=i+1; j<currentArr.length; j++) {
                if (currentArr[i] === currentArr[j]) currentArr.splice(j,1);
            };
        };
        return currentArr;
    };
    const arr = [5, 3, 4, 5, 6, 7, 3];
    const arr2 = compact(arr);
    console.log(arr2); // [5,3,4,6,7]
})();

//or

(function () {
    function compact(arr) {
        const currentArr = [];
        
        arr.forEach(element => {
            if (!currentArr.includes(element)) {
                currentArr.push(element)
            }
        });

        return currentArr;
    };
    const arr = [5, 3, 4, 5, 6, 7, 3];
    const arr2 = compact(arr);
    console.log(arr2); // [5,3,4,6,7]
})();