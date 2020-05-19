
let btnCalc = document.getElementById('start'), //Получить кнопку "Начать расчет" через id
    //Получить все блоки в правой части программы через классы (которые имеют класс название-value, начиная с <div class="budget-value"></div> и заканчивая <div class="yearsavings-value"></div>)
    budgetValue = document.querySelector('.budget-value'),// получаем элемент budgetValue
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
    expensesItemBtn = document.querySelector('.expenses-item-btn'),// получаем кнопку утвердить обязательные расходы с классом                .expenses-item-btn
    optionalExpensesBtn = document.querySelector('.optionalexpenses-btn'), // получаем кнопку утвердить необязательные расходы с классом      .optionalexpenses-btn
    countBudgetBtn = document.querySelector('.count-budget-btn'), // получаем кнопку рассчитать с классом .count-budget-btn
    //Получить оставшиеся поля через querySelector (статьи возможного дохода, чекбокс, сумма, процент, год, месяц, день)
    chooseIncome = document.querySelector('.choose-income'), // получаем элемент с классом choose-income
    checkSavings = document.querySelector('.checksavings'), // получаем элемент с классом checksavings
    chooseSum = document.querySelector('.choose-sum'), // получаем элемент с классом choose-sum
    choosePercent = document.querySelector('.choose-percent'), // получаем элемент с классом choose-percent
    yearValue = document.querySelector('.year-value'), // получаем элемент с классом year-value
    monthValue = document.querySelector('.month-value'), // получаем элемент с классом month-value
    dayValue = document.querySelector('.day-value'); // получаем элемент с классом day-value






