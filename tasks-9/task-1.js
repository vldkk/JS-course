// Для заданої сторінки знайдіть всі <h2> з класом head, зробіть для них зелений колір фону, 
// потім серед знайдених елементів знайдіть елементи з класом inner і поставте їм розмір шрифту 35px.
const head = $('h2.head');
head.css({ 'backgroundColor': '#006400' });
head.find('.inner').css({ 'fontSize': '35px' });