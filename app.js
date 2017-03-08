'use strict';

var userName = prompt('What is your name?');
  alert('It\'s nice to meet you ' + userName + '!');

var firstQuestion = prompt('Was I born in the 1970s?');
var answerI = 'You didn\'t enter a valid response!';

if (firstQuestion.toUpperCase() === 'YES' || firstQuestion.toUpperCase() === 'Y') {
var answerOneY = 'I was not born in the 1970s, but you were very close. I was born in April of 1980.';
  alert(answerOneY);
  console.log(answerOneY);
} else if (firstQuestion.toUpperCase() === 'NO' || firstQuestion.toUpperCase() === 'N') {
var answerOneN = 'You are correct!  I just barely missed the 1970s, being born in April of 1980.';
  alert(answerOneN);
  console.log(answerOneN);
} else {
  alert(answerI);
  console.log(answerI);
}

var secondQuestion = prompt('Have I lived anywhere outside of Washington state in my life?');

if (secondQuestion.toUpperCase() === 'YES' || secondQuestion.toUpperCase() === 'Y') {
var answerTwoY = 'That is correct! I have lived many places in my life. These places include Washington, DC, Texas, South Carolina, and Virginia.';
  alert(answerTwoY);
  console.log(answerTwoY);
} else if (secondQuestion.toUpperCase() === 'NO' || secondQuestion.toUpperCase() === 'N') {
var answerTwoN = 'Actually I have been fortunate to live several different places in my life.';
  alert(answerTwoN);
  console.log(answerTwoN);
} else {
  alert(answerI);
  console.log(answerI);
}

var thirdQuestion = prompt('Did I attend college after graduating from high school?');

if (thirdQuestion.toUpperCase() === 'YES' || thirdQuestion.toUpperCase() === 'Y') {
var answerThreeY = 'That\'s correct.  I attended the University of Washington, and studied Political Science.';
    alert(answerThreeY);
    console.log(answerThreeY);
} else if (thirdQuestion.toUpperCase() === 'NO' || thirdQuestion.toUpperCase() === 'N') {
var answerThreeN = 'You are incorrect.  I did attend college after graduating from high school.';
  alert(answerThreeN);
  console.log(answerThreeN);
} else {
  alert(answerI);
  console.log(answerI);
}

var fourthQuestion = prompt('Do I have any siblings?');

if (fourthQuestion.toUpperCase() === 'YES' || fourthQuestion.toUpperCase() === 'Y') {
var answerFourY = 'Yes. I do have siblings.';
  alert(answerFourY);
  console.log(answerFourY);
} else if (fourthQuestion.toUpperCase() === 'NO' || fourthQuestion.toUpperCase() === 'N') {
var answerFourN = 'Incorrect. I do have siblings.';
    alert(answerFourN);
    console.log(answerFourN);
} else {
  alert(answerI);
  console.log(answerI);
}

var fifthQuestion = prompt('Am I right-handed?');

if (fifthQuestion.toUpperCase() === 'YES' || fifthQuestion.toUpperCase() === 'Y') {
var answerFiveY = 'No! I am left-handed.';
  alert(answerFiveY);
  console.log(answerFiveY);
} else if (fifthQuestion.toUpperCase() === 'NO' || fifthQuestion.toUpperCase() === 'N') {
var answerFiveN = 'That is correct!';
  alert(answerFiveN);
  console.log(answerFiveN);
} else {
  alert(answerI);
  console.log(answerI);
}
