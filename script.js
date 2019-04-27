document.getElementById('heading').innerHTML = "Hello, JS!!"
var name = "Sri";
console.log(name);
var lastName = "Wahyuni";
console.log(lastName);
var age = 30;
console.log(age);
var fullName = name + lastName; // concatenation.
console.log(fullName);
var job = "Teacher";
console.log(job);

var bio = "My name " + name + " " + lastName + " " + " my age " + age + " my job " + job;
console.log(bio);
var x = 5;
var y = 7;
var z = x + y;
console.log(z);

var a = 5;
var b = 7;
var c = a * b;
console.log(c);

text1 = "Sri";
text2 = "Wahyuni";
text3 = text1 + " " + text2;
console.log(text3);

x = 5 + 5;
y = "5" + 5;
z = "Hello" + 5;
console.log(x);
console.log(y);
console.log(z);

var name = "Sri Wahyuni";
var age = 16;
var isYoung = "Yes";

if (isYoung == "Yes") {
	
	console.log(name + " is happy mom")
	
} else {

	console.log("I hope her alwasy happy and lucky")

}
var hour = 18;
if (hour < 18) {

	console.log("Say Yes")

} else {

	console.log("Say Nop")

};
var time = 20;
if (time < 10) {
	console.log("Say no way")
} else if (time <= 20) {
	console.log("Say may be yes")
} else {
	console.log("Good on you!!")
}
console.log(Boolean(10 > 9));	//hasilnya true
console.log(Boolean(10 > 19)); //hasilnya false
console.log(Boolean(100)); // true
console.log(Boolean(3.14)); // true
console.log(Boolean(-15)); // true
console.log(Boolean("Hello")); // true
console.log(Boolean("false")); // true

console.log(Boolean(false)); // false
console.log(Boolean(true)); // true
console.log(Boolean("false")); // true
var x = 0;
console.log(Boolean(x)); // false

var y = "";
console.log(Boolean(y)); // false

var z = "NaN";
console.log(Boolean(z)); // true
var x = 0;
console.log(Boolean(x));
var y = "";
alert(Boolean(y));
prompt("What is your name")
var name = prompt("What is your name");
console.log(name);

var name = prompt("What is your name");
alert.log(name);
var job = 'Trainer'

switch (job) {
	case 'Trainer':
		console.log('Dyo adalah Trainer');
		break;
	case 'Driver':
		console.log('Dyo bukan driver');
		break;
	case 'Police':
		console.log('Dyo bukan polisi');
		break;
	default:
		console.log('Not at all');
}
job = prompt("Apa profesi Dyo?")

