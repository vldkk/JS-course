// Створити Node.js http-сервер, який слухатиме запити на порт 5000 на локальній  машині. 
// Сервер повинен повертати сторінку, що містить ім’я поточного користувача операційної системи, тип операційної системи, 
// час роботи системи в хвилинах (використати модуль OS), поточну робочу директорію і назву файлу сервера (використати модуль path).
const http = require('http');
const fs = require('fs');
const os = require('os');

const { sayHello } = require('./personalmodule');

const host = 'localhost';
const port = 5000;

const requestListener = function (req, res) {
    let date = new Date();
    const content = `
        <html>
            <body>
                <p>Date of request: ${date}</p>
                <p>${sayHello(os.userInfo().username)}</p>
            </body>
        </html>`;

    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf8' });
    res.write(content);
    res.end();
};
const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
