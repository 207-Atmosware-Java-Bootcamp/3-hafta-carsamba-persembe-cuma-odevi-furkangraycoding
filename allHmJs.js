

/*

HM1


alert("Equation is 3x+4k")
var x = Number(prompt("enter x: "));
var k = Number(prompt("enter k: "));

function formula(x, k) {
    return 3 * x + 4 * k;
}
document.write("x:" + x + " k:" + k + "<br>");
document.write("y=3x+4k <br>");
document.write("y=" + formula(x, k));

HM2


var x = Number(prompt("Enter celcius :"));
function formula(x) {
    return (x * 9) / 5 + 32;
}
document.write("Girilen derece: " + x);
document.write("<br> Formül: (x*9/5)+32");
document.write("<br> Fahrenhayt: " + formula(x));

HM3


var num = Number(prompt("Enter number"));

if (num > 0) {
    document.write(num + " is positive");
} else if (num < 0) {
    document.write(num + " is negative");
} else {
    document.write( num + " is 0");
}

HM4



var password = prompt("Enter your password");
var repassword = prompt("Enter your password again");

while(!(password == repassword)){
    if (password == repassword) {
        break;

    } else {
        repassword=prompt("Please Enter your password again")
    }
}
alert("Login Successful")
document.write("password : " + password);




HM5


var today = new Date().getDay();
let whichDayOfWeek = (today) => {
    switch (today) {
        case 1:
            document.write("Today is Monday!");
            break;
        case 2:
            document.write("Today is Tuesday!");
            break;
        case 3:
            document.write("Today is Wednesday!");
            break;
        case 4:
            document.write("Today is Thursday!");
            break;
        case 5:
            document.write("Today is Friday!");
            break;
        case 6:
            document.write("Today is Saturday!");
            break;
        case 0:
            document.write("Today is Sunday!");
            break;
    }
};
whichDayOfWeek(today);

HM6

var userEmail, userPassword;
var dbUserEmail = "deneme@gmail.com";
var dbUserPassword = "root";
var wrongCount = 4;
var isFail = false;

userEmail = prompt("Enter your userEmail");
userPassword = prompt("Enter your userPassword");

function adminFunction(userEmail, userPassword) {
    while (!(dbUserPassword == userPassword && dbUserEmail == userEmail)) {
        wrongCount--;
        alert("You have " + wrongCount + "chance ")
        if (wrongCount == 0) {
            isFail = true;
            break;
        }
        userEmail = prompt("Mail is wrong! Enter your Mail again");
        userPassword = prompt("Passwords do not match! Enter your password again");
    }
    if (isFail) {
        document.write("Blocked");
    } else {
        document.write("Login Success");
    }
}

adminFunction(userEmail, userPassword);

HM7


var today = new Date().getDay();
(function (whichDayOfWeek) {
    switch (whichDayOfWeek) {
        case 1:
            document.write("Today is Monday!");
            break;
        case 2:
            document.write("Today is Tuesday!");
            break;
        case 3:
            document.write("Today is Wednesday!");
            break;
        case 4:
            document.write("Today is Thursday!");
            break;
        case 5:
            document.write("Today is Friday!");
            break;
        case 6:
            document.write("Today is Saturday!");
            break;
        case 0:
            document.write("Today is Sunday!");
            break;
    }
})(today);

HM8

var today = new Date().getDay();
let whichDayOfWeek = (today) => {
    switch (today) {
        case 1:
            document.write("Today is Monday!");
            break;
        case 2:
            document.write("Today is Tuesday!");
            break;
        case 3:
            document.write("Today is Wednesday!");
            break;
        case 4:
            document.write("Today is Thursday!");
            break;
        case 5:
            document.write("Today is Friday!");
            break;
        case 6:
            document.write("Today is Saturday!");
            break;
        case 0:
            document.write("Today is Sunday!");
            break;
    }
};
whichDayOfWeek(today);

HM9


var today = new Date().getDay();
let whichDayOfWeek = (today) => {
    switch (today) {
        case 1:
            document.write("Today is Monday!");
            break;
        case 2:
            document.write("Today is Tuesday!");
            break;
        case 3:
            document.write("Today is Wednesday!");
            break;
        case 4:
            document.write("Today is Thursday!");
            break;
        case 5:
            document.write("Today is Friday!");
            break;
        case 6:
            document.write("Today is Saturday!");
            break;
        case 0:
            document.write("Today is Sunday!");
            break;
    }
};
whichDayOfWeek(today);

HM10


var num, rand;
var count = 1;
num = Number(prompt("Enter number 1 to 10:"));
rand = Math.round(Math.random() * 9 + 1);

function findNumber(num) {
    while (rand != num) {
        if (num < rand) {
            count++;
            num = Number(prompt(+num + "den büyük bir sayı giriniz:"));
        } else{
            count++;
            num = Number(prompt(num + "den küçük bir sayı giriniz:"));
        }
    }
    document.write(+num + "=" + rand + " " + count + ". tahmininizde bildiniz");
}

findNumber(num);

*/