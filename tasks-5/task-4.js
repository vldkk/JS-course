(function () {
    class Marker {
        constructor(color, amount) {
            this.color = color;
            this.amount = amount;
        }
        print(line) {
            let printLine = '';
            for (let char of line) {
                if (char !== ' ' && this.amount !== 0) {
                    printLine += char;
                    this.amount -= .5;
                } else {
                    printLine += ' ';
                }
            }
            console.log(`%c${printLine.trim()}`, `color:${this.color}`);
        }
    };

    class MarkerRefills extends Marker {
        refuel() {
            this.amount = 100;
        }
    };

    const text1 = new Marker('blue', 2);
    const text2 = new MarkerRefills('red', 5);
    text1.print('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
    text2.print('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
    text2.refuel();
    text2.print('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
})();