// function getOrderQuantity(order) {
//   return order.length;
// }

// console.log(getOrderQuantity(["apple", "peach", "pear", "banana"]));
// console.log(getOrderQuantity(["apple", "banana"]));
// console.log(getOrderQuantity(["apple", "banana", "pear"]));
// console.log(getOrderQuantity([]));

/*=====================================================================================*/

// const planets = ["Earth", "Mars", "Venus"];
// const lastElementIndex = planets.length - 1;
// console.log(planets[lastElementIndex]); // "Venus"

/*=====================================================================================*/

// Функція getLastElementMeta(array) приймає один параметр array - масив довільних значень. Доповни код функції таким чином, щоб вона повертала новий масив з двох елементів:
// перший елемент - це індекс останнього елементу у масиві array
// другий елемент - це значення останнього елементу у масиві array

// function getLastElementMeta(array) {
//   const lastIndex = array.length - 1;
//   const lastElement = array[lastIndex];
//   return [lastIndex, lastElement];
// }

// console.log(getLastElementMeta(["apple", "peach", "pear", "banana"]));
// console.log(getLastElementMeta(["apple", "peach", "pear"]));
// console.log(getLastElementMeta(["apple", "peach"]));
// console.log(getLastElementMeta(["apple"]));

/*=====================================================================================*/

// function getExtremeElements(array) {
//   if (Array.isArray(array) && array.length > 1) {
//     return [array[0], array[array.length - 1]];
//   } else {
//     return [];
//   }
// }

// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(["Earth", "Mars", "Venus"]));
// console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));

/*=====================================================================================*/

// const emptyArray = [];
// const nonEmptyArray = [1, 2, 3];

// console.log(Boolean(emptyArray)); // true
// console.log(Boolean(nonEmptyArray)); // true

// if(emptyArray) {
// 	console.log("if is in progress")
// } else {
// 	console.log("else is not performed")
// }

// if(nonEmptyArray) {
// 	console.log("if is in progress")
// } else {
// 	console.log("else is not performed")
// }

/*=====================================================================================*/

// const array= [false];
// const result = array ? "A" : "B";

// console.log(result);

/*=====================================================================================*/

// const words = ["JavaScript", "is", "amazing"];
// console.log(words.join("")); // 'JavaScriptisamazing'
// console.log(words.join(" ")); // 'JavaScript is amazing'
// console.log(words.join("-")); // 'JavaScript-is-amazing'

/*=====================================================================================*/

// const name = "Mango";
// const letters = name.split("");
// console.log(letters); // ["M", "a", "n", "g", "o"]

// const message = "JavaScript essentials";
// const words = message.split(" ");
// console.log(words); // ["JavaScript", "essentials"]

// const slug = "amazing-french-recipes";
// const slugParts = slug.split("-");
// console.log(slugParts); // ["amazing", "french", "recipes"]

/*=====================================================================================*/

// Сервісу гравірування прикрас потрібна функція, яка б автоматично рахувала ціну гравірування, залежно від кількості слів і ціни за слово.

// Оголошена функція calculateEngravingPrice(message, pricePerWord). Ця функція приймає першим параметром рядок, що складається зі слів, розділених лише пробілами (параметр message) та другим параметром - число, що містить ціну гравірування за одне слово (параметр pricePerWord).

// Доповни тіло функції так, щоб вона повертала загальну вартість гравірування усіх слів в рядку.

// function calculateEngravingPrice(message, pricePerWord) {
//     const words = message.split(" ");
//     const wordCount = words.length;
//     const totalPrice = wordCount * pricePerWord;
//     return totalPrice;

// }

// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20));
// console.log(calculateEngravingPrice("Web-development is creative work", 40));
// console.log(calculateEngravingPrice("Web-development is creative work", 20));

/*=====================================================================================*/

// const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];
// const result = planets.slice(1, 3);
// console.log(result); // ["Mars", "Venus"]

/*=====================================================================================*/

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, -1);
// const lastThreeEls = fruits.slice(-3);

// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

/*=====================================================================================*/

// const firstArray = ["Mercury", "Venus"];
// const secondArray = ["Mars", "Jupiter"];
// const result = firstArray.concat(secondArray);

// console.log(firstArray); // ["Mercury", "Venus"];
// console.log(secondArray); // ["Mars", "Jupiter"];
// console.log(result); // ["Mercury", "Venus", "Mars", "Jupiter"];

/*=====================================================================================*/

// const clients = ["Mango", "Ajax", "Poly", "Kiwi", "Poly"];
// console.log(clients.indexOf("Poly")); // 2
// console.log(clients.indexOf("Monkong")); // -1

/*=====================================================================================*/

// Функція getSlice(array, value) приймає два параметра:

// array - масив довільних елементів
// value - значення елемента масиву для пошуку
// Доповни код функції getSlice(array, value) так, щоб вона виконувала пошук значення value у масиві array і повертала:

// порожній масив, якщо в array немає елемента зі значенням value
// підмасив, що починається з початку array і до елемента зі значенням value включно, якщо такий елемент є в array

// function getSlice(array, value) {
//   let subarray = [];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === value) {
//       subarray = array.slice(0, i + 1);
//       break;
//     }
//   }
//   return subarray;
// }

// console.log(getSlice(["Mango", "Poly", "Ajax"], "Poly"));
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Ajax"));
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Mango"));
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Jacob"));
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Casey"));

/*=====================================================================================*/

// const planets = ["Earth", "Mars", "Venus"];

// planets.push("Jupiter");
// console.log(planets); // ['Earth', 'Mars', 'Venus', 'Jupiter']

// planets.push("Saturn", "Neptune");
// console.log(planets); // ['Earth', 'Mars', 'Venus', 'Jupiter', "Saturn", "Neptune"]

/*=====================================================================================*/

// const tags = [];

// for(let i = 0; i < 3; i += 1) {
// 	tags.push(`tag-${i}`);
// }

// console.log(tags); // ["tag-0", "tag-1", "tag-2"]


// Код прикладу створює порожній масив tags і за допомогою циклу for додає рядки виду "tag-0", "tag-1", "tag-2" до масиву. Кожен рядок формується за допомогою шаблонного рядка, де значення i в циклі використовується для створення унікального тега на кожній ітерації. У результаті ми отримуємо масив tags, що містить усі додані значення.

/*=====================================================================================*/

// Функція createArrayOfNumbers(min, max) приймає два параметра:

// min - ціле число, з якого починаються обчислення
// max - ціле число, до якого включно триватимуть обчислення
// Доповни код функції createArrayOfNumbers(min, max) таким чином, щоб вона повертала масив усіх цілих чисел від значення min до max включно.

// function createArrayOfNumbers(min, max) {
//     let array = [];
//     for (let i = min; i <= max; i += 1) {
//         array.push(i);
//     }
//     return array;
// }

// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(14, 17));
// console.log(createArrayOfNumbers(29, 34));
// console.log(createArrayOfNumbers());

/*=====================================================================================*/

// Напиши скрипт, який підраховує суму всіх парних чисел у масиві.

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
// let total = 0;

// for (const number of numbers) {
//     if (number % 2 === 0) {
//         total += number;
//         console.log(number);
//     }
// }

// console.log("total:", total);

/*=====================================================================================*/

/**
 * Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача.
 * У змінних names та phones зберігаються рядки імен та телефонних номерів,
 * розділені комами. Порядковий номер імен та телефонів у рядках вказують на
 * відповідність. Кількість імен та телефонів гарантовано однакова.
 */

// const names = "Jacob,William,Solomon,Artemis";
// const phones = "89001234567,89001112233,890055566377,890055566300";

// displayAllPhonebookInfo(names, phones);

// function displayAllPhonebookInfo(names, phones) {
//     const namesArr = names.split(",");
//     const phonesArr = phones.split(",");

//     for (let i = 0; i < namesArr.length; i += 1) {
//         console.log(`${namesArr[i]} - ${phonesArr[i]}`);
//     }

// }

/*=====================================================================================*/

// Функція checkStorage(storage, item) приймає два параметри:

// storage - масив рядків, що описує доступні товари на складі
// item - рядок з назвою товара, наявність якого потрібно перевірити
// Доповни код функції таким чином, щоб вона перевіряла, чи присутній такий товар в масиві storage і повертала:

// рядок "<item> is available to order!", де item - це назва товара, якщо товар було знайдено
// рядок "Sorry! We are out of stock!", якщо такого товара немає в масиві
// Зроби так, щоб пошук за ім'ям товару був незалежний від регістру, тобто наприклад "plum" і "pLuM" мають бути знайдені у масиві ["apple", "plum", "pear"].

// function checkStorage(storage, item) {
//   item = item.toLowerCase();
//   if (storage.includes(item)) {
//     return `${item} is available to order!`;
//   } else {
//     return "Sorry! We are out of stock!";
//   }
// }

// console.log(checkStorage(["apple", "plum", "pear"], "plum"));
// console.log(checkStorage(["apple", "plum", "pear"], "pLuM"));
// console.log(checkStorage(["apple", "plum", "pear"], "pear"));
// console.log(checkStorage(["apple", "plum", "pear"], "pEAr"));
// console.log(checkStorage(["apple", "plum", "pear"], "orange"));
// console.log(checkStorage(["apple", "plum", "pear"], "carrot"));

/*=====================================================================================*/

// Перед розв'язанням цієї задачі варто зазначити, що таке спільні елементи. Спільними елементами масивів називають ті елементи, які присутні у всіх масивах.

// Наприклад, у двох масивах [1, 3, 5] і [0, 8, 5, 3] спільними будуть числа 3 і 5, оскільки вони присутні в обох вхідних масивах. А числа 0, 1 і 8 присутні тільки в одному з масивів.

// Функція getCommonElements(array1, array2), приймає два масиви (array1 та array2) довільної довжини в якості параметрів.

// Доповни код функції:

// Створи порожній масив для зберігання нового масиву.
// Використай цикл for для ітерації кожного елемента у array1.
// У тілі циклу перевір, чи поточний елемент існує у array2 за допомогою методу includes.
// Якщо він існує, то додай елемент до нового масиву.
// Поверни наповнений масив спільних елементів як результат роботи функції.

// function getCommonElements(array1, array2) {
//   let commonElements = [];
//   for (let i = 0; i < array1.length; i++) {
//     if (array2.includes(array1[i])) {
//       commonElements.push(array1[i]);
//     }
//   }
//   return commonElements;
// }

// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));

/*=====================================================================================*/

// Функція createReversedArray() може приймати довільну кількість аргументів. Доповни код функції так, щоб вона повертала масив усіх аргументів, але в масиві вони повинні йти у зворотному порядку. Тобто, при виклику createReversedArray(1, 2, 3), функція має повернути масив [3, 2, 1]. Використовуй цикл або метод масиву toReversed(), який застосовується до масиву і результатом роботи повертає новий масив з елементами у зворотньому порядку.

// function createReversedArray(...args) {
//   let reversedArray = [];
//   for (let i = args.length - 1; i >= 0; i--) {
//     reversedArray.push(args[i]);
//   }
//   return reversedArray;
// }

// console.log(createReversedArray(12, 85, 37, 4));
// console.log(createReversedArray(164, 48, 291));
// console.log(createReversedArray(412, 371, 94, 63, 176));
// console.log(createReversedArray());

/*=====================================================================================*/

// Функція calculateTax(amount, taxRate) оголошує два параметри:

// amount - число, сума від якої потрібно обчислити податок. Обов'язковий параметр.
// taxRate - число, податкова ставка. Необов'язковий параметр. За замовчуванням його значення має бути 0.2.
// Доповни код функції так, щоб вона повертала суму податку - результат множення суми на податкову ставку.

// function calculateTax(amount, taxRate = 0.2) {
//     return amount * taxRate;
// }

// console.log(calculateTax(100, 0.1));
// console.log(calculateTax(200, 0.1));
// console.log(calculateTax(100));
// console.log(calculateTax(200, 0.2));

/*=====================================================================================*/

// for (let i = 0; i < 5; i+=1) {
//   const a = 20;
//   console.log(a); // 20

//   if (i === 2) {
//     const b = 30;
//     console.log(a); // 20
//     console.log(b); // 30
//   }

//   if (i === 3) {
//     console.log(a); // 20

//     // ❌ Помилка! Змінна b не доступна в цій області видимості
//     console.log(b);
//   }
// }

/*=====================================================================================*/

// function fnA() {
//   console.log("Log inside fnA function before calling fnB");
//   fnB();
//   console.log("Log inside fnA function after fnB call");
// }

// function fnB() {
//   console.log("Log inside fnB function");
// }

// console.log("Log before calling fnA");
// fnA();
// console.log("Log after calling fnA");

// "Log before calling fnA"
// "Log inside fnA function before calling fnB"
// "Log inside fnB function"
// "Log inside fnA function after fnB call"
// "Log after calling fnA"


/*=====================================================================================*/
