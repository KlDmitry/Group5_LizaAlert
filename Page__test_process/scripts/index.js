const inputAnswer1 = document.querySelector("#first-question__answer_1");
const inputAnswer2 = document.querySelector("#first-question__answer_2");
const inputAnswer3 = document.querySelector("#first-question__answer_3");
const textAnswer1 = document.querySelector("#answer__text_1");
const textAnswer2 = document.querySelector("#answer__text_2");
const textAnswer3 = document.querySelector("#answer__text_3");
const inputAnswerS1 = document.querySelector("#second-question__answer_1");
const inputAnswerS2 = document.querySelector("#second-question__answer_2");
const inputAnswerS3 = document.querySelector("#second-question__answer_3");
const textAnswerS1 = document.querySelector("#answer__text_S1");
const textAnswerS2 = document.querySelector("#answer__text_S2");
const textAnswerS3 = document.querySelector("#answer__text_S3");


textAnswer1.addEventListener("click", (e) => {
  if (inputAnswer1.matches(":checked")) {
    textAnswer1.classList.remove("answer__text_ckecked");
  } else {
    textAnswer1.classList.add("answer__text_ckecked");
  }
});
inputAnswer1.addEventListener("click", (e) => {
  if (inputAnswer1.matches(":checked")) {
    textAnswer1.classList.add("answer__text_ckecked");
  } else {
    textAnswer1.classList.remove("answer__text_ckecked");
  }
});

textAnswer2.addEventListener("click", (e) => {
  if (inputAnswer2.matches(":checked")) {
    textAnswer2.classList.remove("answer__text_ckecked");
  } else {
    textAnswer2.classList.add("answer__text_ckecked");
  }
});
inputAnswer2.addEventListener("click", (e) => {
  if (inputAnswer2.matches(":checked")) {
    textAnswer2.classList.add("answer__text_ckecked");
  } else {
    textAnswer2.classList.remove("answer__text_ckecked");
  }
});

textAnswer3.addEventListener("click", (e) => {
  if (inputAnswer3.matches(":checked")) {
    textAnswer3.classList.remove("answer__text_ckecked");
  } else {
    textAnswer3.classList.add("answer__text_ckecked");
  }
});
inputAnswer3.addEventListener("click", (e) => {
  if (inputAnswer3.matches(":checked")) {
    textAnswer3.classList.add("answer__text_ckecked");
  } else {
    textAnswer3.classList.remove("answer__text_ckecked");
  }
});


textAnswerS1.addEventListener("click", (e) => {
      textAnswerS1.classList.add("answer__text_ckecked");
      textAnswerS2.classList.remove("answer__text_ckecked");
      textAnswerS3.classList.remove("answer__text_ckecked");
  });
inputAnswerS1.addEventListener("click", (e) => {
      textAnswerS1.classList.add("answer__text_ckecked");
      textAnswerS2.classList.remove("answer__text_ckecked");
      textAnswerS3.classList.remove("answer__text_ckecked");
  });
  
  textAnswerS2.addEventListener("click", (e) => {
    textAnswerS2.classList.add("answer__text_ckecked");
    textAnswerS1.classList.remove("answer__text_ckecked");
    textAnswerS3.classList.remove("answer__text_ckecked");
  });
  inputAnswerS2.addEventListener("click", (e) => {
    textAnswerS2.classList.add("answer__text_ckecked");
    textAnswerS1.classList.remove("answer__text_ckecked");
    textAnswerS3.classList.remove("answer__text_ckecked");
  });
  
  textAnswerS3.addEventListener("click", (e) => {
    textAnswerS3.classList.add("answer__text_ckecked");
    textAnswerS2.classList.remove("answer__text_ckecked");
    textAnswerS1.classList.remove("answer__text_ckecked");
  });
  inputAnswerS3.addEventListener("click", (e) => {
    textAnswerS3.classList.add("answer__text_ckecked");
    textAnswerS2.classList.remove("answer__text_ckecked");
    textAnswerS1.classList.remove("answer__text_ckecked");
  });