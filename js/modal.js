const modal = document.getElementById("myModal");
const btn = document.getElementById("openModal");
const closeSpan = document.querySelector(".close-btn");

btn.onclick = () => modal.classList.add("show");

closeSpan.onclick = () => modal.classList.remove("show");

window.onclick = (event) => {
  if (event.target === modal) {
    modal.classList.remove("show");
  }
};
