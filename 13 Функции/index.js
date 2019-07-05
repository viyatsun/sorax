//function declaration statement
function nt(name) {
    console.log(arguments);
//arguments виводить всі передані аргументи у вигляді масиву хоча і є об'єктом
    return "Hello" + name;
    
}
console.log(nt(" Jack",21,22,"Katy"));



// Оскільки функції є об'эктами то їх можна передавати функціям в якості аргументу і також
// повертати функції з функцій 

// анонимная самовызывающаяся функция
let lol = (function(name) {
    return "Hi "+ name;
}("guys"));
console.log(lol);
//Прікол в тому, що в змінну lol записується не функія,
//а значення функції
//зазвичай для таких фунцій не задають ім'я,якщо це не рекурсія 
