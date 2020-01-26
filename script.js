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

$("#startBtn").on("click", quizTimer);


