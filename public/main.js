console.log('main.js loaded successfully!')

const tabs = document.querySelectorAll(".sample-work .Work span");
const activeTab = document.querySelector(".sample-work .Work .CYOA");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((tab) => tab.classList.remove("active"));
    tab.classList.add("active");
  });
});

activeTab.classList.add("active");

/* maybe change like half of this stuff when you find out what's wrong */