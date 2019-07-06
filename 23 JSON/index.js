/* JSON(JavaScript Object Notation) - це спосіб перетворення об'єкту в рядок для 
зручності зберігання і передачі інформації (напр. на серевер і навпаки)*/

// метод JSON.stringify() для перетворення об'єкту в рядок
let person = {
    name:"Kate",
    gender:"female",
    age:"22"
}


let stringPerson = JSON.stringify(person);
console.log(typeof(stringPerson));


// метод JSON.parse для перетвореня рядка в об'єкт
let objectPerson = JSON.parse(stringPerson);
console.log(typeof(objectPerson));


//метод JSON.stringify перевіряє в об'єкті наявність методу toJSON, який дозволяє 
//перетворювати в рядок тільки те що повертає toJSON. Це дозволяє перетворювати і передавати
//тільки окрему інформацію
