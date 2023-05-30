// Створити Node.js http-сервер, який слухатиме запити на порт 5000 на локальній  машині. 
// Сервер повинен повертати сторінку, що містить ім’я поточного користувача операційної системи, тип операційної системи, 
// час роботи системи в хвилинах (використати модуль OS), поточну робочу директорію і назву файлу сервера (використати модуль path).
const http = require('http');
const fs = require('fs');
const os = require('os');
const path = require('path');
const content = `<html><body><h1>System information</h1><p>Current user name: ${os.userInfo().username}</p><p>OS type: ${os.type()}</p><p>System work time: ${+(os.uptime() / 60).toFixed(3)} minutes</p><p>Current work directory: ${__dirname}</p><p>Server file name: ${path.basename(__filename)}</p></body></html>`;
const host = 'localhost';
const port = 5000;

fs.writeFile("./task-1.html", content, (err) => {
    if (err)
        console.log(err.message);
    else
        console.log("Content was writren successfully!");
});

const requestListener = function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf8' });
    fs.createReadStream('./task-1.html').pipe(res)
};
const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
