//function declaration statement
function nt(name) {
    console.log(arguments);
//arguments виводить всі передані аргументи у вигляді масиву хоча і є об'єктом
    return "Hello" + name;
    
}
console.log(nt(" Jack",21,22,"Katy"));



// Оскільки функції є об'эктами то їх можна передавати функціям в якості аргументу і також
// повертати функції з функцій 

