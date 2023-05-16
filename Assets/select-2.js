class Select_2 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    let data_str = this.getAttribute("data-route");
    let parent = this.getAttribute("parent")
    let info = [];

    async function getData() {
      info = await fetch(data_str)
        .then((json) => json.json())
        .then();
      let selectbox = document.createElement("select");
      selectbox.setAttribute("class", "select2");
      let allopt = "";
      info.forEach((element) => {
        let opt = `<option value='${element.id}'>${element.country}</option>`;
        allopt += opt;
      });
      selectbox.innerHTML = allopt;
      document.querySelector(parent).appendChild(selectbox)
    }
    getData();
  }
}

customElements.define("select-2", Select_2);
