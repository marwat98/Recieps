function sleep(ms){
    return new Promise((resolve)=> setTimeout(resolve,ms));
}
const phrases = ["Swapp"];
const element = document.getElementById("swapping");

let sleepTime = 250;
let curPhraseIndex = 0;

const writeLetter = async () =>{
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

const boxContainer = document.querySelector('.registration__login__container');
const loginLink = document.querySelector('.login__link');
const registerLink = document.querySelector('.register__link');
const loginButton = document.querySelector('.loging');
const close = document.querySelector('.icon__close');

registerLink.addEventListener('click', () => {
    boxContainer.classList.add('active');
});
loginLink.addEventListener('click', () => {
    boxContainer.classList.add('active');
});
loginButton.addEventListener('click', () => {
    boxContainer.classList.add('active-label');
});
close.addEventListener('click', () => {
    boxContainer.classList.remove('active-label');
});
