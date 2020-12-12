import { welcomePage } from "./js/welcomePage.js";
import { authenticate } from "./js/authentication.js";
// parol: Sincere@april.biz

//giris sehifesi yuklenir
welcomePage();

document.querySelector("#btnEnter").addEventListener("click", (e) => {
  e.preventDefault();
  let userName = document.querySelector("#userName").value;
  let password = document.querySelector("#userPassword").value;
  //yoxlama
  authenticate(userName, password);
});


//silinecek
document.querySelector("#go").addEventListener("click", (e) => {
  e.preventDefault();
  authenticate("Bret", "Sincere@april.biz");
});
//silinecek