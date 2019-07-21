$( document ).ready(function() {

    //trivia quetions
var triviaQuestion = [
    
    {
        question: '1. Who is the headmaster of Hogwarts from Harry\'s years 1-6?',
        answers: [
            'Minerva Mcgonagall', 
            'Albus Dumbledore', 
            'Cornelius Fudge', 
            'Alicia Spinnet'
        ],
        correct: 'Albus Dumbledore',
        giphy: 'https://media.giphy.com/media/14q7kvYacWa2I0/source.gif',
    
    },
    
    {
        question: '2. Which of these characters was an Auror?',
        answers: [
            'Molly Weasley', 
            'Amelia Bones', 
            'Vernon Dursley', 
            'Kingsley Shacklebolt'
        ],
        correct: 'Kingsley Shacklebolt',
        giphy: 'https://media.giphy.com/media/nlGg2sUFBBJdu/source.gif'
    },
    {
        question: '3. In which Country is Hogwarts located in?',
        answers: [
            'England', 
            'Scotland', 
            'Wales', 
            'Iceland'
        ],
        correct: 'Scotland',
        giphy: 'https://media.giphy.com/media/Bh3YfliwBZNwk/source.gif'
    },
    {
        question: '4. What is the name of the Weasly\'s home?',
        answers: [
            'The Burrow', 
            'The Cavern', 
            'The Knoll', 
            'The Manor'
        ],
        correct: 'The Burrow',
        giphy: 'https://media.giphy.com/media/3LaZ62mBQ8fN6/source.gif'
    },
    {
        question: '5. What is Harry\'s Patronus?',
        answers: [
            'Badger', 
            'Stag', 
            'Doe', 
            'Dragon'
        ],
        correct: 'Stag',
        giphy: 'https://media.giphy.com/media/ru4uZmSQOhatW/giphy.gif'
    },
    {
        question: '6. Which of these in NOT a Quidditch ball?',
        answers: [
            'Quaffle', 
            'Snitch', 
            'Kwark', 
            'Bludger'
        ],
        correct: 'Kwark',
        giphy: 'https://media.giphy.com/media/go5Iy1VIpVwqI/source.gif'
    },
    {
        question: '7. Which of these characters was in Hufflepuff?',
        answers: [
            'Draco Malfoy', 
            'Colin Creevy', 
            'Terry Boot', 
            'Ernie Macmillan'
        ],
        correct: 'Ernie Macmillan',
        giphy: 'https://media.giphy.com/media/PMp40oEvNfKve/giphy.gif'
    },
    {
        question: '8. Which of these characters was in Ravenclaw?',
        answers: [
            'Cho Chang', 
            'Susan Bones', 
            'Vincent Crabbe', 
            'Seamus Finnigan'
        ],
        correct: 'Cho Chang',
        giphy: 'https://media.giphy.com/media/11SafKw1pxWg1y/giphy.gif'
    },
    {
        question: '9. What is the name of Harry\'s owl?',
        answers: [
            'Mr. Owl', 
            'Wentworth', 
            'Hedwig', 
            'Owly McOwlface'
        ],
        correct: 'Hedwig',
        giphy: 'https://media.giphy.com/media/11dM7nEQzT1Idy/source.gif'
    },
    {
        question: '10. Which train station is Platform 9 3/4 located',
        answers: [
            'Kings Cross', 
            'Edinburgh Waverly', 
            'Paddington', 
            'Birmingham New Street'
        ],
        correct: 'Kings Cross',
        giphy: 'https://media.giphy.com/media/owTpFAZ3ZsO9W/source.gif'
    }

]
//global variables
var user = {
    choice: '',
    correct: 0,
    incorrect: 0
}

var questionIndex = 0;

var time = 30;
var intervalId;

//start button
$('#start').append("<button type='button'>" + 'Start' + "</button>")
$('#start').on('click', startGame);

//function to start the game 
function startGame(){

//check to see if trivia is done
if (questionIndex === 10){
    finalScore();
    return;
}

$('#start').remove();
$("#time").html("<h2>" + time + "</h2>");

function run() {
    intervalId = setInterval(decrement, 1000);
  }
  function decrement() {

    time--;
    $("#time").html("<h2>" + time + "</h2>");
   
    if (time === 0){
        checkAnswer();
    }

  }

run();

    for(i=0;i<triviaQuestion.length;i++){

        var question = triviaQuestion[questionIndex].question;
        var answers = triviaQuestion[questionIndex].answers;
        var correct = triviaQuestion[questionIndex].correct;
        var giphy = triviaQuestion[questionIndex].giphy;
        
        
        $('#trivia').html('<p>' + question + '</p>');
 
        for(j=0;j<answers.length;j++){
            var answerBtns=$('<button type="button" name="response" class="response">' + answers[j] + '</button>');
            $('#trivia').append(answerBtns);
        }
    

        $('button').on('click', function(){
            var values = $(this).text();
            user.choice = values;
            checkAnswer();
        })

        function checkAnswer(){
            if (user.choice === correct){
                clearInterval(intervalId);
                user.correct++
                $('#time').empty();
                $('#trivia').text('That\'s correct! ');
                var showGiphy = $('<img>');
                showGiphy.attr("src", giphy);
                showGiphy.attr("alt", user.choice);
                $('#giphy').append(showGiphy);
                questionIndex++
                time=30;
                nextQuestion();
            } else if (time === 0){
                clearInterval(intervalId);
                user.incorrect++
                $('#time').empty();
                $('#trivia').text('Sorry! You ran out of time! ');
                var showGiphy = $('<img>');
                showGiphy.attr("src", giphy);
                showGiphy.attr("alt", user.choice);
                $('#giphy').append(showGiphy);
                questionIndex++
                time=30;
                nextQuestion();
            } else if(user.choice !== correct){
                clearInterval(intervalId);
                user.incorrect++
                $('#time').empty();
                $('#trivia').html('<h2>' + 'WRONG ' + '</h2>');
                var showGiphy = $('<img>');
                showGiphy.attr("src", giphy);
                showGiphy.attr("alt", user.choice);
                $('#giphy').append(showGiphy);
                questionIndex++
                time=30;
                nextQuestion();
            } else {
                return;
            }
        }

    }
}

function nextQuestion() {
    var giphyTime = 5;
    var interval = setInterval(showNext, 1000);

        function showNext(){
        giphyTime--;
            if (giphyTime === 0) {
                $('#giphy').empty();
                startGame();         
              }
        }
    }

function finalScore(){

    clearInterval(intervalId);
    $('#time').empty();
    $('#trivia').html(
        'You got ' + user.correct + ' questions correct and '
        + '<p>' + user.incorrect + ' questions wrong! '+'</p>'
        + '<p>' + 'Click Restart to play again!' + '</p>');
    $('#restart').append("<button type='button' id='restart'>" + 'Restart' + "</button>")

    $('#restart').on('click', restartGame);
}

function restartGame(){
    $('#restart').empty();
    user.choice = '';
    user.correct = 0;
    user.incorrect = 0;
    questionIndex = 0;

    startGame();
}



})