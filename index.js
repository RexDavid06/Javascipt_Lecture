console.log("Hello world")

let num = 4 + 6
console.log(num)

let username = 'Rex-David'
console.log(typeof username)  

const pi = 3.12
console.log(pi)

num = 200
console.log(typeof num)

let firsName = 'Rex-David'
let lastName = "Buchi"
let user = firsName + " " + lastName 
console.log(user)

let user_type = null
console.log(user_type)
console.log(typeof user_type)


let x = 40
x = x + 3
console.log(x, typeof x)

x = x + ''
console.log(x, typeof x )

x = x - 3
console.log(x, typeof x)


x++
console.log(x)
x+=50
console.log(x)



let a = 4
let b = a++ //post increment

let c = 4
let d = ++c //pre increment 
console.log(b, a);
console.log(d, c);

// relational operators
console.log(7 === 7)
// always use thriple equator

//logical operators


x = 10
let y = 11
let z = 15
if (x > y && x > z){
    console.log('X is greatest')
}
else if (y > z && y > x){
    console.log('Y is greatest')
}
else{
    console.log('z is greatest')

}

// First Assignment

if (y % 2 === 0){
    console.log("It's an even  number ")
}
else{
    console.log("It's an odd number ")
}

// ternary operator ?:
let result 
result = y % 2 === 0 ? "Even": "Odd"
console.log(result)

// switch statement
let day = 'Tuesday'
switch(day){
    case 'Monday':
        console.log("7am")
        break
    case 'Tuesday':
        console.log("5am")
        break
    case 'Wednesday':
        console.log("4am")
}

//Template Literal with BACK TICKS
x = 40
y = 60
result = x + y
console.log(`the addition of ${x} and ${y} is ${result}`)


//LOOPS
// in loops there are three statges 1)initialize 2)condition 3)increment
x = 10
while(x<20){
    console.log("well")
    x++
}
//in for loop, we do all stages in one line.....tho no compulsory
for(x = 5; x <= 10; x++){
    console.log("well", x)

}

// OBJECTS IN JAVASCRIPT
let person = {
    name: "Rex-David",
    age:22,
    nationality: "Nigerian",
    tech: "Django",
    laptop: {
        cpu: "i.5",
        brand: "hp",
        gram: 16,
    }
}
console.log(typeof person)
console.log(person.name.length)


for (i = 0; i <= 5; i++){
    console.log(i)
}

// iterating over an object
//for iterating over an object, we use the "For in Loop"

for (let key in person){
    console.log(key,  person[key])
  
}


//Functions in Javascript
function greeting(user){
    return `Hello ${user}`
}
user = "Sade"
let greet = greeting(user);
console.log(greet)

//Function Expressions

function add(x, y){
    result = x + y
    return result
}


addition = add(40, 90)
console.log(addition)

// Arrow function
let salut = (user) => {
    return `Welcome ${user}`
}

let salute = salut('Rex')
console.log(salute)

let divide = (num1, num2) => {
    return num1 / num2
}

result = divide(90, 10)
console.log(result)

//For the above function, since it has only one line of code, it can be written in a better way

let subtract = (num1, num2) => num1 - num2
result = subtract(140, 40)
console.log(result)

// Creating Methods in an Object

let human = {
    name: "Rex-David",
    age:22,
    nationality: "Nigerian",
    tech: "Django",
    laptop: {
        cpu: "i.5",
        brand: "hp",
        gram: 16,
    },
    attribute: function(){
        console.log('Hello Chidi')
    }
}

human.attribute()

//Usin "this" keyword in a function
let phone1 = {
    name: "Iphone",
    color: "red",
    users:
     4900,

    getConfig: function(){
        console.log(this.name)
    }
}

let phone2 = {
    name: "Iphone",
    color: "black",
    users: 348024,

    getConfig: function(){
        console.log(this.name)
    }
}

phone1.getConfig();
phone2.getConfig();
if (phone1.users > phone2.users){
    console.log(`the first choice has ${phone1.users} users`)
} else{
    console.log(`the second choice has ${phone2.users} users`)
}
