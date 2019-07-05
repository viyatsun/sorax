/* Объекты це набір властивостей типу:
{
    ім'я:значення
}
*/

let a = {
    name:"Jack",
    gender:"male",
    profession:"architect",
    greeting: function(){
        return "Hello";
    }
}
//функція також може бути в ролі властивості


// можна міняти властивості або добавляти нові "на льоту"
a.hoby="to build houses";

//Доступ до властивостей(до полів) об'єкта:
console.log(a.name);
console.log(a.gender);
console.log(a.greeting());
console.log(a);






