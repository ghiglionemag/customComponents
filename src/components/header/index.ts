export function HeaderComponent() {
  class HeaderComponent extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      var shadow = this.attachShadow({ mode: "open" });

      var style = document.createElement("style");
      style.textContent = `
      .header-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-width: 375px;
        height: 60px;
        background-color: #ff8282;
      }
      .header-title {
        text-align: center;
        margin: 0px;
        color: black;
      }
      `;

      var div = document.createElement("div");
      div.innerHTML = `
          <h2 class="header-title">Header</2>
      `;
      div.classList.add("header-content");

      shadow.appendChild(style);
      shadow.appendChild(div);
    }
  }
  customElements.define("section-header", HeaderComponent);
}
