class LoadingSpinner extends HTMLElement {
  // Specify observed attributes so that
  // attributeChangedCallback will work
  public static get observedAttributes() {
    return ["active"];
  }

  //#region styles
  private _styles = `
    .main {
		width: 240px;
		height: 240px;
		border-radius: 50%;
		background-image: linear-gradient(#ff7676, orange);
		position:relative;
    }
    .spin {
		background: linear-gradient(orange, yellow);
		width: 230px;
		height: 220px;
		position: absolute;
		top: 10px;
		left: 5px;
		border-radius: 50%;
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
		animation-duration: 500ms;
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
		border-radius: 50%;
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
	.content {
		position: absolute;
		left: 27%;
		top: 42%;
		font: arial;
		font-size: 23px;
		font-family: 'Google Sans',Roboto,RobotoDraft,Helvetica,Arial,sans-serif;
		background: linear-gradient(to right, orange, red);
		-webkit-background-clip: text;
  		-webkit-text-fill-color: transparent;
	}
  `;
  //#endregion

  private mainDiv: HTMLDivElement;
  private content: HTMLDivElement;

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    const style = document.createElement("style");
    style.textContent = this._styles;
    shadow.appendChild(style);
    shadow.appendChild(this.createSpinner());
  }

  private createSpinner() {
    this.mainDiv = document.createElement("div");
    this.mainDiv.classList.add("main");
    const spinerdiv = document.createElement("div");
    spinerdiv.classList.add("spin");
    const spinerdiv1 = document.createElement("div");
    spinerdiv1.classList.add("spin1");
    spinerdiv.appendChild(spinerdiv1);
    this.content = document.createElement("div");
    this.content.classList.add("content");
    this.content.textContent = "LOADING..";
    this.mainDiv.appendChild(spinerdiv);
    this.mainDiv.appendChild(this.content);
    return this.mainDiv;
  }
}

customElements.define("loading-spinner", LoadingSpinner);
