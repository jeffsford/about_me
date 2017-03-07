'use strict'

var firstQuestion = prompt('Was I born in the 1970s?');

if (firstQuestion.toUpperCase() === 'YES' || firstQuestion.toUpperCase() === 'Y') {
    console.log('I was not born in the 1970s, but you were very close. I was born in April of 1980.');
} else if (firstQuestion.toUpperCase() === 'NO' || firstQuestion.toUpperCase() === 'N') {
    console.log('You are correct!  I just barely missed the 1970s, being born in April of 1980.')
} else {
    console.log();('You did\'nt put in a proper answer!')
}

var secondQuestion = prompt('Have I lived anywhere outside of Washington state in my life?');

if (secondQuestion.toUpperCase() === 'YES' || secondQuestion.toUpperCase() === 'Y') {
    console.log('That is correct! I have lived many places in my life. These places include Washington, DC, Texas, South Carolina, and Virginia.')
} else if (secondQuestion.toUpperCase() === 'NO' || secondQuestion.toUpperCase() === 'N') {
    console.log('Actually I have been fortunate to live several different places in my life.')
}

var thirdQuestion = prompt('')
