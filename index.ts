class LoadingSpinner extends HTMLElement {
  // Specify observed attributes so that
  // attributeChangedCallback will work
  public static get observedAttributes() {
    return ["active"];
  }

  //#region styles
  private _styles = () => `
    .main {
		width: 15em;
		height: 15em;
		border-radius: 50%;
		background-image: linear-gradient(#ff7676, orange);
		position:relative;
		transform: scale(${this.scale});
    }
    .spin {
		background: linear-gradient(orange, yellow);
		width: 14.375em;
		height: 13.75em;
		position: absolute;
		top: 0.625em;
		left: 0.313em;
		border-radius: 50%;
	}
	.start-spin {
		-webkit-animation-name: spin;
		-webkit-animation-duration: 500ms;
		-webkit-animation-iteration-count: infinite;
		-webkit-animation-timing-function: linear;
		-moz-animation-name: spin;
		-moz-animation-duration: 500ms;
		-moz-animation-iteration-count: infinite;
		-moz-animation-timing-function: linear;
		-ms-animation-name: spin;
		-ms-animation-duration: 500ms;
		-ms-animation-iteration-count: infinite;
		-ms-animation-timing-function: linear;
		
		animation-name: spin;
		animation-duration: 500ms;
		animation-iteration-count: infinite;
    	animation-timing-function: linear;
	}
    .spin1 {
		background: white;
		width: 13.438em;
		height: 13.438em;
		top: 0.125em;
		left: 0.438em;
		position: absolute;
		border-radius: 50%;
		border: 0.063em solid yellow;
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
		font-size: 1.4em;
		font-family: 'Google Sans',Roboto,RobotoDraft,Helvetica,Arial,sans-serif;
		background: linear-gradient(to right, orange, red);
		-webkit-background-clip: text;
  		-webkit-text-fill-color: transparent;
	}
  `;
  //#endregion

  private mainDiv: HTMLDivElement;
  private content: HTMLDivElement;
  private styles;
  private scale: number;

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    this.styles = document.createElement("style");
    shadow.appendChild(this.styles);
    shadow.appendChild(this.createSpinner());
  }

  public connectedCallback() {
    const size = this.getAttribute("size");
    if (["xs", "sm", "mid", "lg", "xl", "xxl"].includes(size)) {
      switch (size) {
        case "xs":
          this.scale = 0.25;
          break;
        case "sm":
          this.scale = 0.5;
          break;
        case "mid":
          this.scale = 0.75;
          break;
        case "lg":
          this.scale = 1.0;
          break;
        case "xl":
          this.scale = 1.5;
          break;
        case "xxl":
          this.scale = 2;
          break;
      }
    } else if (size !== null && !isNaN(Number(size))) {
      this.scale = Number(size);
    } else {
      this.scale = 1;
    }
    this.styles.textContent = this._styles();
  }

  private createSpinner() {
    this.mainDiv = document.createElement("div");
    this.mainDiv.classList.add("main");
    const spinerdiv = document.createElement("div");
    spinerdiv.classList.add("spin", "start-spin");
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
