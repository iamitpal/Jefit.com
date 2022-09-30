document.querySelector("#Login").addEventListener("click", Login);
document.querySelector("#Signup").addEventListener("click", Signup);

function Login() {
  console.log("invoked");
  window.location.href = "Login.html";
}
function Signup() {
  console.log("invoked");
  window.location.href = "Signup.html";
}
