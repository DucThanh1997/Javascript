///////////////////////////////////////
// Lecture: Hoisting

// functions
// calculateAge(1997)

// function calculateAge(year) {
//     console.log(2020-year)
// }

// // retirement(1997)

// // hoisting không làm việc được với function expression còn làm vc được với
// // function declaration
// var retirement = function(year) {
//     console.log(65 - (2020-year));
// }

// // variables

// // hoising tìm mấy cái biến trước nhưng chưa gán value vào
// console.log(age);
// var age = 23;












///////////////////////////////////////
// Lecture: Scoping


// First scoping example

// var a = 'Hello!';
// first();

// function first() {
//     var b = 'Hi!';
//     second();

//     function second() {
//         var c = 'Hey!';
//         console.log(a + b + c);
//     }
// }

// các child có thể access các biến của cha nó nhưng cha nó ko access được vào
// thằng con trừ khi nó return ra



// Example to show the differece between execution stack and scope chain


// var a = 'Hello!';
// first();

// function first() {
//     var b = 'Hi!';
//     second();

//     function second() {
//         var c = 'Hey!';
//         third()
//     }
// }

// function third() {
//     var d = 'John';
//     console.log(a + b + c + d);
// }




///////////////////////////////////////
// Lecture: The this keyword


// console.log(this)

// calculateAge(1997)

// function calculateAge(year) {
//     console.log(2020-year)
//     console.log(this)
// }

var john = {
    name: 'john',
    yearOfBirth: 1997,
    calculateAge: function() {
        console.log(this)

        // function innerFunction() {
        //     console.log(this)
        // }
        // innerFunction()

    }
}

john.calculateAge()


var mike = {
    name: 'mike',
    yearOfBirth: 1984,

};

mike.calculateAge = john.calculateAge;

mike.calculateAge()