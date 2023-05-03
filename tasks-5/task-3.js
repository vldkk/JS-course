(function () {
    class Person {
        constructor(name, surname) {
            this.name = name;
            this.surname = surname;
        }
        showFullName() {
            console.log(this.name + ' ' + this.surname);
        }
    };

    class Student extends Person {
        constructor(name, surname, year) {
            super(name, surname);
            this.year = year;
        }
        showFullName(middleName) {
            return this.name + ' ' + middleName + ' ' + this.surname;
        }
        showCourse() {
            return new Date().getFullYear() - this.year;
        }
    };

    const teach = new Person('Sasha', 'Kovaleva');
    teach.showFullName();
    const stud1 = new Student('Petro', 'Petrenko', 2019);
    console.log(stud1.showFullName('Petrovych')); // Petrenko Petro Petrovych
    console.log('Current course: ' + stud1.showCourse()); //Current course: 4
})();
