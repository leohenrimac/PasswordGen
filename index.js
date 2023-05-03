// // NOTE // //
// The term 'property' is used in this code to represent the range of characters that can be combined
// and used to generate the final array from which characters will be pulled to make up a password.
//
// This code is flooded with comments as I am a beginner coder and I find it useful to explicitly point out 
// each variable and funcion I wrote.


// Variables for each button with a boolean value to be used when generating password

let lowerCaseEl = document.getElementById("lower-case-el");
let isLowerCaseClicked = false;

let upperCaseEl = document.getElementById("upper-case-el");
let isUpperCaseClicked = false;

let numberEl = document.getElementById("number-el");
let isNumberClicked = false;

let symbolEl = document.getElementById("symbol-el");
let isSymbolClicked = false;

// "-" and "+" buttons

let minusBtnEl = document.getElementById("minus-btn")
let plusBtnEl = document.getElementById("plus-btn")

// Variable that holds the the sum of cliked properties plus password length used to measure password strength

let meterCount = 1

// Arrays set to each property button

let lowerCaseArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
let upperCaseArr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
let numberArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
let symbolArr = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]

// Master array used as recipient of the combined property's arrays from which the passwords will draw characters.

let masterArr = []

// Boolean values to tell which array of characters will be pushed into the Master array

let addLowerToMasterArr = false
let addUpperToMasterArr = false
let addNumberToMasterArr = false
let addSymbolToMasterArr = false

// display text below Generate passwords button that gives out hints for the user

let genTextEl = document.getElementById("gen-text")

// Generated password and their respective button references

let password1 = ""
let password2 = ""

let pass1El = document.getElementById("pass-1")
let pass2El = document.getElementById("pass-2")

// Functions to be called out when buttons are clicked. They make the buttons toggle on and off. Also set a bool
// so they are added/removed to/from the master array. Finally, they add/subtract to the password strength meter.

function lowerCase() {
    if(!isLowerCaseClicked) {
        lowerCaseEl.style.color = "white"
        lowerCaseEl.style.outline = "2px solid #4ADF86";
        isLowerCaseClicked = true;
        meterCount += 3
        addLowerToMasterArr = true

        // Slight change the hint text to reflect that at least one button is pressed.
        genTextEl.textContent = "Set password length and press Generate passwords"
    }
    else if(isLowerCaseClicked) {
        lowerCaseEl.style.color = "#4ADF86";
        lowerCaseEl.style.outline = "none";
        isLowerCaseClicked = false;
        meterCount -= 3
        addLowerToMasterArr = false 
    }
    // Awals called after pressing a button to reflect the password strength meter
    updateMeter()
}

function upperCase() {
    if(!isUpperCaseClicked) {
        upperCaseEl.style.color = "white"
        upperCaseEl.style.outline = "2px solid #4ADF86";
        isUpperCaseClicked = true;
        meterCount += 3
        addUpperToMasterArr = true

        genTextEl.textContent = "Set password length and press Generate passwords"
    }
    else if(isUpperCaseClicked) {
        upperCaseEl.style.color = "#4ADF86";
        upperCaseEl.style.outline = "none";
        isUpperCaseClicked = false;
        meterCount -= 3
        addUpperToMasterArr = false
    }
    updateMeter()
}

function numberCase() {
    if(!isNumberClicked) {
        numberEl.style.color = "white"
        numberEl.style.outline = "2px solid #4ADF86"
        isNumberClicked = true;
        meterCount += 3
        addNumberToMasterArr = true

        genTextEl.textContent = "Set password length and press Generate passwords" 
    }
    else if(isNumberClicked) {
        numberEl.style.color = "#4ADF86";
        numberEl.style.outline = "none";
        isNumberClicked = false;
        meterCount -= 3
        addNumberToMasterArr = false
    }
    updateMeter()
}

function symbolCase() {
    if(!isSymbolClicked) {
        symbolEl.style.color = "white"
        symbolEl.style.outline = "2px solid #4ADF86";
        isSymbolClicked = true;
        meterCount += 4
        addSymbolToMasterArr = true

        genTextEl.textContent = "Set password length and press Generate passwords"
    }
    else if(isSymbolClicked) {
        symbolEl.style.color = "#4ADF86";
        symbolEl.style.outline = "none";
        isSymbolClicked = false;
        meterCount -= 4
        addSymbolToMasterArr = false
    }
    updateMeter()
}

// Password length display text and value

let lengthTextEl = document.getElementById("length-text")
let lengthCount = 8


// Add and Subtract function called out when pressing "-" and "+" buttons to change 
// the password length, and thus, changing the password strength meter.
//
// Weird logic written to make the "-" and "+" disappear when they can longer be used. Well... it works.

function minusCalc() {
    if(lengthCount > 9 && lengthCount < 16) {
        lengthCount --
        lengthTextEl.textContent = lengthCount 
        meterCount --
    }
    else if(lengthCount == 9) {
        lengthCount --
        lengthTextEl.textContent = lengthCount
        meterCount --
        minusBtnEl.textContent = ""
    }
    else if(lengthCount == 16) {
        lengthCount --
        lengthTextEl.textContent = lengthCount
        meterCount --
        plusBtnEl.textContent = "+"
    }
    else {
        // Set min length
        lengthTextEl.textContent = 8
    }
    updateMeter() 
}

function plusCalc() {
    if(lengthCount == 8) {
        minusBtnEl.textContent = "-"
        lengthCount ++
        lengthTextEl.textContent = lengthCount   
        meterCount ++
    }
    else if(lengthCount > 8 && lengthCount < 15) {
       
        lengthCount ++
        lengthTextEl.textContent = lengthCount   
        meterCount ++
    }
    else if(lengthCount == 15){
        lengthCount ++
        lengthTextEl.textContent = lengthCount   
        meterCount ++
        plusBtnEl.textContent = ""
        
    }
    else {
        // Set max length
        lengthTextEl.textContent = 16
    }
    updateMeter()
}

// Reference to the meter tag and its text

let meterEl = document.getElementById("meter")
let meterTextEl = document.getElementById("meter-text")

// First statement of the function checks if any property button is pressed and sets meter text to transparent.
// Following statements set the meter to 3 different states according to the meterCount variable.

function updateMeter() {
    if(!isLowerCaseClicked && !isNumberClicked && !isSymbolClicked && !isUpperCaseClicked) {
        meterEl.value = 0
        meterTextEl.innerText = "Weak"
        meterTextEl.style.opacity = 0
        genTextEl.textContent = "Select at least one password property and set its length"

    }
    else if (meterCount >= 3 && meterCount<= 9) {
        meterEl.value = 33
        meterTextEl.innerText = "Weak"
        meterTextEl.style.color = "#273549"
        meterTextEl.style.opacity = 1
        
    }
    else if (meterCount >= 10 && meterCount <= 13) {
        meterEl.value = 66
        meterTextEl.innerText = "Moderate"
        meterTextEl.style.color = "#273549"
        meterTextEl.style.opacity = 1
    }
    else if (meterCount >= 14) {
        meterEl.value = 100
        meterTextEl.innerText = "Strong"
        meterTextEl.style.color = "white"
        meterTextEl.style.opacity = 1
    }
    
}

// This function that is called inside the main generate password function. It first checks which 
// property buttons are pressed, then adds its content to the Master array. Next it generates
// 2 passwords through a separate function. It then sets the Master Array to EMPTY so it
// does not break the property button functionality and finally it deletes the generated set of passwords 
// from their variables but keep them displayed untill the next set is generated.

function getRandomPass() {
    if(addLowerToMasterArr) {
        masterArr.push(...lowerCaseArr)
    }
    if(addNumberToMasterArr) {
        masterArr.push(...numberArr)
    }
    if(addSymbolToMasterArr) {
        masterArr.push(...symbolArr)
    }
    if(addUpperToMasterArr) {
        masterArr.push(...upperCaseArr)

    }
    passGen1()
    passGen2()

    masterArr = []
    password1 = ""
    password2 = ""
}

// Generates random passwords from the Master array based on password length.

function passGen1() {
    for(let i = 0; i < lengthCount; i++) {
        password1 += masterArr[Math.floor(Math.random() * masterArr.length)]
    }
    pass1El.textContent = password1
}

function passGen2() {
    for(let i = 0; i < lengthCount; i++) {
        password2 += masterArr[Math.floor(Math.random() * masterArr.length)]
    }
    pass2El.textContent = password2
}

// Main function. Checks if at least one property button is pressed and then
// calls out the password generating function. Also changes the hint text.

function generatePass() {
    if(!meterEl.value == 0) {
        getRandomPass()
        genTextEl.textContent = "Click the button to copy the password"
    }
    else {
        window.alert("You need to select at least one property!")
    }
}

// Function I googled on how to copy the text inside the button. No idea how it works, but it does.
// Also changes the hint text.

function copyText1() {
    let copyText = document.getElementById("pass-1").textContent;
    navigator.clipboard.writeText(copyText);
    genTextEl.textContent = "First password was copied"
    
    
}
function copyText2() {
    let copyText = document.getElementById("pass-2").textContent;
    navigator.clipboard.writeText(copyText);
    genTextEl.textContent = "Second password was copied"
    
}

