$(function () {
    var budgetController = (function () {
        var data = {
            allItems:
                {
                    exp: [],
                    inc: []
                },
            totals: {
                exp: 0,
                inc: 0
            },
            budget: 0,
            percentage: -1
        };

    })();

    var uiController = (function () {
        var DOMStrings = {
            inputType: ".add__type",
            inputDescription: ".add__description",
            inputValue: ".add__value",
            inputBtn: ".add__btn",
            incomeContainer: ".income__list",
            expensesContainer: ".expenses__list",
            budgetIncome: ".budget__income--value",
            budgetExpenses: ".budget__expenses--value",
            budgetPercentage: ".budget__expenses--percentage",
            budget: ".budget__value",
            container: ".container"
        };
    })();

// Global Controller
    var controller = (function (budgetCtrl, uiCtrl) {

    })(budgetController, uiController);


});

