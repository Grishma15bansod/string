//string
//primitive data type
// used to store textual data
// way of writing string in js
// 1. ''
// 2.""
// 3.`backticks`

let amount = 100
let billMsg = `pls pay rs ${amount} hear`  //templete litrals
console.log(billMsg);



// let guesList = `Guests:
// rahul
// grishmas
// pratik`
// console.log(guesList );

let guesList='Guests:\n *rahul\n *shubam\n *abhishek'
console.log(guesList);

//multiple lines in the code but in the console it show in a single line


//escape charecter

// let str ='heelo,how\'are you doing'
// console.log(str);

// let str ="heelo,how\"are \"you doing"
// console.log(str);

// let str = "hello"
// console.log(str.length);


// //----------------assing String charecter

// console.log(str[1]);
// console.log(str.charAt(2));

//------------------string are  immutable in js
// let str = "abc"
// //str="apple"
// str[0]="d"
// console.log(str[0]);



// //----------------- concatination
// let name1='grishma bansod'
// let age =22;
// console.log(`${name1} is ${age}`);

// let statement = name1+"is"+age+"year old"
// console.log(statement);


// let newStr = name1.concate(age)
// console.log(newStr);

//--------------string method

//===============INDEX OF
// str= 'widget with id'

// console.log(str.indexOf('With'));
// console.log(str.indexOf('id'));
// console.log(str.indexOf('id',2));
// console.log(str.indexOf('t',3));
// console.log(str.indexOf('Widget'));

// console.log(str.indexOf('widget'));//-----case sensitive




//====================includes()
//  let str= 'Widget'
// console.log(str.includes('id'));

//================slice
// let str ="stringify"
// console.log(str.slice(0,5));  //exclude 5 

// console.log(str.slice(0,1));
// console.log(str.slice(2));

//-----------------------substring
// let str = 'stringify'
// console.log(str.substring(2,6));///it dose not use for negative index

// //=----------------splite works only on string

// //this methode convert into an array
// let greeting ="hi how are you"
// // let resultArr = greeting.split(' ')
// let resultArr = greeting.split(' o')


// console.log(resultArr);

// console.log(resultArr.join('_'));

// let example = "what*are*you*doing"
// let result=example.split('*')
// console.log(example.split('*'));
// console.log(result.join(' '));
// console.log(result.join('\n '));
// console.log(result.join(str.split('*').join('_')));//chainable
// console.log(greeting.split(' ').reverse().join(' '));



// //join works on arry
// //splite works on string

// //-----------------reverse
// let string ="HELLO"
// let revStr =""
// for(let i =string.length-1;i>=0;i--){
//     revStr+=string[i]

// }
// console.log(revStr);


// //---------------------trim
// let stri='                      hiii ****there is grishma                     '
// console.log(stri.trim());
// console.log(stri);
// console.log(stri.toLocaleUpperCase());


// let user={
//     name:"grishma",
//     isAdmin:true,
//     array:[1,2,3,4,5],
//     obj:{
//         insideObj:'this is inside'
//     }
// }
// console.log(user.name);
// console.log(user.obj.insideObj);
// console.log(user.array[2]);


// let num1 ="12345"//automatically converted to the number(coercion) then the comparison is done
// let num = 12345

// let str="ADAAAA"

// console.log(str.length["A"]);
// console.log(str.length["D"]);



let str = "ADAAAA"
console.log(str.indexOf("ADAAAA"));














