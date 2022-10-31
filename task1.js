// Задание 1

let arr = [0, 2, 3, 4, 0, null, 'j', ','];

function getCountDiffTypes(array) {
  let countOdd = 0;
  let countEven = 0;
  let countZero = 0;

  // проходим циклом по массиву от первого до последнего элемента, длину массива определяем
  // при помощи свойства length, индексы элементов записываем в переменную i

  for (let i = 0; i < array.length; i++) {
    // при помощи оператора typeof проводим проверку на соответствие элементов типу number
    if (typeof array[i] === 'number') {
      // подсчитываем колличество чётных, нечётных чисел и нолей, полученные значения записываем
      // в соответствующие переменые
      if (arr[i] === 0) {
        countZero += 1;
      } else if (array[i] % 2 !== 0) {
        countOdd += 1;
      } else if (array[i] % 2 === 0) {
        countEven += 1;
      }
    }
  }
  // выводим полученные результаты в консоль
  return console.log(
    `Массив содержит: ${countEven} чётных чисел, ${countOdd} нечётных чисел, ${countZero} нолей.`
  );
}

getCountDiffTypes(arr);
