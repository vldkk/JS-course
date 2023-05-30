function sayHello(user) {
    const date = new Date();
    const hours = date.getHours();
    let hello;
    switch (true) {
        case (hours >= 5 && hours < 11):
            hello = 'Good morning';
            break;
        case (hours >= 11 && hours < 17):
            hello = 'Good afternoon';
            break;
        case (hours >= 17 && hours < 23):
            hello = 'Good evening';
            break;
        default:
            hello = 'Good night';
    }
    return `${hello}, ${user}!`;
}
module.exports = { sayHello }