const welcomePage = () => {
  document.querySelector("body").innerHTML = `<div class="conatiner">
  <div class="row pt-3 ">
    <div class="col-6 offset-3 p-3 border border-dark bg-dark
    ">
      <form>
        <div class="mb-3">
          <label for="userName" class="form-label text-light"
            >User id</label
          >
          <input type="text" class="form-control" id="userName"/>
        </div>
        <div class="mb-3">
          <label
            for="userPassword"
            class="form-label text-light"
            autocomplete="off"
            >Password</label
          >
          <input
            type="password"
            class="form-control"
            id="userPassword"
          />
        </div>
        <div class="mb-3 form-check">
          <input
            type="checkbox"
            class="form-check-input"
            id="rememberMe"
          />
          <label class="form-check-label text-light"
            >Remember me</label
          >
        </div>
        <button type="submit" class="btn btn-light" id="btnEnter">Enter</button>

        //siliencek
        <button type="submit" class="btn btn-light" id="go">go</button>
      </form>
    </div>
  </div>
</div>`;
};

export { welcomePage };
