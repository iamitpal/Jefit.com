document.querySelector("#Login").addEventListener("click", Login);
document.querySelector("#Signup").addEventListener("click", Signup);
document.querySelector("nav img").addEventListener("click", home);

function Login() {
  console.log("invoked");
  window.location.href = "Login.html";
}
function Signup() {
  console.log("invoked");
  window.location.href = "Signup.html";
}
function home() {
  console.log("invoked");
  window.location.href = "index.html";
}
