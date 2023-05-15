class Select_2 extends HTMLElement {
  constructor() {
    super();

    this.data = []
  }

  connectedCallback() {
    let Data = JSON.parse(this.attributes.data.value);
    Data.forEach(item => {
      this.data.push(item.country)
    });
    this.render();
  }

  render() {
    let selectbox = document.createElement('select')
    selectbox.setAttribute('class','select2')
    let allopt = ''
    for(let i=0;i<this.data.length;i++){
      let opt = `<option>${this.data[i]}</h1></option>`;
        allopt += opt;
    }
    console.log(allopt);
    selectbox.innerHTML = allopt
    this.appendChild(selectbox)
  }
}

customElements.define("select-2", Select_2);