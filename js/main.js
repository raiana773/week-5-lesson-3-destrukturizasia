// ? примеры с массивом
// let list = [
//     'milk',
//     'sugar',
//     'salt',
//     'butter',
//     'bread'
// ]
// // console.log(list);
// // console.log(list[0]);
// // console.log(list[1]);
// // console.log(list[2]);

// let [first, second, ...other] = list;
// console.log(first, second, other);

// let arr = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8]
// ]

// // console.log(arr)
// // let [[a, b, c, d], newArr] = arr;
// // console.log(a, b, c, d, newArr);

// let [[a, b, c, d], [newArr, ...other]] = arr;
// console.log(a, b, c, d, newArr, other);


// let arr = [
//     [1, 2, 3, 4, [9, 0]],
//     [5, 6, 7, 8]
// ]

// let [[a, b, c, d, [nine, zero]], [newArr, ...other]] = arr;
// console.log(a, b, c, d, newArr, other);
// console.log(nine, zero);



// ? примеры с объектом
// let person = {
//     age: 30,
//     name: 'john',
//     lastName: 'snow'
// };
// // let name = person.name;
// // let age = person.age;
// // let lastName = person.lastName
// // console.log(name, age, lastName)
// // если сделать то нечего не поменяется
// let {age, name, lastName} = person;
// console.log(name, age, lastName);

// ? пример с вложенным обеъкетом
// let obj1 = {
//     subObj: {
//         name: 'jack'
//     }
// };
// let {subObj: {name}} = obj1;
// console.log(name);

// ? примеры работы с объектом и с массивом (в массиве будет еще один объект)
// let obj = {
//     arr: [
//         {
//             name: 'makers'
//         }
//     ]
// };
// let {arr: [{name}]} = obj;
// console.log(name);

// ? примеры с функциями
// function foo(obj){
//     console.log(obj.name);
// }

// let person = {
//     name: 'makers',
//     lastName: 'bootcamp',
//     age: 22
// };
// foo(person)
//  можно сделать и нечего не поменяется

// function foo({name}){
//     console.log(name);
// }

// let person = {
//     name: 'makers',
//     lastName: 'bootcamp',
//     age: 22
// };
// foo(person)

// function foo({name, age}){
//     console.log(name);
//     console.log(age)
// }

// let person = {
//     name: 'makers',
//     lastName: 'bootcamp',
//     age: 22
// };
// foo(person)


// ? дан массив и если вы хотите первые три элемента пропустить 
// let arr = [1, 2, 3, 4, 5];
// let [,,,four] = arr;
// console.log(four);       //? 4

// lt arr = [1, 2, 3, 4, 5];
// let [,,,four, five] = arr;
// console.log(four, five);    // ? 4, 5

// ? spread - Оператор
// function foo(a){
//     console.log(a);
// }
// let arr = [1, 2, 3, 4, 5];
// foo(arr);   // ? [1, 2, 3, 4, 5]
// foo(...arr)  // ? 1


// function foo(a, b, c, d, e){
//     console.log(a, b, c, d, e);
// }
// let arr = [1, 2, 3, 4, 5];
// foo(...arr)  // ? 1 2 3 4 5

// function foo(a, b, c){
//     console.log(a, b, c);
// }
// let arr = [1, 2, 3, 4, 5];
// foo(...arr)  // ? 1 2 3 


// let a = {
//     age: 20
// };

// let b = {
//     age: 20
// };

// console.log(a === b);  // ? false


// ? объекты это ссылочные типы данных,
// let a = {
//     age: 20
// };
 
// let b = a;
// b.age = 30;
// console.log(a, b);  // ? {age: 30} {age: 30}
// console.log(a === b) // ? true

// let a = {
//     age: 20
// };
// let b = {...a};
// b.age = 30;
// console.log(a, b);  // ? {age: 20} {age: 30}
// console.log(a === b)  // ? false


// let obj1 = {
//     name: 'kani',
//     color: 'yellow'
// };

// let obj2 = {
//     lastName: 'east'
// };

// let {color} = obj1;
// let newObj = {color, ...obj2}
// console.log(newObj);  // ? {color: 'yellow', lastName: 'east'} 


// let obj1 = {
//     name: 'kani',
//     color: 'yellow'
// };

// let obj2 = {
//     lastName: 'east'
// };

// let {color, name} = obj1;
// let newObj = {color, name, ...obj2}
// console.log(newObj);  // ? {color: 'yellow', name: 'kani', lastName: 'east'}

// let obj1 = {
//     name: 'kani',
//     color: 'yellow'
// };

// let obj2 = {
//     lastName: 'east',
//     color: 'pink'
// };

// let {color, name} = obj1;
// let newObj = {...obj1, ...obj2}
// console.log(newObj);   // ? {name: 'kani', color: 'yellow', lastName: 'east'}

// let obj = {
//     name: 'kani',
//     age: 22,
//     position: [
//         'mentor',
//         'backend-developer',
//         'frontend-developer',
//         'blogger'
//     ],
//     djg: {
//         name: 'oreo',
//         age: 2
//     }
// };
// let {name, age} = obj;
// console.log(name, age); 


// let obj = {
//     name: 'kani',
//     age: 22,
//     positions: [
//         'mentor',
//         'backend-developer',
//         'frontend-developer',
//         'blogger'
//     ],
//     dog: {
//         name: 'oreo',
//         age: 2
//     }
// };
// let {name, age} = obj;

// ? деструктуризация общирных объектов
// let {
//     name,
//     age,
//     positions: [
//         firstPositions,
//         secondPositions,
//         ...otherPositions
//     ],
//     dog: {
//         name: dogName,
//         age: dogAge
//     }
// } = obj;

// console.log(name, age, firstPositions, secondPositions, otherPositions, dogName, dogAge);  // ? kani 22 mentor backend-developer (2) ['frontend-developer', 'blogger'] oreo 2

// let obj = {
//     name: 'kani',
//     age: 22,
//     positions: [
//         'mentor',
//         'backend-developer',
//         'frontend-developer',
//         'blogger'
//     ],
//     dog: {
//         name: 'oreo',
//         age: 2
//     }
// };
// let {name, age} = obj;

// function sayHello(obj) {
//     console.log(`
//     Hello, my name is ${obj.name} 
//     I am ${obj.age} y.o.
//     I have a dog ${obj.dog.name}
//     `);
// }

// sayHello(obj)  // ? Hello, my name is kani 
               // ? I am 22 y.o.
               // ? I have a dog oreo

            //   можно и так будет то же самое

// function sayHello({name, age, dog: {name: dogName}}) {
// console.log(`
//   Hello, my name is ${name} 
//   I am ${obj.age} y.o.
//   I have a dog ${dogName}
//  `);
// }    
// sayHello(obj)  // ? Hello, my name is kani 
               // ?  I am 22 y.o.
               // ?  I have a dog oreo



// ! destructuring  
// let names = ['anna', 'harry', 'albert'];
// let a = names[0];
// let b = names[1];
// let c = names[2];

// let names = ['anna', 'harry', 'albert'];
// let [a, b, c] = names;
// console.log(a, b, c);



// let a;
// let b;
// let c;
// let names = ['anna', 'harry', 'albert'];
// [a, b, c] = names;
// console.log(a, b, c);


// let names = ['anna', 'harry', 'albert'];
// let [,,name3] = names;
// console.log(name3);   // ? albert


// let names = ['anna', 'harry', 'albert'];
// let [name1, name2, name3, name4] = names;
// console.log(name4);   // ? undefined

// let names = ['anna', 'harry', 'albert'];
// let [name1, name2, name3 = 'anonim', name4 = 'anonim'] = names;
// console.log(name3, name4);  // ? albert anonim

//  ! spread - используется при поверхностном копировании
// let names = ['anna', 'harry', 'albert'];
// let newName = [...names]
// console.log(names);
// console.log(newName); 

//  ! rest opetator - для destructuring 
// let names = ['anna', 'harry', 'albert'];
// let [name1, ...other] = names;
// console.log(other);  // ? ['harry', 'albert']


// let names = ['anna', 'harry', 'albert'];
// let [name1,name2, ...other] = names;
// console.log(other);   // ? ['albert']
// console.log(name1, name2);  // ? anna harry


// let names = ['anna', 'harry', 'albert', 'jack', 'nick'];
// let lastName = names[names.length -1]
// console.log(lastName);    // ? nick

// ?  вытаскивает по ключам, неупорядочный список
// let obj = {
//     name: 'dina',
//     age: 20,
//     skills: ['js', 'react']
// }
// let {age, name, skills} = obj;
// console.log(age, name, skills);


// let obj = {
//     name: 'dina',
//     age: 20,
//     skills: ['js', 'react']
// }
// let {age, name, skills: [skill, skill2]} = obj;
// console.log(age, name, skill, skill2);

//  ! поверхностное копирование (spread operator) 
// let obj1 = {
//     name: 'dina',
//     age: 20,
//     skills: ['js', 'react']
// }

// let obj2 = {...obj1}

// obj2.name = 'kate'
// obj2.skills.push('html/css')
// console.log(obj1);
// console.log(obj2);



// ! глубокое коптрование
// let obj1 = {
//     name: 'dina',
//     age: 20,
//     skills: ['js', 'react']
// }
// let obj2 = JSON.stringify(obj1)
// let obj2 = JSON.parse(JSON.stringify(obj1))
// console.log(obj2);

// ? JSON.stringify - переводит в строку
// ? JSON.parse - переводит в объект (в первоначальный вид)

// let obj1 = {
//     name: 'dina',
//     age: 20,
//     skills: ['js', 'react']
// }
// let obj2 = JSON.parse(JSON.stringify(obj1))
// obj2.name = 'kate'
// obj2.skills.push('html/css')
// console.log(obj1);
// console.log(obj2);


// let str = 'albert einstein';
// let [a, l, b, e, r, t, ...lastName] = str;
// console.log(a, l, b, e, r, t, lastName.join(''));  // ? a l b e r t  einstein


// let str = 'albert einstein';
// let info = str.split(' ');
// console.log(info);   // ?  ['albert', 'einstein']


// let str = 'albert einstein';
// let info = str.split(' ');
// let [firstName, lastName] = info;
// console.log(firstName, lastName)   // ? albert einstein


// ? task 1
// function checkTask(fullName) {
// [firstName,,, titul] = fullName;
// console.log(firstName, titul);
// }
// checkTask(["Julius", "Caesar", "Consul", "of the Roman Republic"])

//  ? task 3
// function checkTask(fullName) {
//     let str = fullName.split(' ')
//     let [firstName, lastName] = str;
//     let obj = {firstName, lastName}
//     console.log(obj)
// }
// checkTask('Albert Einstein')

 

// ? task 4
// function checkTask(obj){
//     let {name, surname, age} = obj;
//     console.log(name, surname, age)

// }
// checkTask({name: 'Петр', surname: 'Петров', age: '20 лет'})

// ? task 5
// function checkTask(obj) {
//     let {hello, apple, ...java} = obj;
//     console.log(java);
// }
// checkTask({ hello: 'World', apple: 'iPhone', java: 'script' })

// ? task 6
// function checkTask(a, b){
//     [b, a] = [a, b]
//     console.log(a, b);
// }
// checkTask(0, 1)

// ? task 7
// function checkTask(arr){
//     let [, elem2 = 'bbb', elem3 = 'eee'] =arr;
//     console.log(elem2, elem3);
// }
// checkTask(['первый', 'второй', 'третий'])

// ? task 8
// function checkTask(obj){
//    let {hobbies:[hobby1,hobby2]} = obj;
//    console.log(hobby1,hobby2)
// }
// checkTask( {name: 'Jack', age: '22', hobbies: ['football', 'swimming']})

// ? task 9
// function checkTask(obj){
//    let {name = 'Аноним', surname = 'Анонимович', age = '? лет'} = obj
//    console.log([name, surname,age])
//    }
//    checkTask({name: 'Петр', surname: 'Петров', age: '20 лет', })

// ? task 10 
// function checkTask(info){
//    let [name, surname, age] = info
//    console.log({name,surname,age})
// }
// checkTask(['Sam', 'Christenson', 22])

// ? tsak 11
// function checkTask(obj){
//    let {name = 'Aibek', age = '99'} = obj
//    console.log(name, age)
// }
// checkTask({name: 'John', age: '22', })    // ? John 22

// ? task 12
// function checkTask(person) {  
//    let name = person.n;  
//    let surname = person.s;  
//    let age = person.a  
//  //   console.log(name, surname, age); 
//    let {n= 'Aibek', s = 'Bekov', a = '99'} =person
//    console.log(n, s, a)
//  }
//  checkTask({name: 'Ivan', surname: 'Ivanov', age: '22'})   // ? Aibek Bekov 99
// ? можно сократить name на n, surname на s и так далее
//  02
// function checkTask(person) {
//    let {n = 'Aibek', s = 'Bekov', a = 99} = person
//    console.log(n, s, a)
//    }

// ! Деструктуризация вложенных объектов
// ? task 14
// function checkTask(obj){
//    let {size: {width, height}, items: [item1, item2,], extra} =obj
//    console.log(width) 
// console.log(height) 
// console.log(item1) 
// console.log(item2) 
// console.log(extra)
// }
// checkTask({ size: { width: 100, height: 200 }, items: ["Cake", "Donut"], extra: true})

// ? Экстра таск 1
// function checkTask(obj){
//    let {name, years, isAdmin = false} = obj
//    console.log(name)
//    console.log(years)
//    console.log(isAdmin)
// }
// checkTask({ name: "Mike", years: 43 })

// ? Экстра таск 2
// function checkTask(employee){
//    let [name, surname, department, position, salary] = employee
//    console.log(name, surname, department, position, salary)
// }
// checkTask(["John", "Jones", "it dept", "developer", 3000])   // ? John Jones it dept developer 3000

