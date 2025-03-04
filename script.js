function calculator() {
  while (true) {
    // Получение первого числа с проверкой
    let num1;
    while (true) {
      num1 = parseFloat(prompt("Введите первое число:"));
      if (!isNaN(num1)) {
        break;
      }
      alert("Ошибка! Пожалуйста, введите корректное число.");
    }

    // Получение оператора с проверкой
    let operator;
    while (true) {
      operator = prompt("Введите оператор (+, -, *, /):");
      if (["+", "-", "*", "/"].includes(operator)) {
        break;
      }
      alert("Ошибка! Пожалуйста, введите один из операторов: +, -, *, /");
    }

    // Получение второго числа с проверкой
    let num2;
    while (true) {
      num2 = parseFloat(prompt("Введите второе число:"));
      if (!isNaN(num2)) {
        break;
      }
      alert("Ошибка! Пожалуйста, введите корректное число.");
    }

    // Выполнение операции
    let result;
    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        if (num2 === 0) {
          alert("Ошибка! Деление на ноль невозможно.");
          continue;
        }
        result = num1 / num2;
        break;
    }

    // Вывод результата
    alert(`Результат: ${num1} ${operator} ${num2} = ${result}`);
    console.log(`Результат: ${num1} ${operator} ${num2} = ${result}`);

    // Запрос на продолжение
    let continueCalculation = prompt(
      "Хотите выполнить еще одно вычисление? (да/нет)"
    );
    if (continueCalculation.toLowerCase() !== "да") {
      alert("Спасибо за использование калькулятора!");
      break;
    }
  }
}

// Запуск калькулятора при загрузке страницы
calculator();
