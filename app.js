// alert("Hello World");
// console.log("Hello World");
// document.write("Hello World");



// var nationality = "Pakistani";

// alert(nationality);


// var a = "Hello"
// var b = 85;
// var c = true;
// var d = "<br>"
// document.write("Value of variable a is: " + (typeof a));
// document.write(d);
// document.write(typeof b);
// document.write(d);
// document.write(typeof c)



// var rose = "hello";
// var Rose = "World";

// console.log(rose);
// console.log(Rose)



// var x  = 8;
// x = x + 9;
// x -= 5;
// x *= 2;
// console.log("Value of x: "+ x);



// name = "what is your name";
// var result = prompt(name);
// console.log(result);


// var first_name = prompt("What is your first name");
// alert(first_name); 


// var age = "what is your age";
// var new_age = parseInt(prompt(age));  
// var result =  new_age + 5;   
// console.log(result);


// var age = 12;

// if(age < 9){
//     console.log("Age: " +age);
// }


// var age = "what is your age";
// var new_age = parseInt(prompt("Enter Your Age"));
// if(new_age >= 18){
//     alert("Eligible Student: " +new_age);

// }


// var age = "What is your age";
// var new_Age = parseInt(prompt("Enter your age"));
// if(new_Age > 18){
//     console.log("You are eligible");
// }
// else if( new_Age == 18){
//     console.log("Equal 18  age is also eligible")
// }
// else{
//     console.log("You are not eligible");
// }


// var a = 8;
// var b = prompt("Enter num");
// if(a == b){
//     alert("true")
// }
// else{
//     alert("false")
// }

// var result = parseInt(prompt("Enter your percentage"));

// if(result >=80 && result <= 100){
//     console.log("A")
// }
// else if(result >= 70 && result <=80){
//     console.log("A")
// }
// else if(result>= 60 && result <= 70){
//     console.log("B")
// }
// else if(result >= 50 && result <= 60){
//     console.log("C")
// }
// else if( result>=40 && result <= 50){
//     console.log("D")
// }
// else if(result<=39){
//     console.log("Failed")
// }
// else{
//     console.log("Your percentage is not correct")
// }


// var age = parseInt(prompt("Enter your age"));
// var education = prompt("Enter your education");

// if(age >= 18){
//     if(education == "Matric" || education == "Inter" || education == "Graduate"){
//         alert("Eligible")
//     }
// }
// else{
//     alert("Not Eligible");
// }

// var designation = prompt("Enter your designation");
// switch(designation){
//     case 'Manager':
//         alert('Salary: 30000')
//     break;
//     case 'Developer':
//         alert('Salary: 20000')
//     break;
//     default:
//         alert("Enter proper designation")
//     break;

// }

// ********************************Even Numbers Code*******************************************
// document.write("<h3>Even Numbers Code</h3>")

// for(i=1; i<=20; i++){
//   if(i%2 == 0){
//     document.write(i);
//     document.write("<br>")
//   }
// }


// var i;
// i = parseInt(prompt("Enter num"));
// do{
//     i++;
//     document.write("My country name is Pakistan");
//     document.write("<br>")
// }
// while(i<5)

// var ans = "";
// do{
//     ans = prompt("Capital of United State: ");
// }
// while(ans != 'washington')

// alert("Capital of united state is: "+ans);



// document.write("<h3>Loop Practice</h3>")
// var numb=5; 
// for(i=1;i<=numb;i++){ 
//   for(j=1;j<=i;j++)
//   {
//     document.write(j);
//   } 
//     document.write("</br>") 
// }


// var student = new Array(3);
// student[0] = "A";
// student[1] = "B";
// student[2] = "C";
// console.log(student);
// alert(student[2]);


// var employee = new Array("John","David","Kevin");
// alert("List of Student name: \n"+employee[0]+","+employee[1]+","+employee[2])



//Multi Dimensional Array

// var employee = new Array(3);
// employee[0] = new Array("A",15000);
// employee[1] = new Array("B",20000);
// employee[2] = new Array("C",25000);


// console.log(employee);
// alert(employee[2][1]);

// var products = new Array(2);
// products[0] = new Array("Monitor",23607);
// products[1] = new Array("Keyboard",45569);
// document.write("<Table border = 1> <tr><th>Name</th><th>Price</th></tr>");
// for(var i = 0; i<products.length;i++){
//   document.write("<tr>");
//   for(var j = 0;j<products[i].length;j++){//0<1
//     document.write("<td>"+products[i][j]+"</td>"); 
//   }
//   document.write("</tr>");
// }
// document.write("</Table>");




// var flowers = new Array("Rose","Sunflower","Daisy");
// document.write("Flowers are: "+flowers+ "<br>");
// document.write("Number of flowers: " +flowers.length+ "<br>");
// document.write("Flowers: "+flowers.join('*')+"<br>");
// document.write("Orchid and Lily are Added: "+flowers.push("Orchid","Lily")+"<br>");
// document.write("Flowers are: "+flowers+ "<br>");
// document.write("Flowers in (In ascending order): "+flowers.sort()+ "<br>");
// document.write("Flowers Removed: "+flowers.splice(0,1)+ "<br>");
// document.write("Flowers are: "+flowers+ "<br>");
// document.write("Number of flowers: " +flowers.length+ "<br>");



// var val1 = parseInt(prompt("Enter your value 1: "));
// var val2 = parseInt(prompt("Enter your value 2: "));

// function mult(num1,num2){
//     var result = num1 * num2;
//     console.log("Result of multplication is: "+result);
// }
// mult(val1,val2);



// var num = 9;  //global variable
// function add(){
//       var sum = num + 2;  //9 + 2 = 11   //local variable
//       alert(sum)
// }

// add()

// console.log(num)


// var val1 = 2;  //global variable
// function fun(){
//     var sum = val1 + val1;  //local variable (sum)
//     alert(sum);
// }
// fun();
// console.log(sum);


//Passing by Value

// var num = 5;
// function pass(val1){
//     var sum = val1 + val1;
//     alert("Sum of val1: "+sum);
// }
// pass(num);
// console.log(num);



//passing by reference

// var arr = [5,9,8,7]
// function func(val){
//       val[0] = 20;
//       alert(val)    //[20,9,8,7]
// }
// func(arr)
// console.log(arr);   //[20,9,8,7]

//Return Statement
// function add(num1,num2){
//     var result = num1 + num2;
//     alert(result)
//     return result;
// }
//  var sum = (add(2,2) + 5);
//  console.log(sum);


// function factorial(num){
//     if(num == 0){
//         return 0;
//     }
//     else if(num == 1){
//         return 1;
//     }
//     else{
//         var result = num;   //5
//         while(num>1){  //5 > 1 yes
//             result = result * (num -1);  //5 * (5 - 1)   5 * 4 = 20
//             num --;                      //20 * (4 - 1)  20 * 3 = 60
//         }
//         return result;
//     }
// }
// var num = parseInt(prompt("Enter num: "))
// var result = factorial(num);
// alert("Factorial result: "+result);

///*************OBJECTS*****************

// var Student = new Object();
// Student.first_Name = "Abc";
// Student.age = 15;
// console.log(Student);
// alert("Student Name: "+Student.first_Name+ " Student Age: "+Student.age);


//Constructor Function

// function Student(name,age){
//     this.name = name;
//     this.age = age;
// }

// var Student1 = new Student("Abc", 15);
// var Student2 = new Student("def", 18);

// console.log(Student1);
// console.log(Student2);

// var property_value = Math.PI;
// document.write("Property Value is : " + property_value);

//  var today = new Date();

//  var date=today.getDate();
//  var month=today.getMonth();
//  var year=today.getFullYear();
//  alert(date+'/'+month+'/'+year);


// function right(){
//     alert("On Contextmenu Event generate");
//     console.log("On Contextmenu Event generate");
// }
// function over(){
//     alert("Mouse have pointed");
// }
// function out(){
//     alert("Mouse have out");
// }
// function first(){
//     alert("Successfully Submited");
// }


function new_window(){
    if(confirm('Do you want to open a new apge?')){
        window.open('https://aptech-education.com.pk/');
    }
    else{
        window.alert("In the current window");
    }
}

function change(){
    document.getElementById("head").innerHTML = "Hello";
}

function on(){
    document.getElementById("img").src = "img1.jpg";
}
function off(){
    document.getElementById("img").src = "img2.jpg";
}

function change_image(){
    var imgText = document.getElementById("myImg").alt;  //ford

    if(imgText == "ford"){

        document.getElementById("myImg").src = "img4.jpg";
        document.getElementById("myImg").alt = "ferrari";
        document.getElementById("mytext").value = "Ferrari Car";

    }

    else{

        document.getElementById("myImg").src = "img3.jpg";
        document.getElementById("myImg").alt = "ford";
        document.getElementById("mytext").value = "Ford Car";

    }


}