import { trueAnswers } from "./questions.js";
import { questions } from "./questions.js";

const examResult = (chckdAnswers) => {
  //
  let allTrueAnswers = trueAnswers();
  let checkedAnswers = chckdAnswers;
  //butun suallari get etme
  let allQuestion = questions();
  //
  let container = document.createElement("div");
  container.className = "container";

  allQuestion.map((question) => {
    let row = document.createElement("div");
    row.className = "row my-3";
    let col_6 = document.createElement("div");

    //netice gosterme
    col_6.className = "col-8 offset-2";
    col_6.innerHTML += `
      <ul class="list-group">
              <li class="list-group-item list-group-item-primary">${
                question.question
              }</li>
              <li class="list-group-item list-group-item-${
                allTrueAnswers.indexOf(question.a) !== -1 ? "success" : "danger"
              }">
                <input type="radio" name="${
                  question.question
                }" id="" class="form-check-input" ${
      checkedAnswers.indexOf(question.a) !== -1 ? "checked" : ""
    } disabled/>
                <span>${question.a}</span>
              </li>
              <li class="list-group-item list-group-item-${
                allTrueAnswers.indexOf(question.b) !== -1 ? "success" : "danger"
              }">
                <input type="radio" name="${
                  question.question
                }" id="" class="form-check-input" ${
      checkedAnswers.indexOf(question.b) !== -1 ? "checked" : ""
    } disabled/>
                <span>${question.b}</span>
              </li>
              <li class="list-group-item list-group-item-${
                allTrueAnswers.indexOf(question.c) !== -1 ? "success" : "danger"
              }">
                <input type="radio" name="${
                  question.question
                }" id="" class="form-check-input" ${
      checkedAnswers.indexOf(question.c) !== -1 ? "checked" : ""
    } disabled/>
                <span>${question.c}</span>
              </li>
              <li class="list-group-item list-group-item-${
                allTrueAnswers.indexOf(question.d) !== -1 ? "success" : "danger"
              }">
                <input type="radio" name="${
                  question.question
                }" id="" class="form-check-input" ${
      checkedAnswers.indexOf(question.d) !== -1 ? "checked" : ""
    } disabled/>
                <span>${question.d}</span>
              </li>
            </ul>
      `;
    row.appendChild(col_6);
    container.appendChild(row);
  });
  //sehifeye yukleme
  document.querySelector("body").innerHTML = "";
  document.querySelector("body").className = "bg bg-dark";
  document.querySelector("body").append(container);

  // duz cavablarin sayin yoxlanmasi
  let selectedTrueAnswersCount = 0;
  let allChechedButtons = Array.from(
    document.querySelectorAll("input[type='radio']:checked")
  );
  allChechedButtons.map((radioBtn) => {
    if (
      radioBtn.parentElement.className ===
      "list-group-item list-group-item-success"
    ) {
      selectedTrueAnswersCount++;
    }
  });

  let displayH2 = document.createElement("h2");
  displayH2.className = "bg bg-light";
  displayH2.textContent = `Umumi suallarin sayi: ${allQuestion.length} / Dugun cavablarin sayi: ${selectedTrueAnswersCount}`;
  document.querySelector(".container").append(displayH2);
};

export { examResult };
