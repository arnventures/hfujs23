class MyElement extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<b>Title</b>`;
    //weiss nicht ob das gemeint ist?

    // Set up initial HTML for this component
  }

  static get observedAttributes() {
    return ["title"];
    //s entfernt
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.innerHTML = `<b>${newValue}</b>`;
  }
}

customElements.define("my-element", MyElement);
