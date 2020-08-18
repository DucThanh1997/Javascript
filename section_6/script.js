
// -----------------------------------------------
// let và const
// var name5 = "Jane Smith"
// var age5 = 23
// name5 = "Jane Hiller"

// // const ko thay doi duoc
// const name6 = "jane smith";

// // let thi thay doi duoc
// let age6 = 23

// // var thi tao bien co function scope

// // let thi tao bien co block scope

// // ES5
// function driverLicense(passedTest) {

//     if (passedTest) {
//         var firstName = "John"
//         var yearOfBirth = 1990

//         console.log(firstName + ', born in ' + yearOfBirth + 'is now allowed to drive a car')
//     }
// }

// driversLicense5(true)


// // ES6

// function driverLicense(passedTest) {

//     let firstName
//     const yearOfBirth = 1990

//     if (passedTest) {
//         let firstName = "John"
       
//     }
//     // ở đây sẽ báo lỗi vì firstName và yearOfBirth chỉ nằm trong cái block ({}) của if thôi còn var thì không
//     // bị như thế, let và var là block scoped còn var là block scoped
//     console.log(firstName + ', born in ' + yearOfBirth + 'is now allowed to drive a car')
// }

// driversLicense5(true)


// let i = 23;
// for (let i = 0; i < 5; i++) {
//     console.log(i)
// }

// console.log(i)




// -----------------------------------------------
// block và iffe

// iffe ở ES6
// {
//     const a = 1
//     let b = 2
//     console.log("a: ", a + b)
//     var c = 3
// }

// console.log(c)




// // -----------------------------------------------
// // strings

// let firstName = 'john'
// let lastName = 'Smith'

// const yearOfBirth = 1990

// function calcAge(year) {
//     return 2016 - year
// }

// //ES5
// console.log("this is " + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today he is ' + calcAge(yearOfBirth))

// // ES6
// console.log(`this is ${firstName} ${lastName}. He was bỏn in ${yearOfBirth} + '. Today he is ${calcAge(yearOfBirth)}`)


// // các method mới ở ES6

// // 1
// const n = `${firstName} ${lastName}`

// console.log(n.startsWith('J'))


// // 2 
// console.log(n.endsWith('th'))


// // 3 
// console.log(n.includes(' '))

// // 4 lặp lại 5 lần
// console.log(n.repeat(5))




// -----------------------------------------------
// arrow function

// const years = [1990, 1965, 1982, 1937]

// // ES5
// // map lướt qua mảng rồi trả về 1 cái list khác
// var ages5 = years.map(function(element) {
//     return 2016 - element
// })

// console.log(ages5)


// // ES6
// let ages6 = years.map(element => 2016 - element)
// console.log(ages6)


// ages6 = years.map((element, index) => `Age element ${index + 1}: ${2016 - element}`)
// console.log(ages6)

// ages6 = years.map((element, index) => {
//     const now = new Date().getFullYear();
//     const age = now - element

//     return `Age element ${index + 1}: ${age}`
// })

// // ES5
// var box5 = {
//     color: 'green',
//     posittion: 1,
//     clickMe: function() {
//         var self = this
//         document.querySelector('.green').addEventListener('click', function() {
//             var str = 'this is box number ' + self.posittion + ' and it is ' + self.color
//             alert(str)
//         })
//     }
// }

// box5.clickMe()



// ES6
// const box6 = {
//     color: 'green',
//     posittion: 1,
//     clickMe: function() {
//         document.querySelector('.green').addEventListener('click', () => {
//             var str = 'this is box number ' + this.posittion + ' and it is ' + this.color
//             alert(str)
//         })
//     }
// }

// // box5.clickMe()


// function Person(name) {
//     this.name = name;
// }

// Person.prototype.myFriends5 = function(friends) {

//     var arr = friends.map(function(el) {
//         return this.name + 'is friend ' + el
//     })

//     console.log(arr)
// }

// var friends = ['Bob', 'Jane', 'Mark']

// new Person('John').myFriends5(friends)







///////////////////////////////////////
// Lecture: Destructuring


// ES5
// var john = ['John', 26]
// var name = john[0]
// var age = john[1]


// ES6
// gán biến
// const [name, year] = ['John', 26]
// console.log("name: ", name);
// console.log(year)

// const obj = {
//     firstName: 'john',
//     lastName: 'Smith'
// };

// // gán biến
// const {firstName, lastName} = obj;
// console.log(firstName)

// const {firstName: a, lastName: b} = obj

// console.log(a)


// function calcAgeRetirement(year) {
//     const age = new Date().getFullYear() - year
//     return [age, 65 - age]
// }


// const [a1, b1] = calcAgeRetirement(1997)
// console.log("a: ", a1)



///////////////////////////////////////
// Lecture: Arrays

// const boxes = document.querySelectorAll('.box')


// // ES5
// var boxesArr5 = Array.prototype.slice.call(boxes);
// boxesArr5.forEach(function(cur) {
//     cur.style.backgroundColor = 'dodgerblue'
// })


// ES6
// const boxesArr6 = Array.from(boxes)
// Array.from(boxes).forEach(cur => cur.style.backgroundColor='dodgerblue')


// // ES5

// for (var i = 0; i< boxesArr5.length; i++) {
//     if (boxesArr5[i].className === 'box blue') {
//         break
//     }

//     boxesArr5[i].textContent = 'I changed to blue'
// }
 

// var ages = [12, 17, 8, 21, 14]

// var full = ages.map(function(cur) {
//     return cur >= 18
// });

// console.log(full)

// console.log(full.indexOf(true))

// // trả về vị trí theo điều kiện
// console.log(ages.findIndex(cur => cur >= 18))

// console.log(ages.find(cur => cur >= 18))



///////////////////////////////
// Lecture: Spread operator


// function addFourAges(a, b, c, d) {
//     return a + b + c + d
// }

// var sum1 = addFourAges(18, 30, 12, 21)

// console.log(sum1)

// // ES5

// var age = [18, 30, 12, 21]

// var sum2 = addFourAges.apply(null, age)
// console.log(sum2)


// // ES6
// const max3 = addFourAges(...age)
// console.log(max3)

// const familySmith = ['John', 'Jane', 'Mark']

// const familyMiller = ['Mary', 'Bob', 'Ann']

// // ... để gộp nó lại
// const bigFamily = [...familySmith, 'Lily', ...familyMiller]

// const h = document.querySelector('h1');
// const boxes = document.querySelectorAll('.box')
// // cũng có thể làm trên các node list
// const all = [h, ...boxes];

// Array.from(all).forEach(cur => cur.style.color  ='purple')



/////////////////////////////////////
// Lecture: Rest parameters

// Spread gộp nhiều cái thành 1 cái còn Rest ngược lại


// ES5
// function isFullAge5() {
//     // console.log(arguments)
//     // biến cái này thành Arrat
//     var argsArr = Array.prototype.slice.call(arguments)

//     argsArr.forEach(cur => {
//         console.log(2016 - cur) >= 18
//     })
// }

// isFullAge5( 1990, 1997, 1999)

// ES6
// function isFullAge6(...years) {
//     years.forEach(cur => {
//         console.log(2016 - cur)
//     })
// }

// isFullAge6( 1990, 1997, 1999)


// spread dùng khi gọi hàm còn rest dùng khi định nghĩa hàm


// function isFullAge5(limit) {
//     // console.log(arguments)
//     // biến cái này thành Arrat
//     var argsArr = Array.prototype.slice.call(arguments, 1)
//     console.log(argsArr)
//     argsArr.forEach(cur => {
//         console.log((2016 - cur) >= limit)
//     })
// }

// isFullAge5(21, 1990, 1997, 1999)

// ES6
// function isFullAge6(limit, ...years) {
//     years.forEach(cur => {
//         console.log((2016 - cur) >= limit)
//     })
// }

// isFullAge6(21, 1990, 1997, 1999)


/////////////////////////////////////
// Lecture: Default Param


// ES5

// function SmithPerson(firstName, yearOfBirth, lastName, nationality) {

//     lastName === undefined ? lastName = 'Smith' : lastName = lastName
//     nationality === undefined ? nationality = 'Việt Nam' : nationality = nationality

//     this.firstName = firstName
//     this.lastName = lastName
//     this.yearOfBirth = yearOfBirth
//     this.nationality = nationality
// }

// ES6
// function SmithPerson(firstName, yearOfBirth, lastName='Smith', nationality='Việt Nam') {
//     this.firstName = firstName
//     this.lastName = lastName
//     this.yearOfBirth = yearOfBirth
//     this.nationality = nationality
// }
// var john = new SmithPerson('John', 1990)

// var mary = new SmithPerson('mary', 1999, 'Diaz', 'Spanish')



/////////////////////////////
// Maps

// maps khác object ở chỗ nó có thể dùng bất cứ thứ gì làm keys trong khi object chỉ có thể để key là dạng string

// const question = new Map()

// // cách tạo 1 key-value
// question.set('question', 'Cái nào đang được dùng nhiều nhất')

// question.set(1, 'ES5')

// question.set(2, 'ES6')

// question.set(3, 'ES2015')

// question.set(4, 'ES7')

// question.set('correct', 3)

// question.set(true, 'đúng')

// question.set(false, 'sai')

// cách lấy 1 value

// console.log(question.get('question'))

// cách lấy len của question
// console.log(question.size)

// cách xóa 1 key
// question.delete(4)

// kiểm tra xem có key đó ko
// console.log(question.has(4))

// xóa mọi key
// question.clear()

// MAPS có thể loop qua còn object thì không

// question.forEach((value, key) => {
//     console.log(`key ${key}`)
// })

// for (let [key, value] of question.entries()) {
//     if (typeof(key) === "number") {
//         console.log(`value ${value}`)
//     }
// }

// const ans = parseInt(prompt('Write the correct answer'))

// console.log(question.get(ans === question.get('correct')))



/////////////////////////////
// Classes


// ES5
// var Person5 = function(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job
// }

// Person5.prototype.calculateAge = function() {
//     var age = new Date().getFullYear - this.yearOfBirth;
//     console.log(age)
// }

// var john5 = new Person5('John', 1990, 'teacher')

// //ES6
// class Person6 {
//     constructor (name, yearOfBirth, job) {
//         this.name = name
//         this.yearOfBirth = yearOfBirth
//         this.job = job 
//     }

//     calculateAge() {
//         var age = new Date().getFullYear - this.yearOfBirth;
//         console.log(age)
//     }

//     // static không động gì đến các constructor
//     static greeting() {
//         console.log('alo')
//     }
// }

// const john6 = new Person6('John', 1990, 'teacher')

// class không dùng hoisted được nên phải viết trước rồi mới dùng sau được


/////////////////////////////////////////
// class and subclasses


// ES5
// var Person5 = function(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job
// }

// Person5.prototype.calculateAge = function() {
//     var age = new Date().getFullYear() - this.yearOfBirth;
//     console.log(age)
// }

// var Athlete5 = function(name, yearOfBirth, job, olympicGames, medal) {
//     Person5.call(this, name, yearOfBirth, job)
//     this.olympicGames = olympicGames
//     this.medal = medal
// }

// Athlete5.prototype.wonMedal = function() {
//     this.medals++
//     console.log(this.medals)
// }


// Athlete5.prototype = Object.create(Person5.prototype)

// var johnAth = new Athlete5('John', 1990, 'swimmer', 3, 10)

// johnAth.calculateAge()
// johnAth.wonMedal()




/////////////////////
// Excercise

class Element {
    constructor(name, buildYear) {
        this.name = name,
        this.buildYear = buildYear
    }

}

class Parks extends Element {
    constructor(name, buildYear, numberTree, parkArea) {
        super(name, buildYear)
        this.numberTree = numberTree
        this.parkArea = parkArea
    }

    calcDensity() {
        return this.numberTree/this.parkArea
    }
}

function averageAgePark(...listAge) {
    let sum = 0
    const numberr = listAge.length
    listAge.forEach(element => {
        sum = sum + element
    })

    return sum/numberr
}

function parkMoreThan1000Tree(...listPark) {
    let name = []
    listPark.forEach(element => {
        console.log("element.numberTree: ", element.numberTree)
        if (element.numberTree > 1000) {
            console.log("name")
            name.push(element.name)
        }
    })
    return name
}

park1 = new Parks("Thủ lệ", 1997, 1100, 6)
console.log(park1)
park2 = new Parks("Vầng trăng", 1990, 2000, 6)
park3 = new Parks("Thanh Nhàn", 2000, 900, 6)
park4 = new Parks("Lê nin", 1997, 1500, 6)

console.log("park1: ", park1.calcDensity())
console.log("park2: ", park2.calcDensity())
console.log("park3: ", park3.calcDensity())
console.log("park4: ", park4.calcDensity())

console.log("trung bình số tuổi: ", averageAgePark(park1.buildYear, park2.buildYear, park3.buildYear, park4.buildYear))

console.log("có nhiều hơn 1000 cây: ",parkMoreThan1000Tree(park1, park2, park3, park4))