if (true) {
    console.log("its true");
}
// Умова в () автоматом перетворюєтсья в логічний тип.Якщо умова true, то виконується
//інструкція в {}

let fo = 4;
if (fo<5) {
    fo/=2;
    console.log(fo);
}

let z = 10;
if (z>15) {
    console.log("z більше 15")
} else if (z<5) {
    console.log('z менше 5');
} else if (z=10) {
    console.log('z = 10')
}
// дана конструкція це по суті switch

switch(z) {
    case z>15: console.log("z більше 15");break;
    case z<5: console.log("z менше 5");break;
    case z=10: console.log("z=10");break;
}
//break для того щоб завершився перебір після першого виконання умови case
//В switch можна добавити default який буде виконаний якщо ні один case не підійде
