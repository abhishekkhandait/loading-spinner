class LoadingSpinner extends HTMLElement {
  // Specify observed attributes so that
  // attributeChangedCallback will work
  public static get observedAttributes() {
    return ["active"];
  }

  private _styles = `
    .main {
		width: 235px;
		height: 235px;
		border-radius: 120px;
		/*border: 15px solid red;*/
		background-image: linear-gradient(#ff7676, orange);
		position:relative;
    }
    .spin {
		background: linear-gradient(orange, yellow);
		width: 230px;
		height: 220px;
		position: absolute;
		top: 7px;
		left: 3px;
		border-radius: 140px;
		-webkit-animation-name: spin;
		-webkit-animation-duration: 1000ms;
		-webkit-animation-iteration-count: infinite;
		-webkit-animation-timing-function: linear;
		-moz-animation-name: spin;
		-moz-animation-duration: 1000ms;
		-moz-animation-iteration-count: infinite;
		-moz-animation-timing-function: linear;
		-ms-animation-name: spin;
		-ms-animation-duration: 1000ms;
		-ms-animation-iteration-count: infinite;
		-ms-animation-timing-function: linear;
		
		animation-name: spin;
		animation-duration: 1000ms;
		animation-iteration-count: infinite;
    	animation-timing-function: linear;
    }
    .spin1 {
		background: white;
		width: 215px;
		height: 215px;
		top: 2px;
		left: 7px;
		position: absolute;
		border-radius: 110px;
		border: 1px solid yellow;
    }
	@-ms-keyframes spin {
		from { -ms-transform: rotate(0deg); }
		to { -ms-transform: rotate(360deg); }
	}
	@-moz-keyframes spin {
		from { -moz-transform: rotate(0deg); }
		to { -moz-transform: rotate(360deg); }
	}
	@-webkit-keyframes spin {
		from { -webkit-transform: rotate(0deg); }
		to { -webkit-transform: rotate(360deg); }
	}
	@keyframes spin {
		from {
			transform:rotate(0deg);
		}
		to {
			transform:rotate(360deg);
		}
	}
  `;

  private mainDiv: HTMLDivElement;

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    this.mainDiv = document.createElement("div");
    this.mainDiv.classList.add("main");
    const style = document.createElement("style");
    style.textContent = this._styles;
    const div = document.createElement("div");
    div.classList.add("spin");
    const div1 = document.createElement("div");
    div1.classList.add("spin1");
    div.appendChild(div1);
    shadow.appendChild(style);
    this.mainDiv.appendChild(div);
    shadow.appendChild(this.mainDiv);
  }
}

customElements.define("loading-spinner", LoadingSpinner);
