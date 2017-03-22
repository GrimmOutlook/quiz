import quiz from "./quiz";

// An array of objects of questions, answers, & 3 incorrect answers is assigned to var quiz.

// An object, var guesses, is created with one key, userGuesses, and an empty array for a value.

// An empty array, correctGuesses, is created.

var state = {
  userGuess: "",
  correctGuesses: 0,
  incorrectGuesses: 0,
  currentQuestion: 1,
  quizQuestion: {}
};

var totalQuestions = 5;

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

// A fxn that stores the value of a user's guess (a string) into var userGuess.
var userGuessTracker = function(state, guess){
  state.userGuess = guess;
};

// A fxn that randomly selects an array index value betw 1 & 10 for the quiz object.  The state of the quizQuestion object is updated to the value of quiz.[-index value-].
var questionNow = function(state, quiz){
  state.quizQuestion = quiz[Math.floor(Math.random()*(10-1+1)) + 1];
};


var guessComparison = function(state, quiz){
  quizQuestion.answer === state.userGuess;
};

// Render Fxns:
// A fxn that displays the current question.
var questionNumber = function(state, element){
  var itemsHTML = "<span>" + state.correctQuestion + "</span>";
  element.html(itemsHTML);
};

// A fxn that displays questions, answer, & multiple choices, one at a time.
var renderQuiz = function(state, element){
  var itemsHTML = "<h1>" + state.quizQuestion.question + "</h1>" +
    "<h3>" + state.quizQuestion.answer + "</h3>" + state.quizQuestion.choices.map(function(choice){
        return "<h3>" + choice + "</h3>";
      });
  element.html(itemsHTML);
};

// A fxn that displays the question number counter.
// A fxn that displays the correct questions and incorrect questions.
// One fxn with if...else statement?  I think so!
var renderQuestionCorrectness = function(state, element){
  if (state.quizQuestion.answer === state.userGuess){
    var itemsHTML = "<span>" + state.correctGuesses + "</span>";
  }
  else {
    var itemsHTML = "<span>" + state.incorrectGuesses + "</span>";
  }
  element.html(itemsHTML);
};


// A fxn that takes each of the userGuess array items & compares them to the correct answers in var quiz.  If equal, mark as correct, if not, mark as incorrect.

// A fxn that has a counter to keep track of what question is being asked.

// A fxn that randomly displays the quiz question, along with displaying its 4 multiple choice guesses in a random order.  Once guess is made, the next question & multiple choices are displayed.














