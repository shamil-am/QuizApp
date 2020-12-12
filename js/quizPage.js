import { questions } from "./questions.js";
import { quizCheck } from "./quizCheck.js";

function quizMainPage() {
  //butun suallari get etme
  let allQuestion = questions();
  //
  let container = document.createElement("div");
  container.className = "container";

  allQuestion.map((question) => {
    let row = document.createElement("div");
    row.className = "row my-3";
    let col_6 = document.createElement("div");

    //suallari style verme
    col_6.className = "col-8 offset-2";
    col_6.innerHTML += `
    <ul class="list-group">
            <li class="list-group-item list-group-item-primary">${question.question}</li>
            <li class="list-group-item list-group-item">
              <input type="radio" name="${question.question}" id="" class="form-check-input"/>
              <span>${question.a}</span>
            </li>
            <li class="list-group-item list-group-item">
              <input type="radio" name="${question.question}" id="" class="form-check-input"/>
              <span>${question.b}</span>
            </li>
            <li class="list-group-item list-group-item">
              <input type="radio" name="${question.question}" id="" class="form-check-input"/>
              <span>${question.c}</span>
            </li>
            <li class="list-group-item list-group-item">
              <input type="radio" name="${question.question}" id="" class="form-check-input"/>
              <span>${question.d}</span>
            </li>
          </ul>
    `;
    row.appendChild(col_6);
    container.appendChild(row);
  });
  //finish buttonu
  let row = document.createElement("div");
  row.className = "row my-3";
  let col_6 = document.createElement("div");
  col_6.className = "col-8 offset-2";
  col_6.innerHTML = `<button class="btn btn-success" id="examFinish">Finish</button>`;
  row.appendChild(col_6);
  container.appendChild(row);
  //sehifeye yukleme
  document.querySelector("body").innerHTML = "";
  document.querySelector("body").className = "bg bg-secondary";
  document.querySelector("body").append(container);
  //cavablari yoxlama
  document.querySelector("#examFinish").addEventListener("click", () => {
    quizCheck();
  });
}

export { quizMainPage };
