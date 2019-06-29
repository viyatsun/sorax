console.log('Zdarov Yobba'.length);
//length - длина строки


//Управляющие последовательности \
console.log("What a \"story\" Mark");
//   \\ - экранирование

console.log("Minecraft\
 игра\
 для отсталых");
// \ Дає можливість переносити рядок в коді на безліч рядків, без зміни при виконанні 

console.log("Хто б міг подумати,що \nКПІ - шарага")
// \n - переносить рядок 


console.log('Marvel' + " gavno");
// + складає строки(Конкатенация)

let ast = "Very well"
console.log(ast.charAt(0));
//charAt() - виводить символ з рядка під заданим індексом

console.log(ast.charAt(ast.length-1));
// Спосіб вивести останній символ рядка

console.log(ast.indexOf('we'));
//indexOf виводить індекс символа або символів,які були в пошуці 

console.log(ast.substring(3,8));
//substring() виводить символи в заданому діапазоні індексів

console.log(ast.replace("well","bad"));
//replace замінює символи

console.log(ast.split(" "));
//split в аргументи бере розділювач після цього розбиває рядок на масив!

console.log(ast.toUpperCase());
console.log(ast.toLowerCase());
// конвертера у верхній і нижній регістри 


//Рядки можуть вести себе як місіви через те замість charAt можна писати так:
console.log(ast[2]);







