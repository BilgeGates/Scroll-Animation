const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", () => checkBoxes());

const checkBoxes = () => {
  const triggerBottom = window.innerHeight * 0.7;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
};
