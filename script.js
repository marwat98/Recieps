function sleep(ms){
    return new Promise((resolve)=> setTimeout(resolve,ms));
}
const phrases = ["Swapp"];
const element = document.getElementById("swapping");

let sleepTime = 250;
let curPhraseIndex = 0;

let writeLetter = async () =>{
    while(true){
        let curWord = phrases[curPhraseIndex];
        for (let i = 0; i< curWord.length; i++) {
            element.innerText = curWord.substring(0, i + 1);
            await sleep(sleepTime);
        }
        await sleep(sleepTime * 3);

        for (let i = curWord.length; i > 0; i--) {
            element.innerText = curWord.substring(0, i - 1);
            await sleep(sleepTime);
        }
        await sleep(sleepTime * 3);
        }
   };

writeLetter();

const registrationContainer = document.querySelector('.registration__login__container');
const loginLink = document.querySelector('.login__link');
const registerLink = document.querySelector('.register__link');
const loginButton = document.querySelector('.loging');
const close = document.querySelector('.icon__close');
const reciepsButton = document.querySelector('.recieps__btn');

registerLink.addEventListener('click', () => {
    registrationContainer.classList.add('active');
});
loginLink.addEventListener('click', () => {
    registrationContainer.classList.remove('active');
});
loginButton.addEventListener('click', () => {
    registrationContainer.classList.add('active-label');
});
close.addEventListener('click', () => {
    registrationContainer.classList.remove('active-label');;
});

registrationContainer.addEventListener('click', () => {
    reciepsButton.classList.add('lower-z-index');
});
close.addEventListener('click', function() {
    reciepsButton.classList.remove('lower-z-index');
});

