!function(t){var n={};function i(c){if(n[c])return n[c].exports;var a=n[c]={i:c,l:!1,exports:{}};return t[c].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,n,c){i.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:c})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,n){if(1&n&&(t=i(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var c=Object.create(null);if(i.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var a in t)i.d(c,a,function(n){return t[n]}.bind(null,a));return c},i.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(n,"a",n),n},i.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},i.p="",i(i.s=0)}([function(module,exports){eval('class LoadingSpinner extends HTMLElement {\n    constructor() {\n        super();\n        //#region styles\n        this._styles = `\n    .main {\n\t\twidth: 240px;\n\t\theight: 240px;\n\t\tborder-radius: 50%;\n\t\tbackground-image: linear-gradient(#ff7676, orange);\n\t\tposition:relative;\n    }\n    .spin {\n\t\tbackground: linear-gradient(orange, yellow);\n\t\twidth: 230px;\n\t\theight: 220px;\n\t\tposition: absolute;\n\t\ttop: 10px;\n\t\tleft: 5px;\n\t\tborder-radius: 50%;\n\t\t-webkit-animation-name: spin;\n\t\t-webkit-animation-duration: 1000ms;\n\t\t-webkit-animation-iteration-count: infinite;\n\t\t-webkit-animation-timing-function: linear;\n\t\t-moz-animation-name: spin;\n\t\t-moz-animation-duration: 1000ms;\n\t\t-moz-animation-iteration-count: infinite;\n\t\t-moz-animation-timing-function: linear;\n\t\t-ms-animation-name: spin;\n\t\t-ms-animation-duration: 1000ms;\n\t\t-ms-animation-iteration-count: infinite;\n\t\t-ms-animation-timing-function: linear;\n\t\t\n\t\tanimation-name: spin;\n\t\tanimation-duration: 500ms;\n\t\tanimation-iteration-count: infinite;\n    \tanimation-timing-function: linear;\n    }\n    .spin1 {\n\t\tbackground: white;\n\t\twidth: 215px;\n\t\theight: 215px;\n\t\ttop: 2px;\n\t\tleft: 7px;\n\t\tposition: absolute;\n\t\tborder-radius: 50%;\n\t\tborder: 1px solid yellow;\n    }\n\t@-ms-keyframes spin {\n\t\tfrom { -ms-transform: rotate(0deg); }\n\t\tto { -ms-transform: rotate(360deg); }\n\t}\n\t@-moz-keyframes spin {\n\t\tfrom { -moz-transform: rotate(0deg); }\n\t\tto { -moz-transform: rotate(360deg); }\n\t}\n\t@-webkit-keyframes spin {\n\t\tfrom { -webkit-transform: rotate(0deg); }\n\t\tto { -webkit-transform: rotate(360deg); }\n\t}\n\t@keyframes spin {\n\t\tfrom {\n\t\t\ttransform:rotate(0deg);\n\t\t}\n\t\tto {\n\t\t\ttransform:rotate(360deg);\n\t\t}\n\t}\n\t.content {\n\t\tposition: absolute;\n\t\tleft: 27%;\n\t\ttop: 42%;\n\t\tfont: arial;\n\t\tfont-size: 23px;\n\t\tfont-family: \'Google Sans\',Roboto,RobotoDraft,Helvetica,Arial,sans-serif;\n\t\tbackground: linear-gradient(to right, orange, red);\n\t\t-webkit-background-clip: text;\n  \t\t-webkit-text-fill-color: transparent;\n\t}\n  `;\n        const shadow = this.attachShadow({ mode: "open" });\n        const style = document.createElement("style");\n        style.textContent = this._styles;\n        shadow.appendChild(style);\n        shadow.appendChild(this.createSpinner());\n    }\n    // Specify observed attributes so that\n    // attributeChangedCallback will work\n    static get observedAttributes() {\n        return ["active"];\n    }\n    createSpinner() {\n        this.mainDiv = document.createElement("div");\n        this.mainDiv.classList.add("main");\n        const spinerdiv = document.createElement("div");\n        spinerdiv.classList.add("spin");\n        const spinerdiv1 = document.createElement("div");\n        spinerdiv1.classList.add("spin1");\n        spinerdiv.appendChild(spinerdiv1);\n        this.content = document.createElement("div");\n        this.content.classList.add("content");\n        this.content.textContent = "LOADING..";\n        this.mainDiv.appendChild(spinerdiv);\n        this.mainDiv.appendChild(this.content);\n        return this.mainDiv;\n    }\n}\ncustomElements.define("loading-spinner", LoadingSpinner);\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmRleC50cz82N2JjIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDZCQUE2QjtBQUNyQyxNQUFNLCtCQUErQjtBQUNyQztBQUNBO0FBQ0EsUUFBUSw4QkFBOEI7QUFDdEMsTUFBTSxnQ0FBZ0M7QUFDdEM7QUFDQTtBQUNBLFFBQVEsaUNBQWlDO0FBQ3pDLE1BQU0sbUNBQW1DO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxlQUFlO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgTG9hZGluZ1NwaW5uZXIgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIC8vI3JlZ2lvbiBzdHlsZXNcbiAgICAgICAgdGhpcy5fc3R5bGVzID0gYFxuICAgIC5tYWluIHtcblx0XHR3aWR0aDogMjQwcHg7XG5cdFx0aGVpZ2h0OiAyNDBweDtcblx0XHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCNmZjc2NzYsIG9yYW5nZSk7XG5cdFx0cG9zaXRpb246cmVsYXRpdmU7XG4gICAgfVxuICAgIC5zcGluIHtcblx0XHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQob3JhbmdlLCB5ZWxsb3cpO1xuXHRcdHdpZHRoOiAyMzBweDtcblx0XHRoZWlnaHQ6IDIyMHB4O1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHR0b3A6IDEwcHg7XG5cdFx0bGVmdDogNXB4O1xuXHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0XHQtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBzcGluO1xuXHRcdC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxMDAwbXM7XG5cdFx0LXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcblx0XHQtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcblx0XHQtbW96LWFuaW1hdGlvbi1uYW1lOiBzcGluO1xuXHRcdC1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOiAxMDAwbXM7XG5cdFx0LW1vei1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcblx0XHQtbW96LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcblx0XHQtbXMtYW5pbWF0aW9uLW5hbWU6IHNwaW47XG5cdFx0LW1zLWFuaW1hdGlvbi1kdXJhdGlvbjogMTAwMG1zO1xuXHRcdC1tcy1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcblx0XHQtbXMtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuXHRcdFxuXHRcdGFuaW1hdGlvbi1uYW1lOiBzcGluO1xuXHRcdGFuaW1hdGlvbi1kdXJhdGlvbjogNTAwbXM7XG5cdFx0YW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gICAgXHRhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gICAgfVxuICAgIC5zcGluMSB7XG5cdFx0YmFja2dyb3VuZDogd2hpdGU7XG5cdFx0d2lkdGg6IDIxNXB4O1xuXHRcdGhlaWdodDogMjE1cHg7XG5cdFx0dG9wOiAycHg7XG5cdFx0bGVmdDogN3B4O1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdFx0Ym9yZGVyOiAxcHggc29saWQgeWVsbG93O1xuICAgIH1cblx0QC1tcy1rZXlmcmFtZXMgc3BpbiB7XG5cdFx0ZnJvbSB7IC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuXHRcdHRvIHsgLW1zLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cblx0fVxuXHRALW1vei1rZXlmcmFtZXMgc3BpbiB7XG5cdFx0ZnJvbSB7IC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cblx0XHR0byB7IC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxuXHR9XG5cdEAtd2Via2l0LWtleWZyYW1lcyBzcGluIHtcblx0XHRmcm9tIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuXHRcdHRvIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG5cdH1cblx0QGtleWZyYW1lcyBzcGluIHtcblx0XHRmcm9tIHtcblx0XHRcdHRyYW5zZm9ybTpyb3RhdGUoMGRlZyk7XG5cdFx0fVxuXHRcdHRvIHtcblx0XHRcdHRyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKTtcblx0XHR9XG5cdH1cblx0LmNvbnRlbnQge1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRsZWZ0OiAyNyU7XG5cdFx0dG9wOiA0MiU7XG5cdFx0Zm9udDogYXJpYWw7XG5cdFx0Zm9udC1zaXplOiAyM3B4O1xuXHRcdGZvbnQtZmFtaWx5OiAnR29vZ2xlIFNhbnMnLFJvYm90byxSb2JvdG9EcmFmdCxIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZjtcblx0XHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIG9yYW5nZSwgcmVkKTtcblx0XHQtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgXHRcdC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcblx0fVxuICBgO1xuICAgICAgICBjb25zdCBzaGFkb3cgPSB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6IFwib3BlblwiIH0pO1xuICAgICAgICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgICAgICAgc3R5bGUudGV4dENvbnRlbnQgPSB0aGlzLl9zdHlsZXM7XG4gICAgICAgIHNoYWRvdy5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgICAgIHNoYWRvdy5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZVNwaW5uZXIoKSk7XG4gICAgfVxuICAgIC8vIFNwZWNpZnkgb2JzZXJ2ZWQgYXR0cmlidXRlcyBzbyB0aGF0XG4gICAgLy8gYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrIHdpbGwgd29ya1xuICAgIHN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCkge1xuICAgICAgICByZXR1cm4gW1wiYWN0aXZlXCJdO1xuICAgIH1cbiAgICBjcmVhdGVTcGlubmVyKCkge1xuICAgICAgICB0aGlzLm1haW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLm1haW5EaXYuY2xhc3NMaXN0LmFkZChcIm1haW5cIik7XG4gICAgICAgIGNvbnN0IHNwaW5lcmRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHNwaW5lcmRpdi5jbGFzc0xpc3QuYWRkKFwic3BpblwiKTtcbiAgICAgICAgY29uc3Qgc3BpbmVyZGl2MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHNwaW5lcmRpdjEuY2xhc3NMaXN0LmFkZChcInNwaW4xXCIpO1xuICAgICAgICBzcGluZXJkaXYuYXBwZW5kQ2hpbGQoc3BpbmVyZGl2MSk7XG4gICAgICAgIHRoaXMuY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuY29udGVudC5jbGFzc0xpc3QuYWRkKFwiY29udGVudFwiKTtcbiAgICAgICAgdGhpcy5jb250ZW50LnRleHRDb250ZW50ID0gXCJMT0FESU5HLi5cIjtcbiAgICAgICAgdGhpcy5tYWluRGl2LmFwcGVuZENoaWxkKHNwaW5lcmRpdik7XG4gICAgICAgIHRoaXMubWFpbkRpdi5hcHBlbmRDaGlsZCh0aGlzLmNvbnRlbnQpO1xuICAgICAgICByZXR1cm4gdGhpcy5tYWluRGl2O1xuICAgIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImxvYWRpbmctc3Bpbm5lclwiLCBMb2FkaW5nU3Bpbm5lcik7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n')}]);