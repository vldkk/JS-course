// Напишіть функцію findUnique(arr), яка приймає масив arr і перевіряє на унікальність його елементи. 
// Якщо всі елементи масиву унікальні (не мають дублів), то функція поверне true, інакше - false.
// findUnique([1, 2, 3, 5, 3]);  // => false
// findUnique([1, 2, 3, 5, 11]); // => true
(function () {
    function findUnique(arr) {
        let res;

        arr.forEach(element => {
            res = !arr.includes(element, arr.indexOf(element) + 1);
        });
        
        return res;
    };

    console.log(findUnique([1, 2, 3, 5, 3]));  // => false
    console.log(findUnique([1, 2, 3, 5, 11])); // => true
})();