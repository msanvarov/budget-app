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

        return {
            addItem: function (type, des, val) {
                var newItem, ID, length;
                length = data.allItems[type].length;
                length > 1 ? ID = data.allItems[type][data.allItems[type].length - 1].id + 1 : ID = 0;
                if (type === "exp") {
                    newItem = new Expenses(ID, des, val);
                } else if (type === "inc") {
                    newItem = new Income(ID, des, val);
                }
                data.allItems[type].push(newItem);
            }
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
            },  addListItem: function (data_obj, type) {
                if (type === "inc") {
                    $(DOMStrings.incomeContainer).append(`<div class="item clearfix" id="income-` + data_obj.id + `">
                 <div class="item__description">` + data_obj.description + `</div><div class="right clearfix">
                 <div class="item__value">+` + data_obj.value + `</div><div class="item__delete">
                 <button class="item__delete--btn"><i class="ion-ios-close-outline"></i>
                 </button></div></div></div>`);
                } else {
                    $(DOMStrings.expensesContainer).append(`<div class="item clearfix" id="expense-` + data_obj.id + `">
                  <div class="item__description">` + data_obj.description + `</div> <div class="right clearfix">
                  <div class="item__value">- ` + data_obj.value + `</div> <div class="item__percentage">TODO (21%)</div>
                  <div class="item__delete"> <button class="item__delete--btn">
                  <i class="ion-ios-close-outline"></i></button> </div> </div> </div>`);
                }
            }
        }
    })();

// Global Controller
    var controller = (function (budgetCtrl, uiCtrl) {
        var DOM = uiCtrl.get_DOM();


        $(DOM.inputBtn).click(function () {
            var input = uiCtrl.get_input();
            if (input.description[0].value !== "" && !isNaN(input.value[0].valueAsNumber) && input.value[0].valueAsNumber > 0) {
                var item = budgetCtrl.addItem(input.type, input.description[0].value, input.value[0].valueAsNumber);
                uiCtrl.addListItem(item, input.type);
                changeBudget();
                uiCtrl.clearFields();

            }
        });

    })(budgetController, uiController);


});

