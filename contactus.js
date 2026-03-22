const btn = document.getElementById("dropdownBtn");
const menu = document.getElementById("dropdownMenu");

btn.addEventListener("click", () => {
  menu.style.display = menu.style.display === "block" ? "none" : "block";
});

