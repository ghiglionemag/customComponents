export function FooterComponent() {
    class FooterComponent extends HTMLElement {
      constructor() {
        super();
        this.render();
      }
      render() {
        var shadow = this.attachShadow({ mode: "open" });
  
        var style = document.createElement("style");
        style.textContent = `
        .footer-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-width: 375px;
          height: 233px;
          background-color: #ff8282;
        }
        .footer-title {
          text-align: center;
          margin: 0px;
          color: black;
        }
        `;
  
        var div = document.createElement("div");
        div.innerHTML = `
            <h2 class="footer-title">Footer</2>
        `;
        div.classList.add("footer-content");
  
        shadow.appendChild(style);
        shadow.appendChild(div);
      }
    }
    customElements.define("section-footer", FooterComponent);
  }
  