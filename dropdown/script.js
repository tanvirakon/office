// const btn = document.querySelector(".btn");
// const liElements = document.querySelector(".elements");
// btn.addEventListener("click", () => {
//   liElements.classList.toggle("elementsToggleProperty");
// });

class Dropdown {
  constructor() {
    this.btn = document.querySelector(".btn");
    this.elements = document.querySelector(".elements");
    this.isOpen = false;
    this.btn.addEventListener("click", () => this.toggle());
  }
  toggle() {
    if (this.isOpen) this.open();
    else this.close();
  }
  open() {
    this.elements.style.display = "none";
    this.isOpen = false;
  }
  close() {
    this.elements.style.display = "block";
    this.isOpen = true;
  }
}

// const dropdown = new Dropdown();

document.addEventListener("DOMContentLoaded", () => {
  const dropdown = new Dropdown();
});
