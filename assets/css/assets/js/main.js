(function () {
  const burger = document.querySelector("[data-burger]");
  const menu = document.querySelector("[data-mobilemenu]");

  if (burger && menu) {
    burger.addEventListener("click", () => {
      menu.classList.toggle("open");
      burger.setAttribute("aria-expanded", menu.classList.contains("open") ? "true" : "false");
    });
  }

  const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll(".navlinks a, .mobilemenu a").forEach((a) => {
    const href = (a.getAttribute("href") || "").toLowerCase();
    if (href === path) a.classList.add("active");
  });

  const y = document.querySelector("[data-year]");
  if (y) y.textContent = new Date().getFullYear();
})();
