let timer = $("#timer");
let timestart = 99;

function quizTimer() {
    setTimeout(function () {
        if (timestart > -1) {
            timer.text(timestart);
            timestart--;
            quizTimer();
        }
    }, 1000)
};

function question1() {
    $("#question").text("Is the sky blue?").attr("data-value", "a");
    let answers = ["yes", "no", "no", "no"];
    $("#a").text(answers[0]);
    $("#b").text(answers[1]);
    $("#c").text(answers[2]);
    $("#d").text(answers[3]);
}

function question2() {
    $("#question").text("Is water wet?").attr("data-value", "b");
    let answers = ["no", "yes", "no", "no"];
    $("#a").text(answers[0]);
    $("#b").text(answers[1]);
    $("#c").text(answers[2]);
    $("#d").text(answers[3]);
}

function answerChoice(event) {
    let penalty = 10
    let correct = $("#question").attr("data-value");
    let target = $(event.target);
    if (target.is("li")) {
        if (target.attr("data-value") === correct) {
            question2();
        }
        else {
            timestart = timestart - penalty;
            question2();
        }
    }
}


$(".answerBtn").on("click", answerChoice);
$("#startBtn").on("click", quizTimer);
$("#startBtn").on("click", question1);




