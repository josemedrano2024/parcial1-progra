class MyButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
        <button>
          <slot></slot>
        </button>
      `;
    this.shadowRoot.querySelector("button").addEventListener("click", () => {
      this.handleClick();
    });
  }

  handleClick() {
    console.log("¡Hiciste clic en el botón!");
    // Aquí puedes agregar la lógica que deseas ejecutar al hacer clic
  }
}

customElements.define("my-button", MyButton);
