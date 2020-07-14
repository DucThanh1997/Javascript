// // Function constructor

// có 2 kiểu dữ liệu lớn primitive và object
// primitive number, string, booleam, undefined, null
// object array, function, methods

//
// Dữ liệu trong javascript có 2 loại là Primitives và Object
// Primitive là Numbers, Strings, Boolean, Undefined, Null
// Object là Array, Function, Object, Date


// Js có Constructor (Class trong python), và Inheritance
// (thừa kế, contructor này có các thuộc tính của consctructor kia)

// propotype của 1 constructor là nơi chúng ta đưa các method và proprties mà chúng ta muốn các instance
// hoặc các constructor khác được thừa kế

// mọi object đều thừa kế từ Object object

// var Person = function(name, yearOfBirth, job) {
//     this.name = name
//     this.yearOfBirth = yearOfBirth
//     this.job = job
//     this.calculateAge = function() {
//         console.log(2020 - this.yearOfBirth)
//     }
// }
// muốn các instance được kế thừa từ thằng Person thì phải đưa các method hoặc propoties vào prototype

// khi tìm kiếm các method hoặc propoties nó sẽ tìm kiếm các method hoặc propotype trong nó nếu ko có thì sẽ tìm
// trong prototype tức là các method, propoties của thằng cha nó, nếu ko tìm thấy lại tìm trong thằng ông nó
// Person.prototype.calculateAge = function() {
//     console.log(2020 - this.yearOfBirth)
// }

// Person.prototype.lastName = 'Smith'

// var john = new Person("john", 1990, "teacher")
// khi gọi từ new chúng ta tạo ra 1 empty object rồi điền Person và các argument của Person vào thế là có 
// 1 instance của constructor Person

// var jane = new Person('Jane', 1969, 'designer')

// var mark = new Person('Mark', 1948, 'retired')

// john.calculateAge();
// jane.calculateAge();
// mark.calculateAge();

// console.log(john.lastName)


// --------------------------


// // Object.create

// var personProto = {
//     calculateAge: function() {
//         console.log(2016 - this.yearOfBirth)
//     }
// }
// // personProto ở đây sẽ là prototype của thằng object John, 
// var john = Object.create(personProto)

// john.name = 'John';
// john.yearOfBirth = 1990;
// john.job = 'teacher'


// // cách khác
// var jane = Object.create(personProto, {
//     name: {value: 'Jane'},
//     yearOfBirth: { value: 1969 },
//     job: { value: 'designer' }
// })

// // Object.create kế thừa trực tiếp prototype đó




// --------------------------


// // Object vs primitives

// // primitives chứa data ở trong biến của nó

// // biến của object không chứa data mà chỉ trỏ đến cái objeect đó



// var a = 23;
// var b = a;
// a = 46;

// console.log(a)
// console.log(b)

// var obj1 = {
//     name: 'john',
//     age: 26
// }

// // khi tạo obj2 chúng ta không tạo obj2 mà chỉ tạo 1 cái copy đến đường dẫn của obj1 trong bộ nhớ chỉ cần thay đổi 1 cái
// // là cả 2 cùng thay đổi, ngược lại với ví dụ trên
// var age = 27;
// var obj = {
//     name: 'Jonas',
//     city: "Lisbon"
// }
// var obj2 = obj1;
// obj1.age = 30
// console.log(obj1.age)
// console.log(obj2.age)


// function change(a, b) {
//     // tạo 1 cái copy khác ko ảnh hưởng đến cái biến primitive bên ngoài
//     a = 30;
//     // chuyền vào function thì nó thay đổi được vì nó ko tạo ra bản copy
//     b.city = 'San Francisco'
// }
// change(age, obj) 

// console.log(age)
// console.log(obj.city)









// --------------------------
// - Function là object
// - Function có thể trả về 1 function khác
// - Function có thể có argument là function
// - Function có thể gán vào 1 biến

// // Function gọi function
// function được gọi làm 1 argument trong 1 function khác gọi là callback function
// var years = [1990, 1995, 1937, 2005, 1998]

// // function gọi được function khác làm argument
// function arrayCalc(arr, fn) {
//     // fn là callback function vì nó được gọi trong function khác
//     var arrRes = []
//     for (var i = 0; i < arr.length; i++) {
//         arrRes.push(fn(arr[i]))
//     }
//     return arrRes
// }

// function fullAge(el) {
//     return el >= 18
// }

// function calculateAge(el) {
//     return 2020 - el
// }
// // callback function không có dấu () vì nó là callback function
// age = arrayCalc(years, calculateAge)
// console.log(age)


// var fullAges = arrayCalc(age, fullAge)
// console.log(fullAges)


// --------------------------


// // Function trả về function

// function interviewQuestion(job) {
//     if (job === 'designer') {
//         return function(name) {
//             console.log(name + " is designer")
//         }
//     } else if (job === 'teacher') {
//         return function(name) {
//             console.log(name + " is teacher")
//         }
//     } else {
//         return function(name) {
//             console.log("hello")
//         }
//     }
// }

// var teacherQuestion = interviewQuestion('teacher')
// // teacherQuestion sẽ là 1 function sau đó gọi được nó ở dưới

// teacherQuestion('john')


// var designerQuestion = interviewQuestion('designer')
// designerQuestion('jane')

// // gọi luôn kiểu này cũng được
// interviewQuestion('teacher')('Mark')


// --------------------------


// // Imediately invoked function expression == iffe

// // function game() {
// //     var score = Math.random() * 10
// //     console.log(score >=5)
// // }

// // game()

// // iffe tạo 1 scope khác khỏi global scope, hỗ trợ data privacy
// (function () {
//     var score = Math.random() * 10
//     console.log(score >=5)
// }) ();


// // nếu không có ()  thì js sẽ hiểu là chúng ta đang tạo 1 function mới và không có tên nốt thì nó sẽ lỗi

// // cái gì ở trong () sẽ ko là declare mà là statment 

// // gọi cái () để gọi nó giúp cho không ai có thể gọi các biến bên trong iffe

// // truyền param vào trong cái () cạnh function

// //truyền agurment ở cái () ở cuối
// (function () {
//     var score = Math.random() * 10
//     console.log(score >=5)
// }) ();


// // chỉ có thể gọi iffe lại 1 lần




// --------------------------


// // Closure



// function retirement(retireAge) {
//     var a = ' năm trước khi nghỉ hưu'
//     return function(yearOfBirth) {
//         var age = 2020 - yearOfBirth
//         console.log((retireAge - age) + a)
//     }
// }


// var retirementUS = retirement(66);

// retirementUS(1997)
// retirement(55)(1997)


// // function ở trong luôn có thể lấy biến và param của function cha nó ngay cả khi cha nó return rồi

// //function đi rồi nhưng biến nó vẫn lưu lại kể cả khi nó đã return rồi


// var retirementGerman = retirement(65);

// var retirementIceland = retirement(67);


// retirementGerman(1997)
// retirementIceland(1997)

// function interviewQuestion(job) {
//     var a = "is"
//     var b = "what do you do"
//     if (job === 'designer') {
//         return function(name) {
//             console.log(name + " "  + a + " designer")
//         }
//     } else if (job === 'teacher') {
//         return function(name) {
//             console.log(name + " "  + a + " teacher")
//         }
//     } else {
//         return function(name) {
//             console.log(name + " " + b + "?????")
//         }
//     }
// }
// interviewQuestion("designer")("Thành")
// interviewQuestion("teacher")("Thành")
// interviewQuestion("developer")("Thành")


// -------------------------
// Lecture: Bind, call and apply

var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'fomal') {
            console.log('Good' + timeOfDay)
        } else {
            console.log('Hey')
        }
    }
}
var emily = {
    name: 'Emily',
    age: 22,
    job: 'desiger',
}
john.presentation('fomal', 'morning')

// call cho phép mượn method của object này cho object khác
john.presentation.call(emily, "friendly", 'afternoon')


john.presentation.apply(emily, ['fomal', 'afternoon'])

// gán method vào trong 1 cái biến khác mà không cần điền đầy đủ argu vào điền sau cũng được
var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning')






