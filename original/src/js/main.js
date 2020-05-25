
let btnCalc = document.getElementById('start'), //Получить кнопку "Начать расчет" через id
    //Получить все блоки в правой части программы через классы (которые имеют класс название-value, начиная с <div class="budget-value"></div> и заканчивая <div class="yearsavings-value"></div>)
    budgetValue = document.getElementsByClassName('budget-value')[0],// получаем элемент budgetValue
    DayBudgetValue = document.querySelector('.daybudget-value'),// получаем элемент daybudget-value
    LevelValue = document.querySelector('.level-value'),// получаем элемент level-value
    ExpensesValue = document.querySelector('.expenses-value'),// получаем элемент expenses-value
    OptionalExpensesValue = document.querySelector('.optionalexpenses-value'),// получаем элемент optionalexpenses-value
    IncomeValue = document.querySelector('.income-value'),// получаем элемент income-value
    MonthsavingsValue = document.querySelector('.monthsavings-value'),// получаем элемент monthsavings-value
    YearsavingsValue = document.querySelector('.yearsavings-value'),// получаем элемент yearsavings-value

    //Получить поля(input) c обязательными расходами через класс. (class=”expenses-item”)
    chooseExpenses = document.querySelectorAll('.expenses-item'), // получаем псевдомассив с классами expenses-item

    //Получить кнопки “Утвердить” и “Рассчитать” через Tag, каждую в своей переменной
    expensesItemBtn = document.getElementsByTagName('button')[0],// получаем кнопку утвердить обязательные расходы с классом                .expenses-item-btn
    optionalExpensesBtn = document.getElementsByTagName('button')[1], // получаем кнопку утвердить необязательные расходы с классом      .optionalexpenses-btn
    countBudgetBtn = document.getElementsByTagName('button')[2], // получаем кнопку рассчитать с классом .count-budget-btn

    //Получить оставшиеся поля через querySelector (статьи возможного дохода, чекбокс, сумма, процент, год, месяц, день)
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'), // получаем элементы с классом optionalexpenses-item
    chooseIncome = document.querySelector('.choose-income'), // получаем элемент с классом choose-income
    checkSavings = document.querySelector('#savings'), // получаем элемент с классом checksavings
    chooseSum = document.querySelector('.choose-sum'), // получаем элемент с классом choose-sum
    choosePercent = document.querySelector('.choose-percent'), // получаем элемент с классом choose-percent
    yearValue = document.querySelector('.year-value'), // получаем элемент с классом year-value
    monthValue = document.querySelector('.month-value'), // получаем элемент с классом month-value
    dayValue = document.querySelector('.day-value'); // получаем элемент с классом day-value

    //Как можно изменить размер шрифта элемента при помощи JS
    //title = document.querySelector('.title'); // получаем элемент с классом title

let money, time, appData, mandatoryExpenditureItem, cost, budgetFor1Day, items; //создаем переменные


btnCalc.addEventListener('click', function() { // прикрепляем к кнопке "Начать расчет" обработчик событий (клик мыши) и колбэк функцию 
    //isNaN проверка money - возвращает true если в переменную записываются не цифры, цикл будет работать дальше
    time = prompt("Введите дату в формате YYYY-MM-DD", ''); // получаем от пользователя дату в переменную time
    money = +prompt("Ваш бюджет на месяц?", ''); // // получаем от пользователя money в переменную time
    while(isNaN(money) || money == "" || money == null) {
        money = promt("Ваш бюджет?", '');
    }
    appData.budget = money; // добавляем в объект appData переменную money
    appData.timeData = time; // добавляем в объект appData переменную time
    budgetValue.textContent = money.toFixed(); // помещаем в элемент budgetValue текст money и округляем до ближайщего целого числа
    // любые действия которые происходя с датами выполняются с помощью втроенного объекта new Date() 
    yearValue.value = new Date (Date.parse(time)).getFullYear(); // помещаем в элемент yearValue дату которую ввел пользователь и парсим в миллисекунды которые прошли с 1 января 1970 года, далее переводим в год
    monthValue.value = new Date (Date.parse(time)).getMonth() + 1; // помещаем в элемент monthValue дату которую ввел пользователь и парсим в миллисекунды которые прошли с 1 января 1970 года, далее переводим в месяц, т.к. месяц начинается с 0 то добавляем цифру 1
    dayValue.value = new Date (Date.parse(time)).getDate(); // помещаем в элемент dayValue дату которую ввел пользователь и парсим в миллисекунды которые прошли с 1 января 1970 года, далее переводим в день
    expensesItemBtn.disabled = false; // активируем кнопку expensesItemBtn
    optionalExpensesBtn.disabled = false; // активируем кнопку optionalExpensesBtn
    countBudgetBtn.disabled = false; // активируем кнопку countBudgetBtn

});

let sum = 0; // создаем глобальную переменную для подсчета цен обязательных расходов

expensesItemBtn.addEventListener('click', function () { // берем кнопку expensesItemBtn прикрепляем к ней обработчик событий и колбэк функцию
    //let sum = 0; 
    for (let i = 0; i < chooseExpenses.length; i++) { // обращаемся к псевдоколлекции chooseExpenses и вызываем метод length
        mandatoryExpenditureItem = chooseExpenses[i].value; // через индекс i получаем обязательную статью расходов в этом месяце
        cost = chooseExpenses[++i].value; // через индекс i получаем цену обязательной статьи расходов в этом месяце. ++i это мы увеличиваем на 1 переменную i
        if (typeof (mandatoryExpenditureItem === 'string') && mandatoryExpenditureItem != null && typeof cost != null && mandatoryExpenditureItem != '' && cost != '' && mandatoryExpenditureItem.length < 50) { // проверяем явл. ли mandatoryExpenditureItem строкой и не является null и cost не является null и mandatoryExpenditureItem cost  не является пустой строкой и длина mandatoryExpenditureItem должна быть меньше 50
            console.log('done');
            appData.expenses[mandatoryExpenditureItem] = cost; //добавляем в объект expenses пару ключ-значение обяз.статья расходов - стоимость
            sum += +cost; //суммируем цены. + это преобразование ввода пользователя в цифру
        } else {
            i--; //если if не срабатывает то компенсируем i, то есть обнуляем чтобы еще раз if сработал
        }
    }
    ExpensesValue.textContent = sum; // берем поле ExpensesValue и добавляем текст sum
});


optionalExpensesBtn.addEventListener('click',function() { // берем кнопку optionalExpensesBtn прикрепляем к ней обработчик событий и колбэк функцию
    for (i = 0; i < optionalExpensesItem.length; i++){ // обращаемся к псевдоколлекции optionalExpensesItem и вызываем метод length
        let opt = optionalExpensesItem[i].value; // создаем переменную opt и присваиваем ей значение по индексу i из псевдомассива optionalExpensesItem
        appData.optionalExpenses[i] = opt; // обращаемся к объекту appData. В нем обращаемся к объекту optionalExpenses, и присваиваем ключ i и значение из псевдомассива по индексу i
        OptionalExpensesValue.textContent += appData.optionalExpenses[i] + ' '; // берем поле OptionalExpensesValue и прибавляем в него текст из appData по объекту optionalExpenses

    }
});

countBudgetBtn.addEventListener('click', function() { // берем кнопку countBudgetBtn прикрепляем к ней обработчик событий и колбэк функцию
    if (appData.budget != undefined) { // если пользователь не введет бюджет то функция не сработает
        appData.budgetFor1Day = ((appData.budget - sum )/30).toFixed(); // разделим на 30 бюджет и добавим в объект appData новое свойство budgetFor1Day и округлим до ближайшего целого
        console.log(ExpensesValue.value);
        DayBudgetValue.textContent = appData.budgetFor1Day; // помещаем в поле DayBudgetValue тект из свойства appData.budgetFor1Day
        if (appData.budgetFor1Day < 100) { // проверяем уровень дохода
            LevelValue.textContent = "Минимальный уровень достатка"; // помещаем в поле LevelValue текст (мультикуросор ставится при помощи ALT)
        } else if (appData.budgetFor1Day > 100 && appData.budgetFor1Day < 2000) {
            LevelValue.textContent = "Средний уровень достатка";
        } else if (appData.budgetFor1Day > 2000) {
            LevelValue.textContent = "Высокий уровень достатка";
        } else {
            LevelValue.textContent = "Произошла ошибка";
        }
    } else {
        DayBudgetValue.textContent = "Произошла ошибка"; // если пользователь не ввел бюджет то в поле DayBudgetValue будет выведено - "Произошла ошибка"
    }

});

chooseIncome.addEventListener('input', function() { // берем поле chooseIncome прикрепляем к нему обработчик событий input и колбэк функцию 
    items = chooseIncome.value; //просим пользователя ввести через запятую доходы. Текст берется из поля chooseIncome
    appData.income = items.split(', ');//добавляем ответы пользователя (дробим через запятую) в массив appData, в свойство income
    IncomeValue.textContent = appData.income; // берем поле IncomeValue и добавляем текст из массива appData. При введении символов они автоматически будут появляться в поле IncomeValue (это обработчик input). А обработчик change вносит изменения когда клик идет в любой точке окна
});

checkSavings.addEventListener('click', function() { // берем поле checkSavings прикрепляем к нему обработчик событий input и колбэк функцию
    // прописываем простой логический функционал
    if (appData.savings == true){ // если флажок в чекбоксе стоит (true) то кликом переводим его в положение false
        appData.savings = false;
    } else {
        appData.savings = true; // если флажок в чекбоксе не стоит (false) то кликом переводим его в положение true 
    }
});

// почему в поле chooseSum и choosePercent по 2 переменных ? Чтобы одна из функций точно посчитала расчет накоплений за месяц и за год, они друг друга прикрывают
chooseSum.addEventListener('input', function() { // берем поле chooseSum прикрепляем к нему обработчик событий input и колбэк функцию
    if (appData.savings == true) { // если флажок в чекбоксе стоит (true)
        let sum = +chooseSum.value, // создаем новую переменную с текущей суммой sum. + нужен для преобразования текста в число
            persent = +choosePercent.value; // создаем новую переменную с текущими процентами persent. + нужен для преобразования текста в число
        appData.monthIncome = sum/100/12*persent; //добавляем в объект , создаем новое свойство monthIncome. Переводим в проценты - делим на 100 и делим на 12 месяцев и умножаем на процент (считаем доход за месяц)
        appData.yearIncome = sum/100*persent; //добавляем в объект , создаем новое свойство monthIncome. Переводим в проценты - делим на 100 и умножаем на процент (считаем доход за год)
        MonthsavingsValue.textContent = appData.monthIncome.toFixed(1); // помещаем в поле MonthsavingsValue значение из объекта appData свойство monthIncome и округляем его до 1 знака после запятой
        YearsavingsValue.textContent = appData.yearIncome.toFixed(1); // помещаем в поле YearsavingsValue значение из объекта appData свойство yearIncome и округляем его до 1 знака после запятой
    }
});

choosePercent.addEventListener('input', function() { // берем поле choosePercent прикрепляем к нему обработчик событий input и колбэк функцию
    if (appData.savings == true) { // если флажок в чекбоксе стоит (true)
        let sum = +chooseSum.value, // создаем новую переменную с текущей суммой sum. + нужен для преобразования текста в число
            persent = +choosePercent.value; // создаем новую переменную с текущими процентами persent. + нужен для преобразования текста в число
        appData.monthIncome = sum/100/12*persent; //добавляем в объект , создаем новое свойство monthIncome. Переводим в проценты - делим на 100 и делим на 12 месяцев и умножаем на процент (считаем доход за месяц)
        appData.yearIncome = sum/100*persent; //добавляем в объект , создаем новое свойство monthIncome. Переводим в проценты - делим на 100 и умножаем на процент (считаем доход за год)
        MonthsavingsValue.textContent = appData.monthIncome.toFixed(1); // помещаем в поле MonthsavingsValue значение из объекта appData свойство monthIncome и округляем его до 1 знака после запятой
        YearsavingsValue.textContent = appData.yearIncome.toFixed(1); // помещаем в поле YearsavingsValue значение из объекта appData свойство yearIncome и округляем его до 1 знака после запятой
    }
});

appData = {  //создаем объект для хранения данных
    budget:money, 
    timeData: time, 
    expenses : {}, 
    optionalExpenses: {}, 
    income : [], //сюда будет заполняться дополнительный доход, который можно получить.
    savings: false
};
    








