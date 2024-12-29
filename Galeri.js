const hamburger = document.querySelector(".hamburger");
const ul = document.querySelector(".ul");
const modal = document.getElementById("myModal");
const modalImg = document.getElementById("img01");
const captionText = document.getElementById("caption");
const images = document.querySelectorAll(".border img");

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

document.addEventListener("DOMContentLoaded", function () {

    images.forEach((image) => {
      image.addEventListener("click", function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.previousElementSibling.textContent;
      });
    });

    // Menutup modal ketika tombol "x" ditekan
    document.querySelector(".close").addEventListener("click", function () {
      modal.style.display = "none";
    });

    // Menutup modal ketika klik di luar gambar
    modal.addEventListener("click", function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  });
