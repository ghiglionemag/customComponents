export function FormComponent() {
  class FormComponent extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      var shadow = this.attachShadow({ mode: "open" });

      var style = document.createElement("style");
      style.textContent = `
        .form-content{
          display: flex;
          flex-direction: column;
          height: 300px;
          min-width: 312px;
          max-width: 352px;
          margin: 0px auto;
          padding: 10px;
          justify-content: space-around; 
        }
        .form-input{
          width: 100%;
        }
        .form-input,
        .form-button,
        .volver-button{
          height: 55px;
        }
        .form-button{
          background-color: #9CBBE9;
        }
        .volver-button{
          background-color: white;
        }
        `;

      var form = document.createElement("form");
      form.innerHTML = `
        <fieldset>
          <legend>Nombre</legend>
          <input
            class="form-input"
            type="Nombre"
            name="Nombre"
            id="Nombre"
            placeholder="Ingresa tu numbre acá"
          />
        </fieldset>
        <button class="form-button" name="form-button">Button</button>
        <button class="volver-button" name="volver-button">Volver</button>
        `;
      form.classList.add("form-content");

      shadow.appendChild(style);
      shadow.appendChild(form);
    }
  }
  customElements.define("section-form", FormComponent);
}
