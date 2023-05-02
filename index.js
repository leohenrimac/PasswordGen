
let lowerCaseEl = document.getElementById("lower-case-el");
let isLowerCaseClicked = false;

let upperCaseEl = document.getElementById("upper-case-el");
let isUpperCaseClicked = false;

let numberEl = document.getElementById("number-el");
let isNumberClicked = false;

let symbolEl = document.getElementById("symbol-el");
let isSymbolClicked = false;

let minusBtnEl = document.getElementById("minus-btn")
let plusBtnEl = document.getElementById("plus-btn")

let meterCount = 1

let isReady = false

let lowerCaseArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
let upperCaseArr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
let numberArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
let symbolArr = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]
let masterArr = []
let addLowerToMasterArr = false
let addUpperToMasterArr = false
let addNumberToMasterArr = false
let addSymbolToMasterArr = false

let genTextEl = document.getElementById("gen-text")

let password1 = ""
let password2 = ""

let pass1El = document.getElementById("pass-1")
let pass2El = document.getElementById("pass-2")

function lowerCase() {
    if(!isLowerCaseClicked) {
        lowerCaseEl.style.color = "white"
        lowerCaseEl.style.outline = "2px solid #4ADF86";
        isLowerCaseClicked = true;
        meterCount += 3
        addLowerToMasterArr = true

        genTextEl.textContent = "Set password length and press Generate passwords"
        
        
    }
    else if(isLowerCaseClicked) {
        lowerCaseEl.style.color = "#4ADF86";
        lowerCaseEl.style.outline = "none";
        isLowerCaseClicked = false;
        meterCount -= 3
        addLowerToMasterArr = false
        
       
    }
    
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

let lengthTextEl = document.getElementById("length-text")
let lengthCount = 8


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
        lengthTextEl.textContent = 16
    }
    updateMeter()
}

let meterEl = document.getElementById("meter")
let meterTextEl = document.getElementById("meter-text")



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

function generatePass() {
    if(!meterEl.value == 0) {
        getRandomPass()
        genTextEl.textContent = "Click the button to copy the password"
    }
    else {
        window.alert("You need to select at least one property!")
    }
}

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
