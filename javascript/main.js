// document.write('HELLO WORLD OF JAVASCRIPT TUTORIAL </br>')
// document.write('</br>')
// this is comment using double slash

// document.write('THIS IS MY FIRST WORK </br>')
// document.write('</br>')
// document.write('Ayesha here </br>')
// name = "YouTube"
// document.write('</br>')
// document.write(name)
// document.write('</br>')
// document.write('</br>')
// document.write(3 + 4)
// document.write('</br>')
// document.write('<h1 style="color:blue;">HELLO WORLD </h1>')
// document.write('</br>')
// document.write(3+5)
// document.write('</br>')
// document.write('</br>')

// alert('Hello Welcome! This is my internet site');

// prompt('Enter your name', 'Name')

// name = prompt('Enter your name', 'Name')
// document.write('Welcome Dear <h2 style="color:blue; text-decoration:underline;">' +name+ '</h2> to my page')

// else or if
// 


//switch
// name = 'john'

// switch(name) {
//     case 'Aysha' : document.write('yes, you are at right place');
//     break;
//     case 'Aliza' : document.write('no you r wrong');
//     break;
//     default : document.write('please enter your case');
// }

// //function
// function mynum(){
//     document.write('this is good speed')
// }
// mynum();

// function yume(){
//     // alert('Thank you for clicking')
//     // prompt('Enter your name','Name');
//     pmt = prompt('Enter your name','Name');
//     document.write('Welcome! '+pmt+' to my new website')

// }

// prompt
// var question = "Your species?";
// var defaultAnswer = "human";
// var spec = prompt(question, defaultAnswer);

// var numberOfCats = prompt("How many cats?");
// var tooManyCats = numberOfCats + 1;

//if 
// var x = prompt("Where does the Pope live?");
// if (x === "Vatican") {
// alert("Correct!");
// }

// var correctAnswer = "Vatican";
// x = prompt('enter your name')
// if (x === correctAnswer) {
//     score++;
//     userIQ = "genius";
//     alert("Correct!");
// }

// if (weight > 300 && time < 6) {
//     alert("Come to our tryout!");
// }
// else {
//     alert("Come to our cookout!");
// }


function todoList() {
    var item = document.getElementById("todoInput").value
    var text = document.createTextNode(item)
    var newItem = document.createElement("li")
    newItem.appendChild(text)
    document.getElementById("todoList").appendChild(newItem)
}