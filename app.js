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

        // constructor
        var Expenses = function (id, description, value) {
            this.id = id;
            this.description = description;
            this.value = value;
        };
        var Income = function (id, description, value) {
            this.id = id;
            this.description = description;
            this.value = value;
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

        return {
            get_input: function () {
                return {
                    type: $(DOMStrings.inputType).val(),
                    description: $(DOMStrings.inputDescription).keyup(function () {
                        return $(this).val();
                    }).keyup(),
                    value: $(DOMStrings.inputValue).keyup(function () {
                        return $(this).val();
                    }).keyup()
                }
            }, get_DOM: function () {
                return DOMStrings;
            }
        }
    })();

// Global Controller
    var controller = (function (budgetCtrl, uiCtrl) {
        var DOM = uiCtrl.get_DOM();

    })(budgetController, uiController);


});

