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

// A fxn that takes the userGuess inputs and pushes them to the array value in guesses is created.  Modifies the state of the guess object.
var questionCounter = function(state){
  state.currentQuestion += 1;
}

var correctCounter = function(state){
  state.correctGuesses += 1;
}

var incorrectCounter = function(state){
  state.incorrectGuesses += 1;
}

var userGuessTracker = function(state, guess){
  state.userGuess = guess;
}

var questionNow = function(state, quiz){
  state.quizQuestion = quiz[Math.random(something to pick a question)];
}

var guessComparison = function(state, quiz){
  quiz[0].answer === state.userGuess;
}


// A fxn that takes each of the userGuess array items & compares them to the correct answers in var quiz.  If equal, mark as correct, if not, mark as incorrect.

// A fxn that has a counter to keep track of what question is being asked.

// A fxn that randomly displays the quiz question, along with displaying its 4 multiple choice guesses in a random order.  Once guess is made, the next question & multiple choices are displayed.

// A fxn that displays the question number counter.

// A fxn that displays the correct questions and incorrect questions.
