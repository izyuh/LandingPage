const themeButton = document.querySelector("#theme-switch");
const body = document.body;

if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-theme");
}

themeButton.addEventListener("click", () => {
  body.classList.toggle("dark-theme");

  const theme = document.body.classList.contains("dark-theme")
    ? "dark"
    : "light";
  localStorage.setItem("theme", theme);
});
