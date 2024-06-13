// toggle class active
const navBar = document.querySelector(".navbar");

// humenu diklik
document.querySelector(".bar-extra").onclick = () => {
  navBar.classList.toggle("active");
};
