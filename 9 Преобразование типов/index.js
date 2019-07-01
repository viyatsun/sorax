//undefined i null рівні(==) тільки undefined i null
console.log(undefined==null);
console.log(undefined==true);
console.log(undefined==undefined);
console.log(null==null);
console.log(null==true);
console.log(null==false);


//Явные преобразование типов при помощи конструктов
console.log(Number('111'));
console.log(typeof(Number('222')));
//В число


console.log(String(22));
console.log(typeof(String('11')));
//В рядок

console.log(Boolean(10));
console.log(typeof(Boolean('Anime')));
//В логічний тип

//Швидке перетворення в логічний тип за допомогою логічного заперечення (!)
console.log(!!10);
console.log(typeof(!!5));


//Швидке перетворення в рядок
console.log(typeof(220 + ""));
//або так
let a = 22;
console.log(a.toString());


//В число
console.log(typeof(+'222'));
console.log(+true);
console.log(+false);

// За дoпомогою функції parseInt()
console.log(parseInt('11'));
console.log(typeof(parseInt("10")));
//parseInt ігнорує все крім цілих чисел
console.log(parseInt("111.222 Anime"));

//для чисел з комою parseFloat()
console.log(parseFloat('124.1111'));









