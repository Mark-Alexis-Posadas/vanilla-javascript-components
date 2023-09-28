const tab = document.querySelectorAll("li");
const tabContent = document.querySelectorAll(".tab-content");
tab.forEach((tabbed, idx) => {
  tabbed.addEventListener("click", () => {
    tab.forEach((tabRemove) => tabRemove.classList.remove("active"));
    tabContent.forEach((tabContentRemove) =>
      tabContentRemove.classList.remove("active")
    );

    tabbed.classList.add("active");
    tabContent[idx].classList.add("active");
  });
});
