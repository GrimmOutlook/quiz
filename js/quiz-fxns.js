// import * as quiz from './quiz';

// import quiz from "./quiz";

// An array of objects, each containing a questions, the correct answer, & an array of 3 incorrect choices is assigned to var quiz in the quiz.js file.

// state object - contains all items that can possibly be updated as the user interacts with the quiz app.

var state = {
  currentQuestion: 1,
  quizQuestion: {},
  userGuess: "",
  correctGuesses: 0,
  incorrectGuesses: 0
};

var totalQuestions = 5;

//  ---------------------- STATE MODIFICATION FXNS.  -------------------------------

// A fxn that randomly selects an array index value betw 1 & 10 for the quiz object.  The state of the quizQuestion object is updated to the value of quiz.[-index value-].
var questionNow = function(state, quiz){
  state.quizQuestion = quiz[Math.floor(Math.random()*(10-1+1)) + 1];
};

// A fxn that stores the value of a user's guess (a string) into var userGuess.
var userGuessTracker = function(state, guess){
  state.userGuess = guess;
};

// A fxn that increments by 1 the current question number (var currentQuestion).
var questionCounter = function(state){
  state.currentQuestion += 1;
};

// A fxn that increments by 1 the number of correctly answered questions (var correctGuesses).
var correctCounter = function(state){
  state.correctGuesses += 1;
  return state.correctGuesses;
};

// A fxn that increments by 1 the number of correctly answered questions (var incorrectGuesses).
var incorrectCounter = function(state){
  state.incorrectGuesses += 1;
  return state.incorrectGuesses;
};

// NEEDED?????????????
var guessComparison = function(state){
  state.quizQuestion.answer === state.userGuess;
};



// -------------------------------- RENDER FXNS: ----------------------------------
// A fxn that displays the number of the current question.
var questionNumber = function(state, element){
  var itemsHTML = "<b>" + state.currentQuestion + "</b>";
  element.html(itemsHTML);
};

// A fxn that concats the answer & other 3 choices into 1 array.  Then sorts them into a random order.
var randomAllChoices = function(state){
  state.quizQuestion.choices.push(state.quizQuestion.answer);
    state.quizQuestion.choices.sort(function(){
      return .5 - Math.random();
    });
  // console.log(state.quizQuestion.choices);
  return state.quizQuestion.choices;
};

// A fxn that displays a question, the answer, & 3 other multiple choices.
var renderQuiz = function(state, element){
  var itemsHTML = "<h1>" + state.quizQuestion.question + "</h1><br>" +
      state.quizQuestion.choices.map(function(choice){
        // console.log(choice);
        return '<li><label for="user-guess">' + choice + '</label><br><input type="radio" name="quiz-answer-entry" class="quiz-answer-entry" value="' + choice + '"></li><br>';
      });
      // console.log(itemsHTML);
  element.html(itemsHTML);
};

// One fxn with if...else statement to update
var renderQuestionCorrectness = function(state, correct, incorrect){
  if (state.quizQuestion.answer === state.userGuess){
    correctCounter(state);
  }
  else {
    incorrectCounter(state);
  }
  correct.html(state.correctGuesses);
  incorrect.html(state.incorrectGuesses);
};

// A fxn that takes each of the userGuess array items & compares them to the correct answers in var quiz.  If equal, mark as correct, if not, mark as incorrect.
var endQuiz = function(state, element){
  if (state.currentQuestion <= totalQuestions){
    questionNow(state, quiz);
  }
  else {
    var itemsHTML = "<div>" + "Quiz is finished, try again?" + "</div>";
  }
  element.html(itemsHTML);
};

// Have a 'Start' or 'Replay' button.  Need this?


// -------------------------------- JQUERY FXNS: ----------------------------------

// jQuery fxn that calls all fxns that will display the quiz questions & choices upon clicking the 'Start!' button.
$(function(){
  $('.start-quiz').click(function(){
    event.preventDefault();
    questionNumber(state, $('#question-counter > span:first-child'));
    questionNow(state, quiz);
    randomAllChoices(state);
    renderQuiz(state, $('.quiz-choices'));
  });
});

// Once 'Submit Answer!' button is clicked, jQuery fxn that calls all fxns that will get the user's guess and compare it to the correct answer, then update either the correct or incorrect count by one.
$('#js-quiz-form > button').click(function(event){
  event.preventDefault();
  userGuessTracker(state, $('.quiz-answer-entry').val());
  renderQuestionCorrectness(state, $('#correct-guess'), $('#incorrect-guess'));
  questionCounter(state);
  endQuiz(state, $('.start-quiz'));
  questionNumber(state, $('#question-counter > span:first-child'));
  // questionNow(state, quiz);
  randomAllChoices(state);
  renderQuiz(state, $('.quiz-choices'));

});











