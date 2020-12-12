import { quizMainPage } from "./quizPage.js";

const resetInput = (username = false) => {
  if (username === false) document.querySelector("#userName").value = "";
  document.querySelector("#userPassword").value = "";
};

const authenticate = (userName, password) => {
  fetch(`https://jsonplaceholder.typicode.com/users?username=${userName}`)
    .then((resp) => resp.json())
    .then((result) => {
      if (result.length === 0) {
        //username sehf olarsa
        alert("Istifadeci adi sehfdir");
        resetInput(false);
      } else if (result[0].email !== password) {
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
