// function checkAge(age) {
// if (age >= 18) {
//   return "You are an adult";
// }

// }

// console.log(checkAge(20));
// console.log(checkAge(17));
// console.log(checkAge(27));

/*=====================================================================================*/

// Функція checkStorage(available, ordered) перевіряє можливість оформлення замовлення і повертає повідомлення про результат. Вона оголошує два параметри, значення яких будуть задаватися під час її виклику:

// available - доступна кількість товарів на складі
// ordered - кількість одиниць товару в замовленні
// Використовуючи розгалуження, доповни код функції таким чином, щоб:

// Якщо в замовленні вказане число, яке перевищує доступну кількість товарів на складі, функція повертає рядок "Not enough goods in stock!"
// В іншому випадку функція повертає рядок "Order is processed, our manager will contact you"

// function checkStorage(available, ordered) {
//     if (ordered > available) {
//         return "Not enough goods in stock!";
//     } else {
//         return "Order is processed, our manager will contact you";
//     }
// }

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(200, 20));

/*=====================================================================================*/

// Функція checkStorage(available, ordered) перевіряє можливість оформлення замовлення і повертає повідомлення про результат. Вона оголошує два параметри, значення яких будуть задаватися під час її виклику.

// available - доступна кількість товарів на складі
// ordered - кількість одиниць товару в замовленні
// Використовуючи розгалуження, доповни код функції таким чином, щоб:

// Якщо в замовленні ще немає товарів, тобто значення параметра ordered дорівнює 0, функція повертає рядок "There are no products in the order!".
// Якщо товарів у замовленні більше, ніж їх доступно на складі, то функція повертає рядок "Your order is too large, there are not enough items in stock!".
// В іншому випадку функція повертає рядок "The order is accepted, our manager will contact you".

// function checkStorage(available, ordered) {
//     if (ordered === 0) {
//         return "There are no products in the order!";
//     } else if (available < ordered) {
//         return "Your order is too large, there are not enough items in stock!";
//     } else {
//         return "The order is accepted, our manager will contact you";
//     }
// }

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 250));
// console.log(checkStorage(150, 0));
// console.log(checkStorage(80, 80));

/*=====================================================================================*/

// Функція checkPassword(password) порівнює переданий їй пароль (параметр password) зі збереженим паролем адміністратора (correctPassword) і повертає рядок з повідомленням про результат.

// Використовуючи тернарний оператор, доповни функцію таким чином, щоб:

// Якщо значення password і correctPassword збігаються, функція повертала рядок "Access granted"
// В іншому випадку, функція повертала рядок "Access denied, wrong password!"

// function checkPassword(password) {
//     const correctPassword = "jqueryismyjam";
//     const result = password === correctPassword ? "Access granted" : "Access denied, wrong password!";
//     return result;
// }

// console.log(checkPassword("jqueryismyjam"));
// console.log(checkPassword("angul4r1sl1f3"));
// console.log(checkPassword("r3actsux"));

/*=====================================================================================*/

// Функція getSubscriptionPrice(type) отримує рядок з типом передплати користувача (параметр type), перевіряє її на збіг з трьома можливими типами щомісячної передплати та повертає ціну, або повідомлення про неправильний тип передплати.

// Якщо значення параметра type — це рядок:

// "starter" — ціна передплати 0 кредитів.
// "professional" — ціна передплати 20 кредитів.
// "organization" — ціна передплати 50 кредитів.
// Для будь-якого іншого значення параметра type повертається рядок "Invalid subscription type!".

// Використай оператор switch для розв'язання цієї задачі!

// function getSubscriptionPrice(type) {
//     switch (type) {
//         case ('starter'):
//             return 0;
//             break;
//         case ('professional'):
//             return 20;
//             break;
//         case ('organization'):
//             return 50;
//             break;
//         default:
//             return "Invalid subscription type!";
//     }
// }

// console.log(getSubscriptionPrice("professional")); //20
// console.log(getSubscriptionPrice("organization")); //50
// console.log(getSubscriptionPrice("starter")); // 0
// console.log(getSubscriptionPrice("random")); // "Invalid subscription type!"
// console.log(getSubscriptionPrice("premium")); // "Invalid subscription type!"

/*=====================================================================================*/

// Функція isNumberInRange(start, end, number) перевіряє, чи входить число у проміжок. Вона оголошує три параметри, значення яких будуть задаватися під час її виклику:

// number - число, входження якого перевіряється
// start - початок числового проміжку
// end - кінець числового проміжку
// Використовуючи оператор &&, доповни функцію isNumberInRange таким чином, щоб вона повертала результат входження number у числовий проміжок від start до end включно. Тобто число повинно бути одночасно і більшим або дорівнювати start, і меншим або дорівнювати end. Результатом виклику функції має бути буль true або false.

// function isNumberInRange(start, end, number) {
//     return start <= number && number <= end;
// }

// console.log(isNumberInRange(10, 30, 17)); //true
// console.log(isNumberInRange(10, 30, 5)); //false
// console.log(isNumberInRange(20, 50, 24)); //true
// console.log(isNumberInRange(20, 50, 76)); //false

/*=====================================================================================*/

// Функція checkAccess(subType) перевіряє, чи може користувач отримати доступ до контенту. Перевірка відбувається за типом передплати. Використовуючи оператор "АБО", доповни код функції так, щоб якщо значення параметра subType дорівнює рядкам "pro" або "vip", то функція повертала true і користувач отримував доступ. В іншому випадку повертала false.

// function checkAccess(subType) {
//     return subType === "pro" || subType === "vip";
// }


// console.log(checkAccess("pro")); //true
// console.log(checkAccess("starter")); //false
// console.log(checkAccess("vip")); //true
// console.log(checkAccess("free")); //false

/*=====================================================================================*/

// Функція toggleModalVisibility(isVisible) перемикає стан відображення модального вікна. У параметрі isVisible вона очікує буль true або false. Доповни код функції так, щоб вона повертала протилежне значення цього параметра.

// function toggleModalVisibility(isVisible) {
//     return !isVisible;
// }

// console.log(toggleModalVisibility(true)); //false
// console.log(toggleModalVisibility(false)); //true

// if (50 < 3) {
//   console.log("Істинна!");
// } else {
//   console.log("Хиба!");
// }

// console.log("After");

/*=====================================================================================*/

//  Напиши скрипт для відображення годин та хвилин у консолі браузера у вигляді рядка формату "14 г. 26 хв.". Якщо значення змінної minutes дорівнює 0, то виводь рядок "14 г.", без хвилин.


// const hours = 14;
// const minutes = 0;
// let timestring = minutes > 0 ? `${hours} h. ${minutes} m.` : `${hours} h.`;

// if (minutes > 0) {
//   timestring = `${hours} h. ${minutes} m.`;
// } else {
//   timestring = `${hours} h.`;
// }

// console.log(timestring);

/*=====================================================================================*/

// Напиши скрипт для відображення часу дедлайну здачі проекту. Використовуй if...else.
// Якщо до дедлайну 0 днів - виведи рядок "Today"
// Якщо до дедлайну 1 день - виведи рядок "Tomorrow"
// Якщо до дедлайну 2 дні - виведи рядок "Overmorrow"
// Якщо до дедлайну 3+ днів - виведи рядок "Date in the future"

// const daysUntilDeadline = 5;

// if (daysUntilDeadline === 0) {
//     console.log("Today");
// } else if (daysUntilDeadline === 1) {
//     console.log("Tomorrow");
// } else if (daysUntilDeadline === 2) {
//     console.log("Overmorrow");
// } else if (daysUntilDeadline >= 3) {
//     console.log("Date in the future");
// } else {
//     console.log("Wrong data!");
// }


// const daysUntilDeadline = 5;

// switch (daysUntilDeadline) {
//   case 0:
//     console.log("Today");
//     break;
//   case 1:
//     console.log("Tomorrow");
//     break;
//   case 2:
//     console.log("Overmorrow");
//     break;
//   default:
//     console.log("Date in the future");
// }

/*=====================================================================================*/

//  Напиши скрипт вибору опції доставки товару.
//  Опція зберігається у змінній option: 1 - самовивіз, 2 - кур'єр, 3 - пошта
//  У змінну message записати повідомлення залежно від опції.
//  - 'Ви зможете забрати товар завтра з 12:00 у нашому офісі'
//  - 'Кур'єр доставить замовлення завтра з 9:00 до 18:00'
//  - 'Посилка буде відправлена сьогодні'
//  - 'Вам передзвонить менеджер'

// const option = 1;
// let nessage = "";

// switch (option) {
//     case 1:
//         message = "Ви зможете забрати товар завтра з 12:00 у нашому офісі";
//         break;
//     case 2:
//         message = "Кур'єр доставить замовлення завтра з 9:00 до 18:00";
//         break;
//     case 3:
//         message = "Посилка буде відправлена сьогодні";
//         break;
//     default:
//         message = "Вам передзвонить менеджер";
// }

// console.log(message);

/*=====================================================================================*/

//  Напиши скрипт перевірки підписки користувача при доступі до контента
//  Є три типа підписки: free, pro і vip.
//  Отримати доступ можуть тільки користувачі pro і vip

// const sub = "free";
// const canAccess = sub === "pro" || sub === "vip";

// console.log(canAccess)

/*=====================================================================================*/

//  Напиши скрипт, який перевіряє можливість відкрити чат з користувачем.
//  Для цього, користувач має бути:
//  - другом
//  - онлайн
//  - без режима не турбувати

// const isOnline = true;
// const isFriend = true;
// const isDnd = false;

// /* ми можемо відкрити чат тільки коли друг:
// - онлайн (isOnline = true)
// - він наш друг (isFriend = true)
// - коли у нього вимкнений режим не турбувати (isDnd = false)

// true && true && !false -> true
// */

// const canOpenChat = isOnline === isFriend === !isDnd;

// console.log("Можна відкрити чат? ", canOpenChat);


// const isOnline = true;
// const isFriend = true;
// const isDnd = false;

// /* ми можемо відкрити чат тільки коли друг:
// - онлайн (isOnline = true)
// - він наш друг (isFriend = true)
// - коли у нього вимкнений режим не турбувати (isDnd = false)

// true && true && !false -> true
// */
// const canOpenChat = isOnline && isFriend && !isDnd;
// console.log("Можна відкрити чат? ", canOpenChat);

/*=====================================================================================*/








