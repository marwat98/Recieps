function sleep(ms){
    return new Promise((resolve)=> setTimeout(resolve,ms));
}
const phrases = ["Babci Basi"];
const element = document.getElementById("grandmother");

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