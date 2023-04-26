// Є масив [5, “Limit”, 12, “a”, “3”, 99, 2, [2, 4, 3, “33”, “a”, “text”], “strong”, “broun”]
// Написати функцію яка виведе нові масиви які складаються із даних початкового масиву, але одного типу даних (не приводити тип стрінг в число навіть якщо там лише число)
// let  arr = [5, “Limit”, 12, “a”, “3”, 99, 2, [2, 4, 3, “33”, “a”, “text”], “strong”, “broun”];
// let arrNew = funcName(arr);
// /* 
// [
// [5, 12, 99, 2, 2, 4, 3],
// [”Limit”, “a”, “3”, “33”, “a”, “text”, “strong”, “broun”
// ] 
// */
(function () {
    // TODO: use object, more multipurpose
    function funcName(arr){
        let numArr = [];
        let strArr = [];

        arr.forEach((element) => {
            if (typeof element === 'number') {
                numArr.push(element);
            } else if (typeof element === 'string') {
                strArr.push(element);
            } else if (Array.isArray(element)) {
                let nestedArr = funcName(element);
                numArr.push(...nestedArr[0]);
                strArr.push(...nestedArr[1]);
            }
        });

        return [numArr, strArr];
    };
    let arr = [5, 'Limit', 12, 'a', '3', 99, 2, [2, 4, 3, '33', 'a', 'text'], 'strong', 'broun'];
    let arrNew = funcName(arr);
    console.log(arrNew);
})();