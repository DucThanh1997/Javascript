// Variable and data type

// var firstName = 'John';
// console.log('Hello world');

// var lastName = 'Smith';
// var age = 28;

// var fullAge = true;

// console.log(fullAge);

// var job;
// console.log(job)

// job = 'Teacher';
// console.log(job)

// có 5 kiểu number, string, bool, undefined, null

// không bắt đầu tên của biên bằng số được 

// -------------------------------------------------------

// Variable mutation and type coercion



// var firstName = 'Smith';
// var age = 28;

// console.log(firstName + ' ' + age);

// var job, isMarried;
// job = 'teacher';
// isMarried = false;
// console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married?' + isMarried);

// Variable mutation

// age = 'twemty eight';

// alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married?' + isMarried);

// var lastName = prompt('what is his last name');

// console.log("lastName: ", lastName);


// -------------------------------------------------------

// // Basic Operator


// var now = 2020
// var yearJohn = now - 28;
// var yearMarrk = now - 33;

// console.log(yearJohn)

// // Math Operator
// console.log(now + 2);
// console.log(now * 2);
// console.log(now / 10)

// // Logical operators
// var johnOlder = ageJohn < ageMark;
// console.log(johnOlder);

// // typeof operator

// console.log(typeof johnOlder);
// console.log(typeof ageJohn);
// console.log(typeof 'mark is good');
// var x;
// console.log(typeof x);

// ---------------------------------------------------------
// Operator precedence - thứ tự thực hiện các phép operator

// var now = 2018;
// var yearJohn = 1989;
// var fullAge = 18;

// // phép trừ trước phép so sánh sau và phép bằng ở cuối
// var isFullAge = now - yearJohn >= fullAge;
// console.log(isFullAge);

// var ageJohn = now - yearJohn;
// var ageMark = 35;
// // dấu mở ngoặc trước rồi trong dấu mở ngoặc là dấu + sau đó là chia rồi mpwos bằng
// var average = (ageJohn + ageMark) / 2;
// console.log(average);

// var x, y;

// // x không bị là undefined vì cái dấu bằng chạy từ phải sang trái
// x = y = (3 + 5) * 4 - 6;

// console.log(x, y)

// // More operators

// x = x * 2;

// // tương đương với

// x *= 2;
// x += 10; 



// -----------------------------------------------------------------

// Coding challange

// markMass = 70
// markHeight = 1.7

// johnMass = 60
// johnHeight = 1.8

// markBMI = markMass / (markHeight * markHeight)
// johnBMI = johnMass / (johnHeight * johnHeight)
// console.log(markBMI, johnBMI)
// console.log("Is Mark's BMI highe than John's? " + (markBMI > johnBMI))



// -----------------------------------------------------------------

// if else statement

// var firstName = 'John';
// var civilStatus = 'Single';

// if (civilStatus === 'married') {
//     console.log(firstName + 'is married')
// } else {
//     console.log(firstName + 'is single')
// }



// -----------------------------------------------------------------

// Bollean Logic

// var firstName = 'John';
// var age = 16;

// if (age < 13) {
//     console.log(firstName + ' is a boy');
// } else if (age >= 13 && age < 18){
//     console.log(firstName + ' is a teenager')
// } else if (age > 18 && age < 30) {
//     console.log(firstName + ' is a young man')
// } else {
//     console.log(firstName + ' is a man.')
// }


// // -----------------------------------------------------------------

// // Tenary Operator

// var firstName = 'John';
// var age = 16;

// age >= 188 ? console.log(firstName + ' drinks beer.')
// : console.log(firstName + ' drinks juice')

// var drink = age >= 18 ? 'beer' : 'juice';
// console.log(drink);

// // Switch statement
// var job = 'teacher';

// switch (job) {
//     case 'teacher':
//     case 'instuctor':
//         console.log(firstName + ' teaches')
//         break;
//     case 'driver':
//         console.log(firstName + ' drives an uber')
//         break;
//     case 'designer':
//         console.log(firstName + ' design web');
//         break;
//     default:
//         console.log(firstName + ' does something else');
// }

// switch (true) {
//     case age < 13:
//         console.log('kid')
//         break
//     case age >= 13 && age <= 18:
//         console.log('teenager')
//         break
//     case age > 18 && age < 30:
//         console.log('young man')
//         break
//     default:
//         console.log('man')
//         break
// }




// // -----------------------------------------------------------------

// // Truthy and Falsy

// // falsy: values: undefined, null, 0, ', NaN
// // truthy values: không phải là falsy values


// // === so sánh cả type
// // == so sánh giá trị thôi
// var height;

// height = 0;

// if (height || height === 0) {
//     console.log('Variable is defined');
// } else {
//     console.log('Variable has NOT been defined')
// }



// // -----------------------------------------------------------------

// // Coding Challenge 2

// john = (89 + 120 + 103) / 3

// mark = (116 + 94 + 123) / 3

// console.log(john)
// console.log(mark)
// var winner = john > mark ? john : mark

// var name = winner >= john ? name = "Mark" : name = "John"

// console.log(name)


// mary = (97 + 134 + 105) / 3

// winner > mary ? console.log("name: ", name) : console.log("mary: ", mary) 



// // -----------------------------------------------------------------

// // Functions

// function calcuAge(birthYear) {
//     return 2020 - birthYear
// }

// var ageThanh = calcuAge(1997)
// var ageHien = calcuAge(1999)
// var ageDat = calcuAge(2000)

// console.log(ageThanh)
// console.log(ageHien)
// console.log(ageDat)

// function yearUntilsRetireREMENT(birthYear, firstName) {
//     var age = calcuAge(birthYear)
//     var yearUntilRetirement = 60 - age
//     console.log(firstName + " còn "  + yearUntilRetirement + " năm")
// }

// yearUntilsRetireREMENT(1997, "Thanh")




// // -----------------------------------------------------------------

// // Functions Statement and Epression
// // Functions Epression
// var whatDoYouDo = function(job, firstName) {
//     switch (job) {
//             case 'teacher':
//                 return firstName + ' teaches'
//                 break;
//             case 'driver':
//                 return firstName + ' drives an uber'
//                 break;
//             case 'designer':
//                 return firstName + ' design web'
//                 break;
//             default:
//                 return firstName + ' does something else';
//         }
// }

// console.log(whatDoYouDo('teacher', 'John'))

// // Statement chỉ thực hiện 1 hành động nào đó chứ không trả ra gì cả
// // Expression luôn trả ra 1 cái gì đó (return)



// // -----------------------------------------------------------------

// // Arrays

// // tạo ra array
// var names = ['John', 'Mark', 'Jane']
// var years = new Array(1990, 1969, 1948)

// console.log (names[2])
// console.log(names.length)


// // chỉnh sửa array
// names[1] = 'Ben'
// names[names.length] = 'Mary'
// console.log(names)

// // 1 array có thể có nhiều kiểu data
// var john = ['John', 'Smith', 1990, false]

// // thêm vào cuối
// john.push('blue');
// //thêm vào đầu
// john.unshift('Mr.')
// console.log(john)

// // bỏ cái cuối
// john.pop();
// john.pop();
// // bỏ cái đầu
// john.shift()
// console.log(john)

// // lấy vị trí của phần tử 23
// console.log(john.indexOf(23))

// var isDesigner = john.indexOf('designer') === -1 ?
// 'John is not a designer' : 'jhon is a desginer'

// console.log(isDesigner)


// // -----------------------------------------------------------------

// // Coding Challenge 3

// var tips = []
// var finalPaid = []

// firstRes = 124 / 100 * 15
// tips.push(firstRes)
// finalPaid.push(firstRes + 124)

// firstRes = 48 / 100 * 20
// tips.push(firstRes)
// finalPaid.push(firstRes + 48)

// firstRes = 268 / 100 * 10
// tips.push(firstRes)
// finalPaid.push(firstRes + 268)

// console.log(tips)
// console.log(finalPaid)




// // -----------------------------------------------------------------

// // Object và properites
// // trong 1 object có thể chưa nhiều kiểu dữ liệu
// // array hay object trong 1 object cũng được
// var john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     birthYear: 1990,
//     family: ['Jane', 'Mark', 'Bob'],
//     job: 'teacher',
//     isMarried: 'false',

// }

// console.log(john.firstName);
// console.log(john["lastName"]);

// var x = 'birthYear';

// console.log(john[x]);

// john.job = 'driver';
// console.log(john["driver"]);

// john['isMarried'] = true;
// console.log(john)

// // 1 kiểu khai báo khác
// var jane = new Object();

// jane.firstName = 'Jane'
// jane.birthYear = 1997
// jane["lastName"] = 'Smith'
// console.log(jane)



// // -----------------------------------------------------------------

// // Object và method
// // bạn có thể thêm method vào trong object nữa
// // khá mạnh

// var john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     birthYear: 1990,
//     family: ['Jane', 'Mark', 'Bob'],
//     job: 'teacher',
//     isMarried: 'false',
//     // this.birthYear = John.birthyear
//     calcuAge: function(yearNow) {
//         this.age = yearNow - this.birthYear;
//     }
// }

// john.calcuAge(2020);
// console.log(john)


// -----------------------------------------------------------------

// coding challenge

// john = {
//     mass: 76,
//     height: 1.77,
//     calBMI: function() {
//         this.BMI = this.mass / (this.height * this.height)
//     }

// }

// mark = {
//     mass: 78,
//     height: 1.9,
//     calBMI: function() {
//         this.BMI = this.mass / (this.height * this.height)
//     }

// }
// john.calBMI()
// mark.calBMI()

// if (john.BMI > mark.BMI) {
//     console.log("john")
// } else {
//     console.log("mark")
// }

// // -----------------------------------------------------------------

// // loops and iteration

// // for loop
// for (var i = 1; i <= 20; i+= 2) {
//     console.log("i: ", i)
// }

// var john = ['John', 'Smith', 1990, false]

// for (var i = 0; i < john.length; i++) {
//     console.log(john[i])
// }

// //while loop
// var i = 0
// while (i < john.length) {
//     console.log(john[i]);
//     i++
// }

// continue and break statements
// var john = ['John', 'Smith', 1990, false]

// for (var i = 0; i < john.length; i++) {
//     if (typeof john[i] != 'string') {
//         continue;
//     } else {
//         console.log(john[i]);
//         break;
//     }
    
// }

// for (var i = john.length-1; i >= 0; i--) {
//     console.log(john[i])
// }




// -----------------------------------------------------------------

// loops and iteration

john = {
    bills: [124, 48, 268, 180, 42],
    calcuTip: function() {
        finalPaid = [];
        tips = []
        for (var i = 0; i < this.bills.length; i++) {
            if (this.bills[i] < 50) {
                tip = this.bills[i] / 100 * 20
                tips.push(tip)
                finalPaid.push(this.bills[i] + tip)
            } else if (this.bills[i] > 50 || this.bills[i] < 200) {
                tip = this.bills[i] / 100 * 15
                tips.push(tip)
                finalPaid.push(this.bills[i] + tip)
            } else {
                tip = this.bills[i] / 100 * 10
                tips.push(tip)
                finalPaid.push(this.bills[i] + tip)
            }
        }
        this.finalPaid = finalPaid
        this.tips = tips
    }
}

john.calcuTip()

mark = {
    bills: [77, 375, 110, 45],
    calcuTip: function() {
        finalPaid = [];
        tips = []
        for (var i = 0; i < this.bills.length; i++) {
            if (this.bills[i] < 100) {
                tip = this.bills[i] / 100 * 20
                tips.push(tip)
                finalPaid.push(this.bills[i] + tip)
            } else if (this.bills[i] > 100 || this.bills[i] < 300) {
                tip = this.bills[i] / 100 * 15
                tips.push(tip)
                finalPaid.push(this.bills[i] + tip)
            } else {
                tip = this.bills[i] / 100 * 10
                tips.push(tip)
                finalPaid.push(this.bills[i] + tip)
            }
        }
        this.finalPaid = finalPaid
        this.tips = tips
    }
}

mark.calcuTip()
console.log(john.tips)

function averageTips(tips) {
    sum = 0
    for (var i = 0; i < this.tips.length; i++) {
        sum += tips[i]
    }
    average = sum / tips.length
    console.log(average)
    return average
}

johnAver = averageTips(john.tips)
markAver = averageTips(mark.tips)

if (johnAver < markAver) {
    console.log("mark")
} else {
    console.log("john")
}
