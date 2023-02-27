var characterLength = 8;
var choiceArr = [];

var specialArr = ['!','@','#','$','%','^','&','*','(',')'];
var lowerArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCaseArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var numberArr = ['1','2','3','4','5','6','7','8','9','0'];


var confirmNumber;
var confirmSpecial;
var confirmUpper;
var confirmLower;



// Assignment Code
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
    var correctPrompts = getPrompts(); 
    var passwordText = document.querySelector("#password");

    if(correctPrompts) {
        var newPassword = generatePassword();

        passwordText.value = newPassword;
    
    } else {
        passwordText.value = "";

    }

}

function generatePassword() {
    var password = "";

    for(var i = 0; i < characterLength; i++) {
        var randomIndex = Math.floor(Math.random() * choiceArr.length);
        password = password + choiceArr[randomIndex];
    }

    return password;





}

function getPrompts() {
    choiceArr = [];
    characterLength = parseInt(prompt("How long would you like for your password to be? 8 min, 128 max."));

    if(isNaN(characterLength) || characterLength < 8 || characterLength > 128){
        alert("Please enter a number between 8 and 128. Try again by clicking Generate Password.");
        
        return false;

    }else  {
        
        confirmNumber = confirm("Do you want your password to contain numbers? Click Ok for Yes. Click Cancel for No.");
        confirmSpecial = confirm("Do you want your password to contain characters? Click Ok for Yes. Click Cancel for No.");
        confirmUpper = confirm("Do you want your password to contain letters? Click Ok for Yes. Click Cancel for No.");
        confirmLower = confirm("Do you want your password to contain letters? Click Ok for Yes. Click Cancel for No.");
    }

    // Else if for 4 negative options
    if (!confirmSpecial && !confirmNumber && !confirmUpper && !confirmLower) {
        choiceArr = alert("You must select at least one option in order to generate your password. Please try again by starting over. Click Generate Password button to begin again.");

    }
    //4 confirmed options
    else if (confirmSpecial && confirmNumber && confirmUpper && confirmLower) {

        choiceArr = specialArr.concat(numberArr, upperCaseArr, specialArr, lowerArr);
    }
    //  3 confirmed options
    else if (confirmSpecial && confirmNumber && confirmUpper) {
        choiceArr = specialArr.concat(numberArr, upperCaseArr);
    }
    else if (confirmSpecial && confirmNumber && confirmLower) {
        choiceArr = specialArr.concat(numberArr, lowerArr);
    }
    else if (confirmSpecial && confirmLower && confirmUpper) {
        choiceArr = specialArr.concat(lowerArr, upperCaseArr);
    }
    else if (confirmNumber && confirmLower && confirmUpper) {
        choiceArr = numberArr.concat(lowerArr, upperCaseArr);
    }
    // 2 confirmed options 
    else if (confirmSpecial && confirmNumber) {
        choiceArr = specialArr.concat(numberArr);

    } else if (confirmSpecial && confirmLower) {
        choiceArr = specialArr.concat(lowerArr);

    } else if (confirmSpecial && confirmUpper) {
        choiceArr = specialArr.concat(upperCaseArr);
    }
    else if (confirmLower && confirmNumber) {
        choiceArr = lowerArr.concat(numberArr);

    } else if (confirmLower && confirmUpper) {
        choiceArr = lowerArr.concat(upperCaseArr);

    } else if (confirmNumber && confirmUpper) {
        choiceArr = numberArr.concat(upperCaseArr);
    }
    // Else if for 1 positive option
    else if (confirmSpecial) {
        choiceArr = specialArr;
    }
    else if (confirmNumber) {
        choiceArr = numberArr;
    }
    else if (confirmLower) {
        choiceArr = lowerArr;
    }
    else if (confirmUpper) {
        choiceArr = upperCaseArr;
    }   
    
    return password;
    }

 




