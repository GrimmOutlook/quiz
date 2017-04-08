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
};

// A fxn that increments by 1 the number of correctly answered questions (var incorrectGuesses).
var incorrectCounter = function(state){
  state.incorrectGuesses += 1;
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
  var allChoices = [state.quizQuestion.answer].concat([state.quizQuestion.choices]);
  var randomAllChoices = allChoices.sort(function(){
    return .5 - Math.random();
  });
  return randomAllChoices;
};

// A fxn that displays a question, the answer, & 3 other multiple choices.
var renderQuiz = function(state, element){
  var itemsHTML = "<h1>" + state.quizQuestion.question + "</h1>" +
      randomAllChoices(state).map(function(choice){
        return "<h3>" + choice + "</h3>";
      });
  element.html(itemsHTML);
};

// One fxn with if...else statement to update
var renderQuestionCorrectness = function(state, element){
  if (state.quizQuestion.answer === state.userGuess){
    var itemsHTML = "<b>" + state.correctGuesses + "</b>";
  }
  else {
    var itemsHTML = "<b>" + state.incorrectGuesses + "</b>";
  }
  element.html(itemsHTML);
};

var endQuiz = function(state, element){
  if (state.currentQuestion <= totalQuestions){
    questionNow(quiz);
  }
  else {
    var itemsHTML = "<div>" + "Quiz is finished, try again?" + "</div>";
  }
  element.html(itemsHTML);
};


// A fxn that takes each of the userGuess array items & compares them to the correct answers in var quiz.  If equal, mark as correct, if not, mark as incorrect.

// A fxn that has a counter to keep track of what question is being asked.

// A fxn that randomly displays the quiz question, along with displaying its 4 multiple choice guesses in a random order.  Once guess is made, the next question & multiple choices are displayed.

// Fxn that calls all the other fxns.  Only one??

// Have a 'Start' or 'Replay' button

$('.start-quiz').click(function(){
  event.preventDefault();
  questionNumber(state, $('#question-counter > span:first-child'));
  questionNow(state, quiz);
  console.log(state.quizQuestion);
  randomAllChoices(state);
  renderQuiz(state, $('.js-quiz-form > label'));
});

$('.js-quiz-form').submit(function(event){
  event.preventDefault();
  userGuessTracker(state, $('.quiz-answer-entry').val());
  renderQuestionCorrectness(state, $('.current-score > p.span'));
  questionCounter(state);
  endQuiz(state, $('.start-quiz'));
});

// console.log(quiz[4].choices[2]);

console.log(state.quizQuestion);










