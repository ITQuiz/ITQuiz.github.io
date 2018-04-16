function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
    new Question("Which one is not an object oriented programming language?", ["Java", "C#","C++", "C"], "C"),
    new Question("Which language is used for styling web pages?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
    new Question("There are ____ main components of object oriented programming.", ["1", "6","2", "4"], "4"),
    new Question("Which language is used for web apps?", ["PHP", "Python", "Javascript", "All"], "All"),
    new Question("MVC is a ____.", ["Language", "Library", "Framework", "All"], "Framework"),
    new Question("Wings of fire is written by",["A P J Abdul Kalam", "Robert frost", "Arunditi Roy","S.N lonley"],"A P J Abdul Kalam"),
    new Question("Which of the following is not a correct variable type?", ["q1", "q2", "Fq1", "@2"], "@2"),
    new Question("The keyword used to transfer control from a function back to the calling function is", ["Switch", "Goto", "Go Back", "Return"], "Return"),
    new Question("Pointer store address of other ?", ["Pointer", "Variable", "Headerfiles", "None"], "Variable"),
    new Question("Program starts from?", ["Main", "Header file", "IDE", "All"], "Main"),
    new Question("CN stands for ?", ["Computer network", "Computer node", "Code number", "None"], "Computer network"),
    new Question("Size of char is ?", ["1", "2", "4", "8"], "1"),
    new Question("C files are stored with which extension", [".Html", ".cpp", ".c", ".js"], ".c"),
    new Question("java was  a product of ?", ["Mysql", "Sql", "SUN", "Oracle"], "SUN"),
    new Question("Java is a product of ?", ["Mysql", "SUN", "Oracle", "All"], "Oracle"),
    new Question("Types of loops in c ?", ["1", "2", "3", "None"], "2"),
    new Question(".in stands for ?", ["India", "Inside", "Index", "none"], "India"),
    new Question("Rom stands for ?", ["Read only memory", "Read only main", "Rewrite only memory", "none"], "Read only memory"),
    new Question("Variable store", ["Value", "Address", "Binary", "File names"], "Value"),
    new Question("Linux is a ?", ["Os", "App", "Kernal", "Framework"], "Os"),
    new Question("Google is a ?", ["e-Wallet", "Search engine", "Framework", "All"], "Search engine"),
    new Question("Html is used for?", ["Web designing", "Query", "App designing", "none"], "Web designing"),
    new Question("Dynamic means ?", ["Compile time", "Run time", "Both", "none"], "Run time"),
    new Question("Stack is ", ["FIFO", "LIFO", "FILO", "LOLO"], "LIFO"),
    new Question("DS stands for", ["Data structure", "Data Science and algo ", "Data syntex", "Data Sync"], "Data structure"),




];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();





