function mapBuilder(keys, values) {
    if (keys.length !== values.length) {
        throw new Error("The number of keys and values must be equal.");
    }
    return new Map(keys.map((key, index) => [key, values[index]]));
};

let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];
let map = mapBuilder(keys, values);

console.log(map.size); // 4
console.log(map.get(2)); // "span"