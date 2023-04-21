const payForCode = 50;
const penalty = 20;
const getCodeSalary = (linesCode) => Math.trunc(linesCode / 100) * payForCode;
let itemMenu = +prompt('Choose what to count: 1) how many lines of code are needed to be created?; 2) how many times can you be late?; 3) your salary. ');
switch (itemMenu) {
    case 1: {
        let dreamSalary = +prompt('What salary do you want?');
        let lateArrivals = +prompt('How late are you?');
        alert(`You need to create ${Math.ceil(((dreamSalary + Math.trunc(lateArrivals / 3) * penalty) / payForCode)) * 100} lines of code.`);
        break;
    }

    case 2: {
        let linesCode = +prompt('How many lines of code have you created?');
        let dreamSalary = +prompt('What salary do you want?');
        let codeSalary = getCodeSalary(linesCode);
        codeSalary > dreamSalary ? alert(`You can be late ${Math.trunc((codeSalary - dreamSalary) / 20) * 3 + 2} times`) : alert('You can be late 2 times.');
        break;
    }

    case 3: {
        let linesCode = +prompt('How many lines of code have you created?');
        let lateArrivals = +prompt('How late are you?');
        let codeSalary = getCodeSalary(linesCode);
        let finalSalary = codeSalary - Math.trunc(lateArrivals / 3) * 20;
        finalSalary > codeSalary ? alert(`You get ${finalSalary}$!`) : alert('You don`t get money, work better, good luck!');
        break;
    }

    default:
        alert('Incorrect data.')
}