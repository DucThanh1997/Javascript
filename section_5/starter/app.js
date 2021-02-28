


var budgetController = (function() {
    var Expense = function(id, description, value) {
        this.id = id
        this.description = description
        this.value = value
        this.percentage = -1
    }

    Expense.prototype.calcPercentage = function(totalIncome) {
        if (totalIncome > 0) {
            this.percentage = Math.round((this.value / totalIncome) * 100)
        } else {
            this.percentage = -1
        }
         

    }

    Expense.prototype.getPercentage = function(totalIncome) {
        return this.percentage
    }

    var Income = function(id, description, value) {
        this.id = id
        this.description = description
        this.value = value
    }

    var calculateTotal = function(type) {
        var sum = 0
        data.allItems[type].forEach(function(cur) {
            sum += cur.value
        })
        data.totals[type] = sum
    }

    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        },
        budget: 0,
        percentage: -1
    }

    return {
        addItem: function(type, des, val) {
            var newItem;
            // tạo ID mới
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1
            } else {
                ID = 0
            }
            
            
            // Tạo 1 object mới
            if (type === "exp") {
                newItem = new Expense(ID, des, val)
            } else {
                newItem = new Income(ID, des, val)
            }
            
            // đẩy nó vào array
            data.allItems[type].push(newItem);
            return newItem;
        },
        
        deleItem: function(type, id) {
            var ids = data.allItems[type].map(function(current) {
                
                return current.id
            })

            var index = ids.indexOf(id)

            if (index !== -1) {
                data.allItems[type].splice(index, 1)
            }
        },

        calculateBudget: function() {
            // calculate total income and expenses
            calculateTotal('exp')
            calculateTotal('inc')

            // calculate the budget: income - expenses
            data.budget = data.totals.inc - data.totals.exp

            // calculate the percentage of the income that we spend
            if (data.totals.exp > 0) {
                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100)
            } else {
                data.percentage = -1;
            }
        },
        
        calculatePercentages: function() {
            data.allItems.exp.forEach(function(cur) {
                cur.calcPercentage(data.totals.inc)
            })
        },

        getPercentages: function() {
            var allPerc = data.allItems.exp.map(function(cur) {
                return cur.getPercentage()
            })
            return allPerc
        },

        getBudget: function() {
            return {
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage
            }
        },

        testing: function() {
            return data
        }
    }
})()


var UIController = (function() {
    var DOMstrings = {
        inputType: ".add__type",
        inputDescription: ".add__description",
        inputValue: ".add__value",
        inputButton: ".add__btn",
        incomeContainer: ".income__list",
        expenseContainer: ".expenses__list",
        budgetLabel: ".budget__value",
        incomeLabel: ".budget__income--value",
        expensesLabel: ".budget__expenses--value",
        percentageLabel: ".budget__expenses--percentage",
        container: '.container',
        expensesPercLabel: ".item__percentage",
        dateLabel: '.budget__title--month'
    }

    var formatNumber = function(num, type) {
        num = Math.abs(num)
        num = num.toFixed(2)

        numSplit = num.split('.')

        int = numSplit[0]
        if (int.length > 3) {
            int = int.substr(0, int.length - 3) + "," + int.substr(int.length - 3, 3); // input 2310 = 2,310
        }
        dec = numSplit[1]

        return int + "." + dec
    }

    var NodeListForEach = function(list, callbackFunction) {
        for (var i = 0; i < list.length; i++) {
            callbackFunction(list[i], i);
        }
    }
    return {
        getInput: function() {
            return {
                type : document.querySelector(DOMstrings.inputType).value,
                description :document.querySelector(DOMstrings.inputDescription).value,
                value : parseFloat(document.querySelector(DOMstrings.inputValue).value)
            }    
        },

        addListItem: function(obj, type) {
            if (type === 'inc') {
                element = DOMstrings.incomeContainer
                var html = '<div class="item clearfix" id="inc-%id%"> <div class="item__description">%description%</div>  <div class="right clearfix"> <div class="item__value">+ %value%</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div> </div> </div>'
            } else {
                element = DOMstrings.expenseContainer
                var html = '<div class="item clearfix" id="exp-%id%"> <div class="item__description">%description%</div> <div class="right clearfix"> <div class="item__value">- %value% </div><div class="item__percentage">21%</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div> </div> </div>'
            }
            
            var newHtml = html.replace('%id%', obj.id)
            newHtml = newHtml.replace("%description%", obj.description)
            newHtml = newHtml.replace('%value%', formatNumber(obj.value, type))

            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml)
        },

        deleteListItem: function(selectorID) {
            var el = document.getElementById(selectorID)
            el.parentNode.removeChild(el)
        },

        clearFields: function() {
            var fields = document.querySelectorAll(DOMstrings.inputDescription + ", " + DOMstrings.inputValue)

            fieldsArr = Array.prototype.slice.call(fields);

            fieldsArr.forEach(function(current, index, array) {
                current.value = "";

            })

            fieldsArr[0].focus()
        },

        displayBudget: function(obj) {
            var type 
            obj.budget > 0 ? type = 'inc' : type = 'exp'
            document.querySelector(DOMstrings.budgetLabel).textContent = formatNumber(obj.budget, type);
            document.querySelector(DOMstrings.incomeLabel).textContent = formatNumber(obj.totalInc, 'inc');
            document.querySelector(DOMstrings.expensesLabel).textContent = formatNumber(obj.totalExp, 'exp');
            

            if (obj.percentage > 0) {
                document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage;
            } else {
                document.querySelector(DOMstrings.percentageLabel).textContent = "---";
            }
        },

        displayPercentages: function(percentages) {
            var fields = document.querySelectorAll(DOMstrings.expensesPercLabel)



            NodeListForEach(fields, function(current, index) {
                if (percentages[index] > 0) {
                    current.textContent = percentages[index] + "%"
                } else {
                    current.textContent = "---"
                }
                
            })
        },

        displayMonth: function() {
            var now = new Date() 
            var months = ['January', 'February', 'March', 'April', "May", "June", "July", "August", "September", 
                            "Octorber", "November", "December"]
            var month = now.getMonth()
            var year = now.getFullYear()
            document.querySelector(DOMstrings.dateLabel).textContent = months[month] + "-" + year
        },
        
        changedType: function() {

            var fields = document.querySelectorAll(
                DOMstrings.inputType + ',' +
                DOMstrings.inputDescription + "," + 
                DOMstrings.inputValue
            )

            NodeListForEach(fields, function(cur) {
                cur.classList.toggle('red-focus');
            })

            document.querySelectorAll(DOMstrings.inputButton).classList.toggle('red')
        },

        getDOMstring: function() {
            return DOMstrings
        }
    }

})();


// Global app controller
var controller = (function(budgetCtrl, UICtrl) {
    var setupEventListener = function() {
        var DOM = UICtrl.getDOMstring()

        document.querySelector(DOM.inputButton).addEventListener('click', function() {
            ctrlAddItem();
        })
    
        document.addEventListener('keypress', function(event) {
            if (event.keyCode === 13) {
                
                ctrlAddItem();
                
            }
        })
        
        // đặt 1 cái event listner ở trong thẻ có id là container
        document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem)
        
        document.querySelector(DOM.inputType).addEventListener('change', UICtrl.changedType)
    }
    
    var updateBudget = function() {

        // 1. Calculate the budget
        budgetCtrl.calculateBudget()

        // 2. Return the budget
        var budget = budgetCtrl.getBudget()

        // 3. Display the budget on the UI
        UICtrl.displayBudget(budget)
    }

    var updatePercentages = function() {
        // 1. Calculate percentage
        budgetCtrl.calculatePercentages()

        // 2. Read percentages from the budget controller
        var percentages = budgetCtrl.getPercentages()

        // 3. Update th UI with the new percentages
        UICtrl.displayPercentages(percentages)
    }

    var ctrlAddItem = function() {
        
        var input = UICtrl.getInput()
        // 1. Get the filed input data

        if (input.description !== "" && !isNaN(input.value) && input.value > 0) {
            // 2. Add the item to the budget controller
            var newItem = budgetCtrl.addItem(input.type, input.description, input.value)

            // 3. Add the item to the UI
            UICtrl.addListItem(newItem, input.type) 
            
            // 4. Clear the fields
            UICtrl.clearFields()

            // 5. Calculate the budget
            updateBudget()
            
            // 6. Update percentages
            updatePercentages()

            // 6. Display the budget on the UI

        }

    }

    var ctrlDeleteItem = function(event) {
       var itemID = event.target.parentNode.parentNode.parentNode.parentNode.id

       if (itemID) {
        var splitID = itemID.split('-')
        console.log(splitID)

        type = splitID[0];
        ID = parseInt(splitID[1])

        // Xóa trong data structure
        budgetCtrl.deleItem(type, ID)

        // Xóa trong UI
        UICtrl.deleteListItem(itemID)

        // Update lại budget
        updateBudget()


        // 6. Update percentages
        updatePercentages()
       }
    }
    return {
        init: function() {
            console.log("start");
            UICtrl.displayMonth()
            UICtrl.displayBudget({
                budget: 0,
                totalInc: 0,
                totalExp: 0,
                percentage: -1
            })
            setupEventListener()
        }
    }
})(budgetController, UIController);


controller.init();