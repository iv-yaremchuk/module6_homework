// Задание 2

let number = 2;

function checkPrimeNumber(num) {
  // проверяем число на соответствие условиям: число не должно быть большее 1000,
  // не быть равным 1 или нолю.
  if (num < 1001 && num !== 1 && num !== 0) {
    // определяем является ли число простым или составным
    for (let x = 2; x <= num; ++x) {
      if (num % x !== 0) {
        return console.log('простое число');
      } else if (num === 2) {
        return console.log(
          '2 - наименьшее и единственное чётное простое число'
        );
      } else {
        return console.log('составное число');
      }
    }
  } else if (num === 1) {
    return console.log('1 - не является ни простым, ни составным числом');
  } else {
    return console.log('Данные не верны');
  }
}

checkPrimeNumber(number);
