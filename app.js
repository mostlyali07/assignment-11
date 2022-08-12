
// Q1
// var result = 1;
// function power(a, b) {
//     for (i = 1; i <= b; i++) {
//         result = result * a;
        
//     }
//     return result;
// }
// var p = power(2, 10)
// console.log(p)


// Q2

// var year = +prompt("Enter year")
// if (year % 4 === 0) {
//     if (year % 400 === 0) {
//         if (year % 100 === 0) {
//             console.log("year its leap year")
//         }
//         else {
//             console.log("year its not leap year becasue not divided by 100")
//         }
//     }
//     else {
//         console.log("year its not leap year becuase not divide by 400")
//     }
// }
// else {
//     console.log("year its not leap year becuase not divided by 4")
// }


// // Q3
// function side(a, b, c) {
//     return a + b + c / 2
// }
// function area(triSides, a, b, c) {
//     return triSides * (triSides - a) * (triSides - b) * (triSides - c)
// }
// var sideA = +prompt("Enter a side 1")
// var sideB = +prompt("Enter a side 2")
// var sideC = +prompt("Enter a side 3")



// var s = side(sideA, sideB, sideC)
// var area = area(s, sideA, sideB, sideC)
// console.log(`Area of triangle is : ${area}`)


// // Q4
// function average(s1, s2, s3) {
//     return (s1 + s2 + s3) / 3
// }
// function percentage(s1, s2, s3) {

//     obtM = s1 + s2 + s3;
//     return (obtM / 300) * 100;
// }

// function main(a, b) {
//     // return a,b
//     console.log(`Average of the student :  ${Math.round(a)}`)
//     console.log(`Percentage of the student :  ${Math.round(b)}`)
// }

// var m1 = +prompt("Enter marks 1 out of 100")
// var m2 = +prompt("Enter marks 2 out of 100")
// var m3 = +prompt("Enter marks 3 out of 100")

// var a = average(m1, m2, m3)
// var p = percentage(m1, m2, m3)
// main(a, p)


// // Q5 

// function indexOf(str, findIndex) {
//     for (i = 0; i < str.length; i++) {
//         if (findIndex === str.slice(i, findIndex.length + i)) {
//             console.log(i, str.slice(i, findIndex.length + i))
//         }
//         else {
//             console.log(-1)
//             break;
//         }
//     }
// }
// var str = prompt("Enter a sentence : ")
// var Index = prompt("Enter a index word : ")
// indexOf(str, Index)



// // Q6

// function removedVowels(str) {
//     var updatedStr = ""
//     var vowels = ["a", "e", "i", "o", "u"]
//     for (i = 0; i < str.length; i++) {
//         if (vowels.indexOf(str[i]) === -1) {
//             updatedStr += str[i];
//         }
//     }
//     return updatedStr;
// }
// userInput = prompt("Enter a sentece for remove vowels : ")
// var fun = removedVowels(userInput)
// console.log(fun)



// // Q7
// var count = 0;
// function removedVowels(str) {

//     var vowels = ["ae", "ea", "ei", "ie", "ia", "ai", "ui", "oa", "ao", "ua", "au"]
//     for (i = 0; i < str.length; i++) {
//         for (j = 0; j < vowels.length; j++) {
//             if (str.slice(i, i + 2) == vowels[j]) {
//                 count++;
//             }
//         }
//     }
//     return count;
// }
// var str = prompt("Enter your sentence");
// console.log(removedVowels(str))




// // Q8
// function kmToMeter(km) {

//     // 1km = 1000 meter
//     return km * 1000;
// }
// function kmToInches(km) {

//     // 1km = 39370.0787inches
//     return km * 39370.0787;
// }

// function kmTofeet(km) {

//     // 1km = 3280.8399feet
//     return km * 3280.8399
// }

// function kmToCentimeter(km) {

//     // 1km = 100000cm

//     return km * 100000
// }
// function KmConversion(m, inches, feet, cm) {

//     console.log(`${km} is eqaul to ${m}`)
//     console.log(`${km} is eqaul to ${inches}`)
//     console.log(`${km} is eqaul to ${feet}`)
//     console.log(`${km} is eqaul to ${cm}`)
// }
// var km = +prompt("Enter kilometer")
// var k2cm = kmToCentimeter(km)
// var k2inc = kmToInches(km)
// var k2m = kmToMeter(km)
// var k2f = kmTofeet(km)

// KmConversion(k2cm, k2inc, k2f, k2m)




// // Q9
// function overTime(hours, currentSalary) {
//     var nonFractional = Math.floor(hours)
//     var overTimeAmount = 12;
//     if (hours > 40) {
//         return (overTimeAmount * (nonFractional - 40)) + currentSalary;
//     }
//     else {
//         return currentSalary;
//     }
// }
// var hours = +prompt("Enter your hours")
// var currentSalary = +prompt("Enter your Current Salary")
// console.log(overTime(hours, currentSalary))
