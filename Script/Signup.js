let submit = document.querySelector("form");
submit.addEventListener("submit", subfun);
function subfun(event) {
  console.log("Invoked");
  event.preventDefault();
  let input = document.querySelectorAll("input");
  let user = input[0].value;
  let mail = input[1].value;
  let pass = input[2].value;
  let cpass = input[3].value;
  let obj = { user, mail, pass, cpass };
  localStorage.setItem("Signup_details", JSON.stringify(obj));
  alert("Signup Successful");
  window.location.href = "Login.html";
}
