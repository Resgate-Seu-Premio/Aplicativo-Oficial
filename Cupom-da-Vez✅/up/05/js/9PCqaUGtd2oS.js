function toggleAnswer(question) {
    const answer = question.nextElementSibling;
    answer.classList.toggle("active");
  
    const allQuestions = document.querySelectorAll(".question");
    allQuestions.forEach((otherQuestion) => {
      if (otherQuestion !== question) {
        otherQuestion.nextElementSibling.classList.remove("active");
      }
    });
  }