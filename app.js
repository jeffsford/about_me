'use strict'

var userName = prompt('What is your name?');
    alert('It\'s nice to meet you ' + userName + '!');

var firstQuestion = prompt('Was I born in the 1970s?');

if (firstQuestion.toUpperCase() === 'YES' || firstQuestion.toUpperCase() === 'Y') {

    alert('I was not born in the 1970s, but you were very close. I was born in April of 1980.');

    console.log('I was not born in the 1970s, but you were very close. I was born in April of 1980.');

} else if (firstQuestion.toUpperCase() === 'NO' || firstQuestion.toUpperCase() === 'N') {

    alert('You are correct!  I just barely missed the 1970s, being born in April of 1980.');

    console.log('You are correct!  I just barely missed the 1970s, being born in April of 1980.');
} else {

    alert('You didn\'t enter a valid response!');

    console.log('You didn\'t enter a valid response!');
}

var secondQuestion = prompt('Have I lived anywhere outside of Washington state in my life?');

if (secondQuestion.toUpperCase() === 'YES' || secondQuestion.toUpperCase() === 'Y') {

    alert('That is correct! I have lived many places in my life. These places include Washington, DC, Texas, South Carolina, and Virginia.');

    console.log('That is correct! I have lived many places in my life. These places include Washington, DC, Texas, South Carolina, and Virginia.');

} else if (secondQuestion.toUpperCase() === 'NO' || secondQuestion.toUpperCase() === 'N') {

    alert('Actually I have been fortunate to live several different places in my life.');

    console.log('Actually I have been fortunate to live several different places in my life.');

} else {

    alert('You didn\'t enter a valid response!');

    console.log('You didn\'t enter a valid response!');
}

var thirdQuestion = prompt('Did I attend college after graduating from high school?');

if (thirdQuestion.toUpperCase() === 'YES' || thirdQuestion.toUpperCase() === 'Y') {

    alert('That\'s correct.  I attended the University of Washington, and studied Political Science.');

    console.log('That\'s correct.  I attended the University of Washington, and studied Political Science.');

} else if (thirdQuestion.toUpperCase() === 'NO' || thirdQuestion.toUpperCase() === 'N') {

    alert('You are incorrect.  I did attend college after graduating from high school.');

    console.log('You are incorrect.  I did attend college after graduating from high school.');

} else {

    alert('You didn\'t enter a valid response!');

    console.log('You didn\'t enter a valid response!');
}

var fourthQuestion = prompt('Do I have any siblings?');

if (fourthQuestion.toUpperCase() === 'YES' || fourthQuestion.toUpperCase() === 'Y') {

    alert('Yes. I have two siblings.');

    console.log('Yes. I have two siblings.');

} else if (fourthQuestion.toUpperCase() === 'NO' || fourthQuestion.toUpperCase() === 'N') {

    alert('Incorrect. I have two siblings.');

    console.log('Incorrect. I have two siblings.');

} else {

    alert('You didn\'t enter a valid response!');

    console.log('You didn\'t enter a valid response!');
}

var fifthQuestion = prompt('Am I right-handed?');

if (fifthQuestion.toUpperCase() === 'YES' || fifthQuestion.toUpperCase() === 'Y') {

    alert('No! I am left-handed.');

    console.log('No! I am left-handed.');

} else if (fifthQuestion.toUpperCase() === 'NO' || fifthQuestion.toUpperCase() === 'N') {

    alert('That is correct!');

    console.log('That is correct!');

} else {

    alert('You didn\'t enter a valid response!');

    console.log('You didn\'t enter a valid response!');
}
