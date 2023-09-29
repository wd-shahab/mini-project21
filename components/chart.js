let template = document.createElement("template");

template.innerHTML = `
<link rel="stylesheet" href="./components/chart.css">
  <div class="container">
    <div class="masseg"></div>
    <div class="chart"></div>
    <p class="day"></p>
  </div>
`;

class chart extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.shadowRoot.querySelector('.day').innerHTML=
      this.getAttribute("day")

    this.shadowRoot.querySelector('.masseg').innerHTML=
      this.getAttribute('money')

    this.shadowRoot.querySelector(".chart").style.height = 
      `${this.getAttribute("money")}%`;

    this.shadowRoot
      .querySelector(".container")
      .classList.add(this.getAttribute("color"));
  }

  static observedAttributes() {
    return ['day', 'money']
  }
}

export default chart
