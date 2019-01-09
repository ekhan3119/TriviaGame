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
    //var score = 0;
    correctAnswers = ["both male and female", "Rudolph the red nose Reindeer", "1000 lb", "1 month"];
    userAnswer = '';


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
            quizOver();
        }
    }
    //function to stop the timer
    function stop() {
        clearInterval(intervalId);

    }
    //showQuestion function will show the question dynamically on the page
    //create question variable and answer variable that is held in gameQuestion object
    function showQuestion() {
        for (var g = 0; g < gameQuestions.length; g++) {

            //console.log(gameQuestions[0]);
            //question has to render on the page in list
            //answers list has to have radio button 
            //user can only pick one answer
            var newGameQuestion = $("<p>");
            newGameQuestion.append(gameQuestions[g].question);
            $("#question").append(newGameQuestion);

            for (var i = 0; i < gameQuestions[g].options.length; i++) {
                var pAnswers = $('<p>');
                var question = gameQuestions[g];
                var option = question.options[i];
                var radioButton = $(`<input type="radio" value="${option}" name="${question.numberId}"> ${option} </input>`);

                //$('<button>').append(radioButton);
                   

                pAnswers.prepend(radioButton);
                //pAnswers.append(gameQuestions[questionCount].options[i]);

                $("#question").append(pAnswers);

                //console.log();
            }
           

        }}
        /*  
        function submitbutton(){
            
             if ($(this).text() === gameQuestions[0].correctAnswer || $(this).text() === gameQuestions[1].correctAnswer || $(this).text() === gameQuestions[2].correctAnswer || $(this).text() === gameQuestions[3].correctAnswer){
                 console.log('correect');
             }
             else {
                 console.log("incorrect");
             } */
        //console.log($(this));

        //}
       

        // to check the answer we have to create
        // make a variable to hold answer array
        //variable to hold correct answer array
        //check the user selected answer against the answer array
        //use for loop index to check the length of correct answer
        //then compare the user selection to correct answer array
        //when clicked on submit or time runs out, show result page
        // result holds number of correct, incorrect and unanswered question and answer
        // reset back everything
        //each id get the val of radio button.
        function quizOver() {
           // var radios = document.getElementsByName('genderS');
               var radio =$('input');
            for (var i = 0;  i < radio.length; i++) {
                if (radio[i].checked) {
                    // do whatever you want with the checked radio
                    console.log(radio[i].value)
                    //alert(radios[i].value);

                    // only one radio can be logically checked, don't check the rest
                    break;
                }
            }
        }
        stop();
        quizOver()
    });