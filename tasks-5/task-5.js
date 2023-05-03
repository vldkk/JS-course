(function () {
    class Worker {
        #experience;
        constructor(fullName, dayRate, workingDays) {
            this.fullName = fullName;
            this.dayRate = dayRate;
            this.workingDays = workingDays;
            this.#experience = 1.2;
        }
        showSalary() {
            console.log(`${this.fullName} salary: ${this.dayRate * this.workingDays}.`);
        }
        showSalaryWithExperience() {
            console.log(`${this.fullName} salary: ${this.salaryWithExperience}.`);
        }
        get salaryWithExperience() {
            return this.dayRate * this.workingDays * this.#experience;
        }
        get experience() {
            return this.#experience;
        }
        set experience(value) {
            this.#experience = value;
        }
        static sortWorkersBySalary(workers) {
            return [...workers].sort((a, b) => a.salaryWithExperience > b.salaryWithExperience ? 1 : -1);
        }
    };

    let worker1 = new Worker('John Johnson', 20, 23);
    console.log(worker1.fullName);
    worker1.showSalary();
    console.log('New experience: ' + worker1.experience);
    worker1.showSalaryWithExperience();
    worker1.experience = 1.5;
    console.log('New experience: ' + worker1.experience);
    worker1.showSalaryWithExperience();
    let worker2 = new Worker('Tom Tomson', 48, 22);
    let worker3 = new Worker('Andy Ander', 29, 23);
    const workers = [worker1, worker2, worker3];
    worker2.experience = 1.5;
    worker3.experience = 1.5;
    console.log('Sorted salary:');
    [...workers]
        .sort((a, b) => a.salaryWithExperience > b.salaryWithExperience ? 1 : -1)
        .forEach(worker => console.log(`${worker.fullName}: ${worker.salaryWithExperience}`));
    let worker4 = new Worker('Katty Johnson', 35, 21);
    worker4.experience = 1.5;
    console.log('Dynamic sorted salary:');
    Worker.sortWorkersBySalary([...workers, worker4]).forEach(worker => console.log(`${worker.fullName}: ${worker.salaryWithExperience}`));
})();