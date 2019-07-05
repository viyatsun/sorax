//конструктор це об'єкт який створюється функцією new
let Person = function(name) {
    this.name = name;
};
let person = new Person("Rick");
console.log(person.name);
