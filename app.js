'use strict';

var userName = prompt('What is your name?');alert('It\'s nice to meet you ' + userName + '!');

var firstQuestion = prompt('Was I born in the 1970s?');
var answerI = 'You didn\'t enter a valid response!';
var numCorrect = 0;

function question1() {
  if (firstQuestion.toUpperCase() === 'YES' || firstQuestion.toUpperCase() === 'Y') {
    var answerOneY = 'I was not born in the 1970s, but you were very close. I was born in April of 1980.';
    alert(answerOneY);
    console.log(answerOneY);
  } else if (firstQuestion.toUpperCase() === 'NO' || firstQuestion.toUpperCase() === 'N') {
    var answerOneN = 'You are correct!  I just barely missed the 1970s, being born in April of 1980.';
    numCorrect++;
    alert(answerOneN);
    console.log(answerOneN);
  } else {
    alert(answerI);
    console.log(answerI);
  }
}
question1();

var secondQuestion = prompt('Have I lived anywhere outside of Washington state in my life?');

function question2() {
  if (secondQuestion.toUpperCase() === 'YES' || secondQuestion.toUpperCase() === 'Y') {
    var answerTwoY = 'That is correct! I have lived many places in my life. These places include Washington, DC, Texas, South Carolina, and Virginia.';
    numCorrect++;
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
}
question2();

var thirdQuestion = prompt('Did I attend college after graduating from high school?');

function question3() {
  if (thirdQuestion.toUpperCase() === 'YES' || thirdQuestion.toUpperCase() === 'Y') {
    var answerThreeY = 'That\'s correct.  I attended the University of Washington, and studied Political Science.';
    numCorrect++;
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
}
question3();

var fourthQuestion = prompt('Do I have any siblings?');

function question4() {
  if (fourthQuestion.toUpperCase() === 'YES' || fourthQuestion.toUpperCase() === 'Y') {
    var answerFourY = 'Yes. I do have siblings.';
    numCorrect++;
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
}
question4();

var fifthQuestion = prompt('Am I right-handed?');

function question5() {
  if (fifthQuestion.toUpperCase() === 'YES' || fifthQuestion.toUpperCase() === 'Y') {
    var answerFiveY = 'No! I am left-handed.';
    alert(answerFiveY);
    console.log(answerFiveY);
  } else if (fifthQuestion.toUpperCase() === 'NO' || fifthQuestion.toUpperCase() === 'N') {
    var answerFiveN = 'That is correct!';
    numCorrect++;
    alert(answerFiveN);
    console.log(answerFiveN);
  } else {
    alert(answerI);
    console.log(answerI);
  }
}
question5();

function guessNum() {
  for (var i = 0; i < 4; i++) {
    var sixthQuestion = prompt('Guess a number between 1 and 10.');
    if (sixthQuestion < 7) {
      var answerSixLow = 'The number you guessed is too low.';
      alert(answerSixLow);
      console.log(answerSixLow);
    } else if (sixthQuestion > 7) {
      var answerSixHigh = 'The number you guessed is too high.';
      alert(answerSixHigh);
      console.log(answerSixHigh);
    } else if (sixthQuestion == 7) { // prompt returns a string, can't use functions
      var answerSixCorrect = 'You are correct! The number was 7.';
      numCorrect++;
      alert(answerSixCorrect);
      console.log(answerSixCorrect);
      break;
    } else {
      var answerSixNaN = 'The answer you entered is not a number.';
      alert(answerSixNaN);
      console.log(answerSixNaN);
    }
  }
}
guessNum();

function favMovie() {
  for (var i = 0; i < 6; i++) {

    var favoriteMovies = ['Kong: Skull Island', 'Logan', 'Get Out', 'The Shack', 'Beauty and the Beast', 'Ghost in the Shell', 'The Lego Batman Movie', 'Moonlight', 'Hidden Figures', 'La La Land'];

    var seventhQuestion = prompt('Can you name one of my top 10 favorite movies?');

    var answerSevenCorrect = false;
    for (var j = 0; j < favoriteMovies.length; j++) {
      if (seventhQuestion.toUpperCase() == favoriteMovies[j].toUpperCase()) {
        answerSevenCorrect = true;
      }
    }
    if (answerSevenCorrect === true) {
      var answerSevenY = 'That\'s right! ' + seventhQuestion + ' is one of my favorite movies.';
      numCorrect++;
      alert(answerSevenY);
      console.log(answerSevenY);
      break;
    } else {
      var answerSevenN = 'That is not correct. Acceptable answers include Kong: Skull Island, Logan, Get Out, The Shack, Beauty and the Beast, Ghost in the Shell, The Lego Batman Movie, Moonlight, Hidden Figures, and La La Land.';
      alert(answerSevenN);
      console.log(answerSevenN);
    }
  }
}
favMovie();

var totalCorrect = 'You correctly answered ' + numCorrect + ' out of 7 questions.';
alert(totalCorrect);
console.log(totalCorrect);
