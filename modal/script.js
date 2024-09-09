// Define the dialog main component
class Dialog extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
            <slot></slot>
        `;
  }
}

class DialogItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `<slot></slot>`;
  }
}

class DialogTrigger extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `<slot></slot>`;
    this.btn = document.querySelector("button");
    this.dialogContent = this.nextElementSibling;
    this.dialogContent.setAttribute("hidden", true);
    let isOpen = false;
    this.btn.addEventListener("click", () => {
      if (isOpen) {
        this.closeModal();
        isOpen = false;
      } else {
        this.openModal();
        isOpen = true;
      }
    });
  }
  openModal() {
    this.dialogContent.removeAttribute("hidden");
  }
  closeModal() {
    this.dialogContent.setAttribute("hidden", true);
  }
}

class DialogContent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
            <slot>
            </slot>
          `;
  }
  connectedCallback() {
    this.addEventListener("submit", (e) => {
      e.preventDefault();
    });
  }
}

class DialogHeader extends HTMLElement {
    // constructor() {
    //   super();
    //   this.attachShadow({ mode: "open" });
    //   this.shadowRoot.innerHTML = `
    //             <slot>
    //             </slot>
    //           `;
    // }
}

class DialogFooter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `<slot> </slot>`;
    this.btn = this.querySelector("button");
    this.btn.addEventListener("click", (e) => {
        console.log(e.target);
        
    });
  }
}

customElements.define("dialog-component", Dialog);
customElements.define("dialog-item", DialogItem);
customElements.define("dialog-trigger", DialogTrigger);
customElements.define("dialog-content", DialogContent);
customElements.define("dialog-header", DialogHeader);
customElements.define("dialog-footer", DialogFooter);
