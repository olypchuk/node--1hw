# node--1hw
1.Получаем и выводим весь список контактов в виде таблицы (console.table)
node index.js --action list https://skr.sh/sGIxkvham5b?a

2. Получаем контакт по id
node index.js --action get --id 5 https://skr.sh/sGIbmIwZwFC?a

3.# Добавялем контакт
node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22 https://skr.sh/sGIZHIe37vt?a

4.# Удаляем контакт
node index.js --action remove --id=7 https://skr.sh/sGI1eU3u0nW?a 
