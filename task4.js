// Задание 4

let numbers = [5, 15];

function getNumbers(nums) {
  // создаём переменную i и записываем первое значение массива
  let i = nums[0] - 1;
  // задаём интервал выполнения условия (1000 мс = 1 сек)
  let printInterval = setInterval(() => {
    // создаём условие, при котором в консоль поочерёдно выводится диапазон чисел
    // от первого значения массива до последнего
    if (i < nums[nums.length - 1]) {
      i++;
      console.log(i);
    } else {
      clearInterval(printInterval);
    }
  }, 1000);
}

getNumbers(numbers);
