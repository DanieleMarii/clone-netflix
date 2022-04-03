const modalOverlay = document.querySelector(".modal-overlay");
const modal = document.querySelector(".modal");
const botao = [...document.querySelectorAll("button.botao1")];

botao.forEach(btn => {
  btn.addEventListener("click", function(event){
      event.preventDefault();
    modal.querySelector(
      "iframe"
    ).src = `https://www.youtube.com/embed/2gTC4uWP3_Y`;
    modalOverlay.classList.add("active");
    modal.classList.add("active");
    document.querySelector("body").style.overflow = "hidden";
  });
});

document.querySelector(".close-modal").addEventListener("click", () => {
  modalOverlay.classList.remove("active");
  modal.classList.remove("active");
  modal.querySelector("iframe").src = ``;
  document.querySelector("body").style.overflow = "initial";
});
