let submit = document.querySelector("form");
submit.addEventListener("submit", subfun);
let data = JSON.parse(localStorage.getItem("Signup_details"));
function subfun(event) {
  console.log(data);
  event.preventDefault();
  let mail = document.querySelector("#mail").value;
  let pass = document.querySelector("#pass").value;

  if (mail === data.mail && pass === data.pass) {
    alert("Hurry! Login Successful");
    window.location.href = "nav.html";
  } else {
    alert("Incorrect Email & Password");
    document.querySelector("#mail").value = "";
    document.querySelector("#pass").value = "";
  }
}
