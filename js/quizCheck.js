import { examResult } from "./examResult.js";

const quizCheck = () => {
  let resultArr = [];
  let allRadioBtns = document.querySelectorAll("input[type='radio']");
  let allCheckedBtns = document.querySelectorAll("input[type='radio']:checked");
  if (allRadioBtns.length / 4 === allCheckedBtns.length) {
    allCheckedBtns = Array.from(allCheckedBtns);
    allCheckedBtns.map((radio) => {
      resultArr.push(radio.nextElementSibling.textContent);
    });
  } else {
    alert("Butun suallar cavablandirilmayib");
    return;
  }

  examResult(resultArr);
};

export { quizCheck };
