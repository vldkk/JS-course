let area = window.open('', 'Task 1', 'width=300,height=300');

setTimeout(function () {
    area.resizeTo(500, 500);
}, 2000);

setTimeout(function () {
    area.moveTo(200, 200);
}, 4000);

setTimeout(function () {
    area.close();
}, 6000);