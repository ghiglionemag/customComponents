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
      

      shadow.appendChild(style);
      shadow.appendChild(form);
    }
  }
  customElements.define("section-form", FormComponent);
}
