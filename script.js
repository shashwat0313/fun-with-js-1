// States
let headingtext = "";
let characterCount = 0; // start = 0, end = finalstring.length
let finalString = "Welcome!";

// constants
const heading = document.getElementById("heading")
const T = finalString.length * 0.4 * 1000; // total time of animation
const charAppendDelay = T / finalString.length; // each character appending time
const charSwitches = 8; // number of times a character undergoes switchings as animation
const charSwitchDelay = charAppendDelay / charSwitches; // interval at which the character is switched

heading.innerText = "Hi!";

// functions
function init(){
    // reset states
    heading.innerText = "";
    characterCount = 0;
    headingtext = ""
    let inputText = document.getElementById("text").value;
    finalString = inputText.length > 0 ? inputText : "Welcome!";
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

document.getElementById("welcome-btn").addEventListener("click", ()=>{
        init()
        console.log("btn pressed");
        animateWelcomeMessage();
})

async function animateWelcomeMessage(){
    console.log("animatewelcomemessage called");
    
    // call the unit animate string.length times
    for(let i = 0 ; i <= finalString.length; i++){
        await unitAnimation(i);
    }
}

async function unitAnimation(pos){
    let isCaps = Math.random() < 0.5 ? true : false;
    console.log(isCaps);
    
    let randomChar =  String.fromCharCode((isCaps ? 65 : 97) + Math.floor(Math.random() * 26))
    
    headingtext = headingtext + randomChar;
    console.log(randomChar);
    
    await animateLastChar(pos); // this will be called 8 times
}

async function animateLastChar(pos){
    
    for (let i = 0 ; i < charSwitches; i++){
        requestAnimationFrame(replaceLastChar); // more efficient and performant than conventional way of setintervals
        await delay(charSwitchDelay);
    }

    // insert the correct char at the end after the animation cycle of current char is complete
    headingtext = finalString.substring(0, pos);
    heading.innerText = headingtext;
    characterCount++;
}

function replaceLastChar(){
    let isCaps = Math.random() < 0.5 ? true : false;
    let randomChar =  String.fromCharCode((isCaps ? 65 : 97) + Math.floor(Math.random() * 26))
    headingtext = headingtext.substring(0, characterCount - 1) + randomChar;
    heading.innerText = headingtext;
}

// logic for background color
const bgbutton = document.getElementById("bgcolor-btn");
const body = document.body;

bgbutton.addEventListener("click", async function() {
    const body = document.body;
    let hue = 0;

    function changeBackgroundColor() {
        hue = (hue + 5) % 360; // Increment hue and wrap around at 360
        body.style.backgroundColor = `hsl(${hue}, 100%, 50%)`; // Set background color using HSL
        // requestAnimationFrame(changeBackgroundColor); // Call the function again on the next frame
    }

    while (true) {
        requestAnimationFrame(changeBackgroundColor); // Call the function again on the next frame
        await delay(21);
    }

    // changeBackgroundColor(); // Start the color change loop
});



















// async function continueAfterAnimate(){
// }

// document.addEventListener("DOMContentLoaded", async function() {
//     const heading = document.getElementById("heading");
//     const button = document.getElementById("welcome-btn");

//     button.addEventListener("click", function() {
//         animateWelcomeMessage();
//     });

//     async function animateWelcomeMessage() {
//         const finalString = "Welcome!";
//         const charAppendDelay = 15000 / finalString.length;
//         const charSwitches = 10;
//         const charSwitchDelay = charAppendDelay / charSwitches;
//         let characterCount = 0;
//         let headingText = "";

//         async function updateCharacter() {
//             if (characterCount < finalString.length) {
//                 let randomChar = String.fromCharCode(65 + Math.floor(Math.random() * 26));
//                 headingText += randomChar;
//                 heading.innerText = headingText;
                
//                 setTimeout(() => {
//                     headingText = headingText.slice(0, -1) + finalString[characterCount];
//                     heading.innerText = headingText;
//                     characterCount++;
//                     requestAnimationFrame(updateCharacter);
//                 }, charSwitchDelay);

//                 await delay(charAppendDelay);
//             }
//         }

//         updateCharacter();
//     }
// });

// old
// // document.getElementById("welcome-btn").onclick = ()=>{
// //     document.getElementById("heading").innerText = "hiii"
// // }

// const heading = document.getElementById("heading")
// let headingtext = "";
// let characterCount = 0; // start = 0, end = 8
// const finalString = "Welcome!";

// const T = 3000; // total time of animation
// const charAppendDelay = 3000 / finalString.length; // each character appending time
// const charSwitches = 10; // number of times a character undergoes switchings as animation
// const charSwitchDelay = charAppendDelay / charSwitches; // interval at which the character is switched

// document
//     .getElementById("welcome-btn")
//     .addEventListener("click", ()=>{
//                 console.log("btn pressed");
//                 processWelcome();
//     })

// function processWelcome(){
//     heading.innerText = "hello!"
// }

// function animateWelcomeMessage(){
//     // total time of animation 3 sec = 3000 ms
//     // final string: Welcome! --- 8 characters
//     // 3000/8 = 375 ms
//     // 1. have to randomly select a character between 'a'-'z' or 'A'-'Z'
//     // 2. push this character to the end of the string
//     // 3. set it as the innertext of the element.
//     // 4. repeat this to perform a total of 10 reps
//     // use a delay of 375 / 10 ms = 37.5 ms

// }