'use strict'

var firstQuestion = prompt('Was I born in the 1970s?');

if (firstQuestion.toUpperCase() === 'YES' || firstQuestion.toUpperCase() === 'Y') {
    console.log('I was not born in the 1970s, but you were very close. I was born in April of 1980.');
} else if (firstQuestion.toUpperCase() === 'NO' || firstQuestion.toUpperCase() === 'N') {
    console.log('You are correct!  I just barely missed the 1970s, being born in April of 1980.');
} else {
    console.log();('You didn\'t enter a valid response!');
}

var secondQuestion = prompt('Have I lived anywhere outside of Washington state in my life?');

if (secondQuestion.toUpperCase() === 'YES' || secondQuestion.toUpperCase() === 'Y') {
    console.log('That is correct! I have lived many places in my life. These places include Washington, DC, Texas, South Carolina, and Virginia.');
} else if (secondQuestion.toUpperCase() === 'NO' || secondQuestion.toUpperCase() === 'N') {
    console.log('Actually I have been fortunate to live several different places in my life.');
} else {
    console.log();('You didn\'t enter a valid response!');
}

var thirdQuestion = prompt('Did I attend college after graduating from high school?');

if (thirdQuestion.toUpperCase() === 'YES' || thirdQuestion.toUpperCase() === 'Y') {
    console.log('That\'s correct.  I attended the University of Washington, and studied Political Science.');
  } else if (thirdQuestion.toUpperCase() === 'NO' || thirdQuestion.toUpperCase() === 'N') {
    console.log('You are incorrect.  I did attend college after graduating from high school.')
  } else {
    console.log();('You didn\'t enter a valid response!');
}

var fourthQuestion = prompt('Do I have any siblings?');

if (fourthQuestion.toUpperCase() === 'YES' || fourthQuestion.toUpperCase() === 'Y') {
    console.log('Yes. I have one brother and one sister.');
  } else if (fourthQuestion.toUpperCase() === 'NO' || fourthQuestion.toUpperCase() === 'N') {
    console.log('Incorrect. I have a brother and a sister.');
  } else {
    console.log();('You didn\'t enter a valid response!');
  }

  var fifthQuestion = prompt('Am I right-handed?');

  if (fifthQuestion.toUpperCase() === 'YES' || fifthQuestion.toUpperCase() === 'Y') {
    console.log('No! I am left-handed.');
  } else if (fifthQuestion.toUpperCase() === 'NO' || fifthQuestion.toUpperCase() === 'N') {
    console.log('That is correct!');
  } else {
    console.log();('You didn\'t enter a valid response!');
  }
