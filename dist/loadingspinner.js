!function(t){var n={};function i(c){if(n[c])return n[c].exports;var g=n[c]={i:c,l:!1,exports:{}};return t[c].call(g.exports,g,g.exports,i),g.l=!0,g.exports}i.m=t,i.c=n,i.d=function(t,n,c){i.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:c})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,n){if(1&n&&(t=i(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var c=Object.create(null);if(i.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var g in t)i.d(c,g,function(n){return t[n]}.bind(null,g));return c},i.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(n,"a",n),n},i.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},i.p="",i(i.s=0)}([function(module,exports){eval('class LoadingSpinner extends HTMLElement {\n    constructor() {\n        super();\n        //#region styles\n        this._styles = () => `\n    .main {\n\t\twidth: 15em;\n\t\theight: 15em;\n\t\tborder-radius: 50%;\n\t\tbackground-image: linear-gradient(#ff7676, orange);\n\t\tposition:relative;\n\t\ttransform: scale(${this.scale});\n    }\n    .spin {\n\t\tbackground: linear-gradient(orange, yellow);\n\t\twidth: 14.375em;\n\t\theight: 13.75em;\n\t\tposition: absolute;\n\t\ttop: 0.625em;\n\t\tleft: 0.313em;\n\t\tborder-radius: 50%;\n\t}\n\t.start-spin {\n\t\t-webkit-animation-name: spin;\n\t\t-webkit-animation-duration: 500ms;\n\t\t-webkit-animation-iteration-count: infinite;\n\t\t-webkit-animation-timing-function: linear;\n\t\t-moz-animation-name: spin;\n\t\t-moz-animation-duration: 500ms;\n\t\t-moz-animation-iteration-count: infinite;\n\t\t-moz-animation-timing-function: linear;\n\t\t-ms-animation-name: spin;\n\t\t-ms-animation-duration: 500ms;\n\t\t-ms-animation-iteration-count: infinite;\n\t\t-ms-animation-timing-function: linear;\n\t\t\n\t\tanimation-name: spin;\n\t\tanimation-duration: 500ms;\n\t\tanimation-iteration-count: infinite;\n    \tanimation-timing-function: linear;\n\t}\n    .spin1 {\n\t\tbackground: white;\n\t\twidth: 13.438em;\n\t\theight: 13.438em;\n\t\ttop: 0.125em;\n\t\tleft: 0.438em;\n\t\tposition: absolute;\n\t\tborder-radius: 50%;\n\t\tborder: 0.063em solid yellow;\n    }\n\t@-ms-keyframes spin {\n\t\tfrom { -ms-transform: rotate(0deg); }\n\t\tto { -ms-transform: rotate(360deg); }\n\t}\n\t@-moz-keyframes spin {\n\t\tfrom { -moz-transform: rotate(0deg); }\n\t\tto { -moz-transform: rotate(360deg); }\n\t}\n\t@-webkit-keyframes spin {\n\t\tfrom { -webkit-transform: rotate(0deg); }\n\t\tto { -webkit-transform: rotate(360deg); }\n\t}\n\t@keyframes spin {\n\t\tfrom {\n\t\t\ttransform:rotate(0deg);\n\t\t}\n\t\tto {\n\t\t\ttransform:rotate(360deg);\n\t\t}\n\t}\n\t.content {\n\t\tposition: absolute;\n\t\tleft: 27%;\n\t\ttop: 42%;\n\t\tfont: arial;\n\t\tfont-size: 1.4em;\n\t\tfont-family: \'Google Sans\',Roboto,RobotoDraft,Helvetica,Arial,sans-serif;\n\t\tbackground: linear-gradient(to right, orange, red);\n\t\t-webkit-background-clip: text;\n  \t\t-webkit-text-fill-color: transparent;\n\t}\n  `;\n        const shadow = this.attachShadow({ mode: "open" });\n        this.styles = document.createElement("style");\n        shadow.appendChild(this.styles);\n        shadow.appendChild(this.createSpinner());\n    }\n    // Specify observed attributes so that\n    // attributeChangedCallback will work\n    static get observedAttributes() {\n        return ["active"];\n    }\n    connectedCallback() {\n        const size = this.getAttribute("size");\n        if (["xs", "sm", "mid", "lg", "xl", "xxl"].includes(size)) {\n            switch (size) {\n                case "xs":\n                    this.scale = 0.25;\n                    break;\n                case "sm":\n                    this.scale = 0.5;\n                    break;\n                case "mid":\n                    this.scale = 0.75;\n                    break;\n                case "lg":\n                    this.scale = 1.0;\n                    break;\n                case "xl":\n                    this.scale = 1.5;\n                    break;\n                case "xxl":\n                    this.scale = 2;\n                    break;\n            }\n        }\n        else if (size !== null && !isNaN(Number(size))) {\n            this.scale = Number(size);\n        }\n        else {\n            this.scale = 1;\n        }\n        this.styles.textContent = this._styles();\n    }\n    createSpinner() {\n        this.mainDiv = document.createElement("div");\n        this.mainDiv.classList.add("main");\n        const spinerdiv = document.createElement("div");\n        spinerdiv.classList.add("spin", "start-spin");\n        const spinerdiv1 = document.createElement("div");\n        spinerdiv1.classList.add("spin1");\n        spinerdiv.appendChild(spinerdiv1);\n        this.content = document.createElement("div");\n        this.content.classList.add("content");\n        this.content.textContent = "LOADING..";\n        this.mainDiv.appendChild(spinerdiv);\n        this.mainDiv.appendChild(this.content);\n        return this.mainDiv;\n    }\n}\ncustomElements.define("loading-spinner", LoadingSpinner);\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmRleC50cz82N2JjIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsV0FBVztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw2QkFBNkI7QUFDckMsTUFBTSwrQkFBK0I7QUFDckM7QUFDQTtBQUNBLFFBQVEsOEJBQThCO0FBQ3RDLE1BQU0sZ0NBQWdDO0FBQ3RDO0FBQ0E7QUFDQSxRQUFRLGlDQUFpQztBQUN6QyxNQUFNLG1DQUFtQztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsZUFBZTtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgTG9hZGluZ1NwaW5uZXIgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIC8vI3JlZ2lvbiBzdHlsZXNcbiAgICAgICAgdGhpcy5fc3R5bGVzID0gKCkgPT4gYFxuICAgIC5tYWluIHtcblx0XHR3aWR0aDogMTVlbTtcblx0XHRoZWlnaHQ6IDE1ZW07XG5cdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjZmY3Njc2LCBvcmFuZ2UpO1xuXHRcdHBvc2l0aW9uOnJlbGF0aXZlO1xuXHRcdHRyYW5zZm9ybTogc2NhbGUoJHt0aGlzLnNjYWxlfSk7XG4gICAgfVxuICAgIC5zcGluIHtcblx0XHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQob3JhbmdlLCB5ZWxsb3cpO1xuXHRcdHdpZHRoOiAxNC4zNzVlbTtcblx0XHRoZWlnaHQ6IDEzLjc1ZW07XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdHRvcDogMC42MjVlbTtcblx0XHRsZWZ0OiAwLjMxM2VtO1xuXHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0fVxuXHQuc3RhcnQtc3BpbiB7XG5cdFx0LXdlYmtpdC1hbmltYXRpb24tbmFtZTogc3Bpbjtcblx0XHQtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogNTAwbXM7XG5cdFx0LXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcblx0XHQtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcblx0XHQtbW96LWFuaW1hdGlvbi1uYW1lOiBzcGluO1xuXHRcdC1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOiA1MDBtcztcblx0XHQtbW96LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuXHRcdC1tb3otYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuXHRcdC1tcy1hbmltYXRpb24tbmFtZTogc3Bpbjtcblx0XHQtbXMtYW5pbWF0aW9uLWR1cmF0aW9uOiA1MDBtcztcblx0XHQtbXMtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG5cdFx0LW1zLWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcblx0XHRcblx0XHRhbmltYXRpb24tbmFtZTogc3Bpbjtcblx0XHRhbmltYXRpb24tZHVyYXRpb246IDUwMG1zO1xuXHRcdGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICAgIFx0YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuXHR9XG4gICAgLnNwaW4xIHtcblx0XHRiYWNrZ3JvdW5kOiB3aGl0ZTtcblx0XHR3aWR0aDogMTMuNDM4ZW07XG5cdFx0aGVpZ2h0OiAxMy40MzhlbTtcblx0XHR0b3A6IDAuMTI1ZW07XG5cdFx0bGVmdDogMC40MzhlbTtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRcdGJvcmRlcjogMC4wNjNlbSBzb2xpZCB5ZWxsb3c7XG4gICAgfVxuXHRALW1zLWtleWZyYW1lcyBzcGluIHtcblx0XHRmcm9tIHsgLW1zLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XG5cdFx0dG8geyAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxuXHR9XG5cdEAtbW96LWtleWZyYW1lcyBzcGluIHtcblx0XHRmcm9tIHsgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuXHRcdHRvIHsgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG5cdH1cblx0QC13ZWJraXQta2V5ZnJhbWVzIHNwaW4ge1xuXHRcdGZyb20geyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XG5cdFx0dG8geyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cblx0fVxuXHRAa2V5ZnJhbWVzIHNwaW4ge1xuXHRcdGZyb20ge1xuXHRcdFx0dHJhbnNmb3JtOnJvdGF0ZSgwZGVnKTtcblx0XHR9XG5cdFx0dG8ge1xuXHRcdFx0dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpO1xuXHRcdH1cblx0fVxuXHQuY29udGVudCB7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdGxlZnQ6IDI3JTtcblx0XHR0b3A6IDQyJTtcblx0XHRmb250OiBhcmlhbDtcblx0XHRmb250LXNpemU6IDEuNGVtO1xuXHRcdGZvbnQtZmFtaWx5OiAnR29vZ2xlIFNhbnMnLFJvYm90byxSb2JvdG9EcmFmdCxIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZjtcblx0XHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIG9yYW5nZSwgcmVkKTtcblx0XHQtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgXHRcdC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcblx0fVxuICBgO1xuICAgICAgICBjb25zdCBzaGFkb3cgPSB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6IFwib3BlblwiIH0pO1xuICAgICAgICB0aGlzLnN0eWxlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgICAgICAgc2hhZG93LmFwcGVuZENoaWxkKHRoaXMuc3R5bGVzKTtcbiAgICAgICAgc2hhZG93LmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlU3Bpbm5lcigpKTtcbiAgICB9XG4gICAgLy8gU3BlY2lmeSBvYnNlcnZlZCBhdHRyaWJ1dGVzIHNvIHRoYXRcbiAgICAvLyBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sgd2lsbCB3b3JrXG4gICAgc3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKSB7XG4gICAgICAgIHJldHVybiBbXCJhY3RpdmVcIl07XG4gICAgfVxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICBjb25zdCBzaXplID0gdGhpcy5nZXRBdHRyaWJ1dGUoXCJzaXplXCIpO1xuICAgICAgICBpZiAoW1wieHNcIiwgXCJzbVwiLCBcIm1pZFwiLCBcImxnXCIsIFwieGxcIiwgXCJ4eGxcIl0uaW5jbHVkZXMoc2l6ZSkpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoc2l6ZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJ4c1wiOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjYWxlID0gMC4yNTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInNtXCI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NhbGUgPSAwLjU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJtaWRcIjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2FsZSA9IDAuNzU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJsZ1wiOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjYWxlID0gMS4wO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwieGxcIjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2FsZSA9IDEuNTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInh4bFwiOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjYWxlID0gMjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc2l6ZSAhPT0gbnVsbCAmJiAhaXNOYU4oTnVtYmVyKHNpemUpKSkge1xuICAgICAgICAgICAgdGhpcy5zY2FsZSA9IE51bWJlcihzaXplKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2NhbGUgPSAxO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3R5bGVzLnRleHRDb250ZW50ID0gdGhpcy5fc3R5bGVzKCk7XG4gICAgfVxuICAgIGNyZWF0ZVNwaW5uZXIoKSB7XG4gICAgICAgIHRoaXMubWFpbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMubWFpbkRpdi5jbGFzc0xpc3QuYWRkKFwibWFpblwiKTtcbiAgICAgICAgY29uc3Qgc3BpbmVyZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgc3BpbmVyZGl2LmNsYXNzTGlzdC5hZGQoXCJzcGluXCIsIFwic3RhcnQtc3BpblwiKTtcbiAgICAgICAgY29uc3Qgc3BpbmVyZGl2MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHNwaW5lcmRpdjEuY2xhc3NMaXN0LmFkZChcInNwaW4xXCIpO1xuICAgICAgICBzcGluZXJkaXYuYXBwZW5kQ2hpbGQoc3BpbmVyZGl2MSk7XG4gICAgICAgIHRoaXMuY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuY29udGVudC5jbGFzc0xpc3QuYWRkKFwiY29udGVudFwiKTtcbiAgICAgICAgdGhpcy5jb250ZW50LnRleHRDb250ZW50ID0gXCJMT0FESU5HLi5cIjtcbiAgICAgICAgdGhpcy5tYWluRGl2LmFwcGVuZENoaWxkKHNwaW5lcmRpdik7XG4gICAgICAgIHRoaXMubWFpbkRpdi5hcHBlbmRDaGlsZCh0aGlzLmNvbnRlbnQpO1xuICAgICAgICByZXR1cm4gdGhpcy5tYWluRGl2O1xuICAgIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImxvYWRpbmctc3Bpbm5lclwiLCBMb2FkaW5nU3Bpbm5lcik7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n')}]);