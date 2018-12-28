//initializa the .js document
$(document).ready(function () {

    //Create a variable to hold objects od all question, answers
    var gameQuestions = [

        {
            question: "Do male or female reindeer grow antlers?",
            numberId: 'qestion-1',
            options: ["female", "male", "both male and female", "none of them"],
            correctAnswer: "both male and female",
        },
        {
            question: "Who is the most famous reindeer in history?",
            numberId: 'qestion-2',
            options: ["Dasher", "Dancer", "Comet", "Rudolph the red nose Reindeer"],
            correctAnswer: "Rudolph the red nose Reindeer",
        },
        {
            question: "How much do male polar bears usually weigh?",
            numberId: 'qestion-3',
            options: ["100 lb", "5000 lb", "1000 lb", "200 lb"],
            correctAnswer: "1000 lb",
        },
        {
            question: "How long till newborn polar bears gain the ability to see and hear?",
            numberId: 'qestion-4',
            options: ["1 month", "6 months", "1 year", "3 months"],
            correctAnswer: "1 month",
        }
    ]

    var questionCount = 0;
    

    //set time counter number
    var timeCounter = 10;
    //Variable that hold the setInterval that will start the game
    var intervalId;

    //create var to hold 
    //Click start button to start the game
    //timer countdown starts
    //questions will show

    $("#startBtn").on('click', function () {
        event.preventDefault();
        console.log('start button is working');
        startGame();
        showQuestion();



        //renderButtons();
    });


    //write function to start the time count down
    function startGame() {
        clearInterval(intervalId);

        intervalId = setInterval(decrement, 1000);
    }
    //function that will decrement seconds from time given
    function decrement() {
        timeCounter--;

        //Jquery to display timer on the page
        $('#display').text("00:0" + timeCounter);

        //set the condition to for time up
        if (timeCounter === 0) {

            //  ...run the stop function
            stop();

            //  Alert the user that time is up .
            alert("Time Up!");
        }
    }
    //function to stop the timer
    function stop() {
        clearInterval(intervalId);

    }
    //showQuestion function will show the question dynamically on the page
    //create question variable and answer variable that is held in gameQuestion object
    function showQuestion() {
        for (var g = 0; g <gameQuestions.length; g++){

        //console.log(gameQuestions[0]);
        var newGameQuestion = $("<p>");
        newGameQuestion.append(gameQuestions[questionCount].question);
        $("#question").append(newGameQuestion);

        for (var i = 0; i < gameQuestions.length; i++) {
            var buttons = $('<button>').addClass('index');
            buttons.append(gameQuestions[questionCount].options[i]);
            $("#question").append(buttons); 
        }
    
        questionCount++;
    }
   $('.index').on('click',function(){
       
        if ($(this).text() === gameQuestions[0].correctAnswer || $(this).text() === gameQuestions[1].correctAnswer || $(this).text() === gameQuestions[2].correctAnswer || $(this).text() === gameQuestions[3].correctAnswer){
            console.log('correect');
        }
        else {
            console.log("incorrect");
        }
        //console.log($(this));
        
    })
    stop();
}
});