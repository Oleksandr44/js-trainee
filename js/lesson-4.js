// const message = "JavaScript is awesome";
// console.log(message.length); // 21

/*=====================================================================================*/

// const message = "JavaScript is awesome";
// console.log(message.toUpperCase()); // "JAVASCRIPT IS AWESOME"

/*=====================================================================================*/

// const fullName = "Jacob Mercer";
// console.log(fullName.slice(0, 4)); // 'Jaco'
// console.log(fullName.slice(3, 9)); // 'ob Mer'
// console.log(fullName.slice(0, fullName.length)); // 'Jacob Mercer'

/*=====================================================================================*/

// const fullName = "Jacob Mercer";
// console.log(fullName.slice(1)); // 'acob Mercer'
// console.log(fullName.slice(3)); // 'ob Mercer'

/*=====================================================================================*/

// Функція getSubstring(string, length) приймає рядок і повертає новий підрядок (його часткову копію). Вона оголошує два параметри, значення яких будуть задаватися під час її виклику:

// string - оригінальний рядок
// length - довжина нового підрядка
// Доповни код функції так, щоб вона повертала новий підрядок, який починається від початку string і має довжину length.

// function getSubstring(string, length) {
//     return string.slice(0, length);
// }

// console.log(getSubstring("Hello world", 3));
// console.log(getSubstring("Hello world", 5));
// console.log(getSubstring("Hello world", 8));
// console.log(getSubstring("Hello world", 11));
// console.log(getSubstring("Hello world", 0));

/*=====================================================================================*/

// const message = "Welcome to Bahamas!";
// console.log(message.toLowerCase()); // "welcome to bahamas!"
// console.log(message); // "Welcome to Bahamas!"

/*=====================================================================================*/

// const message = "Welcome to Bahamas!";
// console.log(message.toUpperCase()); // "WELCOME TO BAHAMAS!"
// console.log(message); // "Welcome to Bahamas!"

/*=====================================================================================*/

// const brandName = 'samsung';
// const userInput = 'saMsUng';
// const lowercaseInput = userInput.toLowerCase();

// console.log(brandName); // 'samsung'
// console.log(userInput); // 'saMsUng'
// console.log(userInput === brandName); // false
// console.log(lowercaseInput); // 'samsung'
// console.log(lowercaseInput === brandName); // true

/*=====================================================================================*/

// Функція normalizeInput(input, to) оголошує два параметри:

// input - рядок, який потрібно привести до певного регістру
// to - рядок з двома можливими значеннями: "upper" або "lower", що вказують до якого регістру потрібно привести значення input
// Доповни код функції таким чином, щоб:

// Якщо значення параметра to — це рядок "upper", то функція повертала копію рядка input, але у верхньому регістрі
// В іншому разі, функція повертала копію рядка inputу нижньому регістрі

// function normalizeInput(input, to) {
//     if (to === "upper") {
//         return input.toUpperCase();
//     } else {
//         return input.toLowerCase();
//     }
// }

// console.log(normalizeInput("This ISN'T SpaM", "lower"));
// console.log(normalizeInput("This ISN'T SpaM", "upper"));
// console.log(normalizeInput("Big SALE", "lower"));
// console.log(normalizeInput("Big SALE", "upper"));
// console.log(normalizeInput("Stay Awhile and Listen", "lower"));
// console.log(normalizeInput("Stay Awhile and Listen", "upper"));

/*=====================================================================================*/

// const username = 'Jacob Mercer';

// console.log(username.includes('Jacob')); // true
// console.log(username.includes('John')); // false
// console.log(username.includes('Mercer')); // true
// console.log(username.includes('Doe')); // false

/*=====================================================================================*/

// const message = "Please buy our stuff!";
// const hasSpam = message.includes("buy");

// if (hasSpam) {
//   console.log("Warning: This message contains forbidden words.");
// } else {
//   console.log("You can safely open this message.");
// }

/*=====================================================================================*/

// Функція checkForName(fullName, firstName) приймає два параметри та повертає буль true або false - результат перевірки входження підрядка firstName у рядок fullName.

// fullName - рядок, що містить повне ім'я
// firstName - рядок, що містить ім'я для перевірки його входження в повне ім'я
// Доповни тіло функції таким чином, щоб вона повертала результат перевірки входження імені (параметр firstName), у повне ім'я (параметр fullName). Врахуй, що регістр символів в параметрах fullName і firstName наперед не відомий. Перед перевіркою входження не забудь прирівняти їх до однакового регістру.

// function checkForName(fullName, firstName) {
//     const firstNameLower = firstName.toLowerCase();
//     const fullNameLower = fullName.toLowerCase();
//     return fullNameLower.includes(firstNameLower);
// }

// console.log(checkForName("Jason Neis", "Jason"));
// console.log(checkForName("Jason Neis", "jAsOn"));
// console.log(checkForName("Jason Neis", "Jacob"));
// console.log(checkForName("Caty Stars", "Caty"));
// console.log(checkForName("Caty Stars", "cAtY"));
// console.log(checkForName("Caty Stars", "Andromeda"));

/*=====================================================================================*/

// Функція checkFileExtension(fileName, ext) приймає два параметри:

// fileName - рядок, що зберігає ім'я файлу з розширенням, наприклад, styles.css, hello.js тощо.
// ext - рядок, що зберігає розширення, наприклад, .css, .js тощо
// Доповни код функції так, щоб:

// Якщо ім'я файлу fileName закінчується розширенням, зазначеним у параметрі ext, то функція повертала рядок "File extension matches"
// В іншому разі, функція повертала рядок "File extension does not match"

// function checkFileExtension(fileName, ext) {
//     if (fileName.endsWith(ext)) {
//         return "File extension matches";
//     } else {
//         return "File extension does not match";
//     }
// }

// console.log(checkFileExtension("styles.css", ".css"));
// console.log(checkFileExtension("styles.css", ".js"));
// console.log(checkFileExtension("app.js", ".js"));
// console.log(checkFileExtension("app.js", ".html"));
// console.log(checkFileExtension("index.html", ".html"));
// console.log(checkFileExtension("index.html", ".css"));
// console.log(checkFileExtension("index.html", ".js"));

/*=====================================================================================*/

// Функція getFileName(file) приймає один параметр

// file - рядок з іменем файлу. Ім'я файлу може бути з розширенням, наприклад: styles.css, app.js або без, наприклад: styles, app.
// Використовуючи методи indexOf та slice, доповни код функції таким чином, щоб:

// Вона перевіряла наявність розширення в імені файлу (назва розширення відокремлюється від імені файла крапкою)
// Якщо ім'я файлу не містить розширення, то функція повертала новий підрядок, що містить ім'я файлу без змін
// В іншому разі функція повертала підрядок з іменем файлу, але без розширення

// function getFileName(file) {
//     var index = file.indexOf(".");
//   if (index === -1) {
//     return file;
//   } else {
//     return file.slice(0, index);
//   }
// }

// console.log(getFileName("styles.css"));
// console.log(getFileName("app.js"));
// console.log(getFileName("app"));
// console.log(getFileName("index.js"));
// console.log(getFileName("index.html"));
// console.log(getFileName("index.css"));
// console.log(getFileName("index"));

/*=====================================================================================*/

// Функція createFileName(name, ext) приймає два параметри:

// name - рядок, що зберігає ім'я файлу без розширення, яке вводить користувач. Воно може містити зайві пробіли на початку або в кінці рядка, наприклад "order ", " finance " тощо
// ext - рядок, що зберігає розширення, наприклад "txt", "xml" тощо
// Використовуючи синтаксис шаблонних рядків і метод trim(), доповни код функції таким чином, щоб вона повертала повне (об'єднане) ім'я файлу з доданим розширенням, зазначеним у параметрі ext у форматі ім'я.розширення. Також повне ім'я файлу не повинно містити зайвих пробілів на початку або наприкінці.

// function createFileName(name, ext) {
//   name = name.trim();
//   return `${name}.${ext}`;
// }

// console.log(createFileName(" order ", "txt"));
// console.log(createFileName("report ", "csv"));
// console.log(createFileName(" presentation", "xml"));

/*=====================================================================================*/

// let count = 0;

// while (count < 10) {
//   console.log(`Count: ${count}`);
//   count += 1;
// }

/*=====================================================================================*/

// Змінна clientCounter зберігає кількість зайнятих номерів на поточний момент.
// Змінна maxClients зберігає загальну кількість номерів у готелі.
// Завдяки циклу while місця в готелі будуть заповнюватися доти, доки поточна кількість клієнтів не дорівнюватиме максимально допустимій.

// let clientCounter = 18;
// const maxClients = 25;

// while (clientCounter < maxClients) { // не розумію чому не <=, а <
//   console.log(clientCounter);
//   clientCounter += 1;
// }

/*=====================================================================================*/

// Функція calculateTotal(number) приймає ціле число(параметр number).Доповни код функції так, щоб вона повертала суму всіх цілих чисел від одиниці до цього числа включно.Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6.

// function calculateTotal(number) {
//     let sum = 0;
//   for (let i = 1; i <= number; i++) {
//     sum += i;
//   }
//   return sum;
// }

// console.log(calculateTotal(1));
// console.log(calculateTotal(3));
// console.log(calculateTotal(0));
// console.log(calculateTotal(18));
// console.log(calculateTotal(24));
// console.log(calculateTotal());

/*=====================================================================================*/

// let count = 0;

// do {
// 	console.log(`Count: ${count}`);
// 	count += 1;
// } while (count < 5);

/*=====================================================================================*/

// for (let i = 0; i <= 20; i += 5) {
//   console.log(i);
// }

/*=====================================================================================*/

// Функція calculateTotal(number) приймає ціле число (параметр number) Використовуючи цикл for, доповни код функції так, щоб вона повертала суму всіх цілих чисел від одиниці до цього числа включно. Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6.

// function calculateTotal(number) {
//     let sum = 0;
//   for (let i = 1; i <= number; i++) {
//     sum += i;
//   }
//   return sum;
// }

// console.log(calculateTotal(1));
// console.log(calculateTotal(0));
// console.log(calculateTotal(7));
// console.log(calculateTotal(18));
// console.log(calculateTotal(24));
// console.log(calculateTotal());

/*=====================================================================================*/

// Функція calculateEvenTotal(number) приймає ціле число (параметр number). Доповни код функції так, щоб вона повертала суму всіх парних цілих чисел від одиниці до цього числа включно. Парні числа — це ті, що можна поділити на 2 без остачі (як це зробити розглядалося у темі Арифметичні операції у модулі 1). Наприклад, якщо number дорівнює 6, то сума - це 2 + 4 + 6, тобто 12.

// function calculateTotal(number) {
//     let sum = 0;
//   for (let i = 1; i <= number; i+= 1) {
//       if (i % 2 === 0) {
//         sum += i;
//      }
//  }
//   return sum;
// }

// console.log(calculateTotal(1));
// console.log(calculateTotal(3));
// console.log(calculateTotal(7));
// console.log(calculateTotal(18));
// console.log(calculateTotal(27));
// console.log(calculateTotal());

// function calculateTotal(number) {
//     let sum = 0;
//     for (let i = 2; i <= number; i += 2) {
//         sum += i;
//     }
//     return sum;
// }

// console.log(calculateTotal(1));
// console.log(calculateTotal(3));
// console.log(calculateTotal(7));
// console.log(calculateTotal(18));
// console.log(calculateTotal(27));
// console.log(calculateTotal());

/*=====================================================================================*/

// Доповни код таким чином, щоб у змінну number записувалося перше число у проміжку від start до end, яке ділиться на 5 без остачі.

// const start = 17;
// const end = 25;
// let number = 0;

// for (let i = start; i <= end; i++) {
//   if (i % 5 === 0) {
//       number = i;
//       console.log(number);
//     break;
//   }
// }

/*=====================================================================================*/

// Функція findNumber(start, end, divisor) приймає три параметра, які є цілими числами.
// Доповни код функції таким чином, щоб вона:
// повертала перше число у діапазоні від start до end включно, яке ділиться на divisor без остачі
// не використовуй оператор break

// function findNumber(start, end, divisor) {
//     for (let i = start; i <= end; i++) {
//         if (i % divisor === 0) {
//             return i;
//         }
//     }
// }

// console.log(findNumber(2, 6, 5));
// console.log(findNumber(8, 17, 3));
// console.log(findNumber(6, 9, 4));
// console.log(findNumber(16, 35, 7));
// console.log(findNumber());

/*=====================================================================================*/

// Форматування посилання (endsWith)
// Напиши скрипт який перевіряє чи закінчується значення
// - змінної link символом /. Якщо ні, додай до кінця
// - значення link цей символ.
// - Використовуй конструкцію if...else.

// let link = "https://my-site.com/about/";

// if (!link.endsWith("/")) {
//     link += "/"
// }

// console.log(link);

/*=====================================================================================*/

//  Форматування посилання (includes та логічне «І»)
//  Напиши скрипт який перевіряє чи закінчується значення
//  змінної link символом /. Якщо ні, додай до кінця
//  значення link цей символ, але тільки в тому випадку,
//  якщо в link є підрядок "my-site".
//  Використовуй конструкцію if...else або тернарний оператор.

// let url = "https://my-site.com/about";

// if (url.includes("my-site") && !url.endsWith("/")) {
//     url += "/";
// }
 
// console.log(url);

// url += url.includes("my-site") && !url.endsWith("/") ? "/" : "";

// console.log(url);

/*=====================================================================================*/

// Пошук у рядку методом includes()


// const blacklistedWord1 = "spam";
// const blacklistedWord2 = "sale";

// const string1 =
//   "Hello, I'm Prince Abdul, this is not spam, I'm offering you a million!";

// const string2 = "Biggest SALE this week, don't miss out!";

// const string3 = "#fatlivesmatter advertising campaign";

// function checkWordInSentence(sentence, word) {
//     return sentence.toLowerCase().includes(word.toLowerCase())
// }

// console.log(`str1: ${checkWordInSentence(string1, blacklistedWord1)}`);
// console.log(`str1: ${checkWordInSentence(string1, blacklistedWord2)}`);

// console.log(`str2: ${checkWordInSentence(string2, blacklistedWord1)}`);
// console.log(`str2: ${checkWordInSentence(string2, blacklistedWord2)}`);

// console.log(`str3: ${checkWordInSentence(string3, blacklistedWord1)}`);
// console.log(`str3: ${checkWordInSentence(string3, blacklistedWord2)}`);

/*=====================================================================================*/

// for (let i = 0; i <= 10; i += 3) {
//     console.log(i, "Hellow Sasha");
// }

// for (let i = 0; i < 10; i += 1) {
//   console.log(i, "Hello world");
// }

// for (let i = 2; i <= 30; i += 2) {
//         console.log(i);
//     }
 
/*=====================================================================================*/

// let ball = 0;

// while (ball < 5) {
//     console.log(ball);
//     ball += 1;
// }

// const correctPass = "qwerty";
// let userPass = prompt("enter your password");
// let attempts = 3;

// while (userPass !== correctPass && attempts > 1) {
//   userPass = prompt("Your password isnt correct! Try again: ");
//   attempts -= 1;
// }

// console.log(userPass);

/*=====================================================================================*/

// Напиши цикл for, який виводить у консоль браузера
// числа за зростанням від a до b, але тільки якщо число кратне 5.

// const a = 100;
// const b = 20;

// for (let i = b; i <= a; i += 5) {
//     console.log(i);
// }

// for (let i = b; i <= a; i += 1) {
//   if (i % 5 === 0) {
//     console.log(i);
//   }
// }

/*=====================================================================================*/

// Напиши скрипт, який підраховує суму всіх парних чисел,
// які входять в діапазон чисел у змінних від min до max.
// Наприклад, якщо min=0 и max=5, то діапазон 0-5, і в ньому два парних числа - 2 і 4, їх сума 6.
//

// const min = 0;
// const max = 5;
// let total = 0;

// for (let i = min; i <= max; i += 1) {
//   // debugger - оператор, який почне процес дебагінгу коду, в консолі розробника ви зможете рухатись покроково по кожній дії вашого коду паралельно дивлячись на стан змінних, перевірок і тд
//   if (i % 2 === 0 && i !== 0) {
//     console.log("Even: ", i);
//     total += i;
//   }
// }
// console.log(`TOTAL: ${total}`);

/*=====================================================================================*/

// Станція з продажу ремонтних дроїдів готова до запуску, залишилося написати програмне забезпечення для відділу продажів. Оголоси функцію makeTransaction(quantity, pricePerDroid, customerCredits), яка складає та повертає повідомлення про купівлю ремонтних дроїдів.
// Вона оголошує три параметри, значення яких будуть задаватися під час її виклику:
// quantity — кількість замовлених дроїдів
// pricePerDroid — ціна одного дроїда
// customerCredits — сума коштів на рахунку клієнта
// Доповни функцію таким чином:
// Оголоси змінну для зберігання загальної суми замовлення (загальна вартість усіх замовлених дроїдів) і задай їй вираз розрахунку цієї суми.
// Додай перевірку, чи зможе клієнт оплатити замовлення:
// якщо сума до сплати перевищує кількість кредитів на рахунку клієнта, функція має повертати рядок "Insufficient funds!"
// в іншому випадку функція має повертати рядок "You ordered <quantity> droids worth <totalPrice> credits!", де <quantity> це кількість замовлених дроїдів, а <totalPrice> це їх загальна вартість.

// function makeTransaction(quantity, pricePerDroid, customerCredits) {
//     const totalPrice = quantity * pricePerDroid;
//     if (totalPrice <= customerCredits) {
//         return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
//     } else {
//         return `Insufficient funds!`;
//     }
// }
    
// console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
// console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
// console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"

/*=====================================================================================*/

// Оголоси функцію formatMessage(message, maxLength), яка приймає рядок (параметр message) та перевіряє його довжину відповідно до заданої максимальної довжини (параметр maxLength).

// Доповни код функції таким чином, що:

// Якщо довжина рядка дорівнює або менша за maxLength, то функція повертає початковий рядок без змін.
// Якщо довжина перевищує maxLength, то функція обрізає рядок до maxLength символів, додає трикрапку "..." в кінці та повертає обрізану версію.

// function formatMessage(message, maxLength) {
//     if (message.length <= maxLength) {
//         return message
//     }
//     else {
//         return message.slice(0, maxLength) + "..."
//     }
// }

// console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
// console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
// console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
// console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a felis in nunc fringilla"
    
/*=====================================================================================*/
    
// Функція checkForSpam(message) приймає рядок (параметр message), перевіряє його на вміст заборонених слів spam і sale, і повертає результат перевірки. Слова в рядку параметра message можуть бути в довільному регістрі, наприклад SPAM або sAlE.

// Доповни код функції таким чином, що:

// Якщо знайдено заборонене слово (spam або sale), то функція повертає буль true
// Якщо в рядку відсутні заборонені слова, функція повертає буль false

// function checkForSpam(message) {
//     const messageLower = message.toLowerCase();
//     if (messageLower.includes("spam") || messageLower.includes("sale")) {
//         return true;
//     } else {
//         return false;
//     }

// }

// console.log(checkForSpam("Latest technology news")); // false
// console.log(checkForSpam("JavaScript weekly newsletter")); // false
// console.log(checkForSpam("Get best sale offers now!")); // true
// console.log(checkForSpam("Amazing SalE, only tonight!")); // true
// console.log(checkForSpam("Trust me, this is not a spam message")); // true
// console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
// console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

/*=====================================================================================*/

// Оголоси функцію getShippingCost(country), яка повинна перевіряти можливість доставки товару в країну користувача (параметр country) і повертати повідомлення про результат. Обов'язково використовуй інструкцію switch.

// Формат рядка, що повертається "Shipping to <country> will cost <price> credits", де замість <country> і <price> необхідно підставити відповідні значення.

// Список країн і вартість доставки:

// China — 100 кредитів
// Chile — 250 кредитів
// Australia — 170 кредитів
// Jamaica — 120 кредитів
// Зі списку видно, що доставка можлива не скрізь. Якщо зазначена країна відсутня у списку, то функція повинна повернути рядок "Sorry, there is no delivery to your country".

// function getShippingCost(country) {
//     const China = 100;
//     const Chile = 250;
//     const Australia = 170;
//     const Jamaica = 120;

//     switch (country) {
//         case "China":
//             return `Shipping to ${country} will cost ${China} credits`;
//         case "Chile":
//             return `Shipping to ${country} will cost ${Chile} credits`;
//         case "Australia":
//             return `Shipping to ${country} will cost ${Australia} credits`;
//         case "Jamaica":
//             return `Shipping to ${country} will cost ${Jamaica} credits`;
//         default:
//             return `Sorry, there is no delivery to your country`;
//     }
// }

// function getShippingCost(country) {
//     let price =0;
//     let message ="";
//     switch (country) {
//         case 'China':
//             price = 100;
//             message = `Shipping to ${country} will cost ${price} credits`;
//             break;
        
//         case 'Chile':
//             price = 250;
//             message = `Shipping to ${country} will cost ${price} credits`;
//             break;
        
//         case 'Australia':
//             price = 170;
//             message = `Shipping to ${country} will cost ${price} credits`;
//             break;
        
//         case 'Jamaica':
//             price = 120;
//             message = `Shipping to ${country} will cost ${price} credits`;
//             break;
    
//         default: message = `Sorry, there is no delivery to your country`;
//     }
//     return message;
// }


// console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
// console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
// console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
// console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
// console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
// console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"









