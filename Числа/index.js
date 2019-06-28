let z = new Number(1000),
    x = 5000;
    
//метод toFixed() задає кількість значень у числа після коми
    console.log(typeof z);
    console.log(z.toFixed(3));
    console.log(x.toFixed(2));
    console.log(5 .toFixed(4));
/*методи можна примінювати не тільки до об'єктів, а і до простих змінних і літералів
завдяки інтепретатору який створює об 'єкти обгортки.Тобто напр.для let х=5000 при заюзанні 
методу toFixed() створюється об'єкт Number(5000), виконується toFixed(2), вертається значення 
і видаляється Number(5000) на льоту!
Через те прості значення можуть вести себе як об'экти!!! 
Тому Number() можна не юзать*/
    
    console.log('');
    console.log(10 <= 11);
    console.log(6 > 5);
    console.log(10 == '10'); //true
    console.log(10 === '10');//false
//Строга рівність === перевіряє не тільки значенння, а і тип даних,через те бажано == не юзать

    console.log('');
    console.log(Infinity*Infinity);
    console.log(Infinity/Infinity);
    console.log(5*Infinity);
    console.log(NaN === NaN);

//При використанні великих або не цілих чисел потрібно слідкуваати за точністю






