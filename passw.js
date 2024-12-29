const password = document.getElementById("password")
const check = document.getElementById("check")
function checkPassword() {
  const errorMessage = document.getElementById("error-message");
  const correctPassword = "17081945"; // Password yang benar

  if (password.value === correctPassword) {
    window.location.href = "aboutttt.html"; // Ganti dengan nama file halaman yang ingin diakses
  } else {
    errorMessage.textContent = "Password salah. Coba lagi.";
  }
}

password.addEventListener("keydown", function (event) {
    if(event.key == "Enter"){
        event.preventDefault();
    }
})

const hamburger = document.querySelector(".hamburger");
const ul = document.querySelector(".ul");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  ul.classList.toggle("active");
});
document.querySelectorAll(".link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    ul.classList.remove("active");
  })
);

