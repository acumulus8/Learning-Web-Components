import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
  
</div>
`;

class MyCustomElement extends HTMLElement {
  static observedAttributes = ["color", "size"];

  constructor() {
    super();
  }

  connectedCallback() {
    console.log("Custom element added to the page");
  }

  disconnectedCallback() {
    console.log("Custom element removed from the page!");
  }

  adoptedCallback() {
    console.log("Custom element moved to a new page!");
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(
      `The ${name} property is changing from ${oldValue} to ${newValue}`
    );
  }
}

customElements.define("my-custom-element", MyCustomElement);
