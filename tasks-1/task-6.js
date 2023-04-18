const firstName = 'Vladyslava';
const lastName = 'Korogodova';
const studyGroup = 753;
const birthday = 2001;
const isMarried = false;
const data = [firstName, lastName, studyGroup, birthday, isMarried];
const typesInOrder = ['number', 'boolean', 'string'];

for (let type of typesInOrder) {
    for (let item of data) {
        if (typeof item === type) {
            console.log(item);
        }
    }
}

const nullVariable = null;
const undefinedVariable = undefined;

console.log(typeof nullVariable, typeof undefinedVariable);
