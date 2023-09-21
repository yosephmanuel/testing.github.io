'use strict';
/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 8;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 20;
console.log(document.querySelector('.guess').value);
*/
const randomnumber = Math.floor (Math.random() * 50);
console.log(randomnumber);

const number = document.querySelector('.number');
number.textContent = randomnumber;


/*
console.log(document.querySelector('.guess').value);

document.querySelector('body').style.backgroundColor = 'rgb(0,0,0)';


document.querySelector('.check').addEventListener('click',function()
{
    const guess = Number(document.querySelector('.guess').value);
    console.log(typeof guess);

    if(guess === number)
    {
        document.querySelector('.message').textContent = 'correct';
    }
    //document.querySelector('.message').textContent = 'Correct Number!';
});
*/