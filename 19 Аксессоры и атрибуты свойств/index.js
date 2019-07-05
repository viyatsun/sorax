//Суть даної теми в тому, щоб провіряти правильність 
//введених даних за допомогою set i get
let person = {
    name:"Nick",
    _age:20,
    get age(){
        return this._age;
    },
    set age(value){
        this._age = value < 0 ? 0 : value > 125 ? 125 : value;
    }
};
console.log(person.age);
person.age=35;
console.log(person.age);
person.age=-2;
console.log(person.age);
person.age=200;
console.log(person.age);


//Атрибути властивостей
console.log(Object.getOwnPropertyDescriptor(person,"name"));
console.log(Object.getOwnPropertyDescriptor(person,"age"));
