let date = new Date();
let hours = date.getHours();

if (hours >= 5 && hours < 11) {
    alert('Доброго ранку');
} else if (hours >= 11 && hours < 17) {
    alert('Доброго дня');
} else if (hours >= 17 && hours < 23) {
    alert('Доброго вечора');
} else {
    alert('Доброї ночі');
}

switch (true) {
    case (hours >= 5 && hours < 11):
        alert('Доброго ранку');
        break;
    case (hours >= 11 && hours < 17):
        alert('Доброго дня');
        break;
    case (hours >= 17 && hours < 23):
        alert('Доброго вечора');
        break;
    default:
        alert('Доброї ночі');
}

//this method just for task, not recommended :)
hours >= 5 && hours < 11 ?
    alert('Доброго ранку') : hours >= 11 && hours < 17 ?
        alert('Доброго дня') : hours >= 17 && hours < 23 ?
            alert('Доброго вечора') : alert('Доброї ночі');