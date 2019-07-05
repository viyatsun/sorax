//Для того щоб не писать однакові об'экти багато разів
//використовуються прототипи
//(по суті клон об'экта з тими ж властивостями)
//для створення прототипа є Object.create()
let Person = {
    constructor: function(name,age,gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        return this;
    },
greet:function(){
    console.log(
        "Hi,my age is "+ this.age);    
    }
};
let person1, person2;
person1 = Object.create(Person).constructor("Kayle",25,"female");
console.log(person1.name);
person2 = Object.create(Person).constructor("John",34,"male");
console.log(person2.age);
