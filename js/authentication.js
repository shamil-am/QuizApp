import { quizMainPage } from "./quizPage.js";

const resetInput = (username = false) => {
  if (username === false) document.querySelector("#userName").value = "";
  document.querySelector("#userPassword").value = "";
};

const authenticate = (userName, password) => {
  fetch(`http://localhost:3000/users?name=${userName}`)
    .then((resp) => resp.json())
    .then((result) => {
      if (result.length === 0) {
        //username sehf olarsa
        alert("Istifadeci adi sehfdir");
        resetInput(false);
      } else if (result[0].password !== password) {
        //username duzdur parol sehfdir
        alert("Parol sehfdir");
        resetInput(true);
      } else {
        alert("Imtahan baslayir");
        //suallarin yuklenmesi
        quizMainPage();
      }
    });
};

export { authenticate };
