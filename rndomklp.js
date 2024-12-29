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

let resultsDiv = document.getElementById("results");
resultsDiv.style.display = "none"

function acakKelompok() {
  resultsDiv.style.display = "block"
    let names = document
      .getElementById("namesInput")
      .value.trim()
      .split("\n");
    let groupCount = parseInt(
      document.getElementById("groupCountInput").value
    );

    if (names.length < groupCount) {
      alert("Jumlah kelompok tidak boleh melebihi jumlah nama.");
      return;
    }

    // Acak nama-nama
    for (let i = names.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [names[i], names[j]] = [names[j], names[i]];
    }

    // Bagi nama-nama ke dalam kelompok
    let groups = Array.from({ length: groupCount }, () => []);
    names.forEach((name, index) => {
      groups[index % groupCount].push(name);
    });

    // Tampilkan hasil
    resultsDiv.innerHTML = "";
    groups.forEach((group, index) => {
      let groupDiv = document.createElement("div");
      groupDiv.classList.add("group");
      groupDiv.innerHTML = `<h3>Kelompok ${index + 1}</h3><p>${group.join(
        "<br>"
      )}</p>`;
      resultsDiv.appendChild(groupDiv);
    });
  }