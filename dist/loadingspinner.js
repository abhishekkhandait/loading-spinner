!function(t){var n={};function i(a){if(n[a])return n[a].exports;var e=n[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=n,i.d=function(t,n,a){i.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:a})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,n){if(1&n&&(t=i(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var e in t)i.d(a,e,function(n){return t[n]}.bind(null,e));return a},i.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(n,"a",n),n},i.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},i.p="",i(i.s=0)}([function(module,exports){eval('class LoadingSpinner extends HTMLElement {\n    constructor() {\n        super();\n        this._styles = `\n    .main {\n\t\twidth: 240px;\n\t\theight: 240px;\n\t\tborder-radius: 120px;\n\t\tbackground-image: linear-gradient(#ff7676, orange);\n\t\tposition:relative;\n    }\n    .spin {\n\t\tbackground: linear-gradient(orange, yellow);\n\t\twidth: 230px;\n\t\theight: 220px;\n\t\tposition: absolute;\n\t\ttop: 10px;\n\t\tleft: 5px;\n\t\tborder-radius: 140px;\n\t\t-webkit-animation-name: spin;\n\t\t-webkit-animation-duration: 1000ms;\n\t\t-webkit-animation-iteration-count: infinite;\n\t\t-webkit-animation-timing-function: linear;\n\t\t-moz-animation-name: spin;\n\t\t-moz-animation-duration: 1000ms;\n\t\t-moz-animation-iteration-count: infinite;\n\t\t-moz-animation-timing-function: linear;\n\t\t-ms-animation-name: spin;\n\t\t-ms-animation-duration: 1000ms;\n\t\t-ms-animation-iteration-count: infinite;\n\t\t-ms-animation-timing-function: linear;\n\t\t\n\t\tanimation-name: spin;\n\t\tanimation-duration: 500ms;\n\t\tanimation-iteration-count: infinite;\n    \tanimation-timing-function: linear;\n    }\n    .spin1 {\n\t\tbackground: white;\n\t\twidth: 215px;\n\t\theight: 215px;\n\t\ttop: 2px;\n\t\tleft: 7px;\n\t\tposition: absolute;\n\t\tborder-radius: 110px;\n\t\tborder: 1px solid yellow;\n    }\n\t@-ms-keyframes spin {\n\t\tfrom { -ms-transform: rotate(0deg); }\n\t\tto { -ms-transform: rotate(360deg); }\n\t}\n\t@-moz-keyframes spin {\n\t\tfrom { -moz-transform: rotate(0deg); }\n\t\tto { -moz-transform: rotate(360deg); }\n\t}\n\t@-webkit-keyframes spin {\n\t\tfrom { -webkit-transform: rotate(0deg); }\n\t\tto { -webkit-transform: rotate(360deg); }\n\t}\n\t@keyframes spin {\n\t\tfrom {\n\t\t\ttransform:rotate(0deg);\n\t\t}\n\t\tto {\n\t\t\ttransform:rotate(360deg);\n\t\t}\n\t}\n\t.content {\n\t\tposition: absolute;\n\t\tleft: 27%;\n\t\ttop: 42%;\n\t\tfont: arial;\n\t\tfont-size: 23px;\n\t\tfont-family: monospace;\n\t\tbackground: linear-gradient(to right, orange, red);\n\t\t-webkit-background-clip: text;\n  \t\t-webkit-text-fill-color: transparent;\n\t}\n  `;\n        const shadow = this.attachShadow({ mode: "open" });\n        this.mainDiv = document.createElement("div");\n        this.mainDiv.classList.add("main");\n        const style = document.createElement("style");\n        style.textContent = this._styles;\n        const div = document.createElement("div");\n        div.classList.add("spin");\n        const div1 = document.createElement("div");\n        div1.classList.add("spin1");\n        div.appendChild(div1);\n        const content = document.createElement("div");\n        content.classList.add("content");\n        content.textContent = "LOADING..";\n        shadow.appendChild(style);\n        this.mainDiv.appendChild(div);\n        this.mainDiv.appendChild(content);\n        shadow.appendChild(this.mainDiv);\n    }\n    // Specify observed attributes so that\n    // attributeChangedCallback will work\n    static get observedAttributes() {\n        return ["active"];\n    }\n}\ncustomElements.define("loading-spinner", LoadingSpinner);\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmRleC50cz82N2JjIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw2QkFBNkI7QUFDckMsTUFBTSwrQkFBK0I7QUFDckM7QUFDQTtBQUNBLFFBQVEsOEJBQThCO0FBQ3RDLE1BQU0sZ0NBQWdDO0FBQ3RDO0FBQ0E7QUFDQSxRQUFRLGlDQUFpQztBQUN6QyxNQUFNLG1DQUFtQztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsZUFBZTtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIExvYWRpbmdTcGlubmVyIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLl9zdHlsZXMgPSBgXG4gICAgLm1haW4ge1xuXHRcdHdpZHRoOiAyNDBweDtcblx0XHRoZWlnaHQ6IDI0MHB4O1xuXHRcdGJvcmRlci1yYWRpdXM6IDEyMHB4O1xuXHRcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjZmY3Njc2LCBvcmFuZ2UpO1xuXHRcdHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgIH1cbiAgICAuc3BpbiB7XG5cdFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KG9yYW5nZSwgeWVsbG93KTtcblx0XHR3aWR0aDogMjMwcHg7XG5cdFx0aGVpZ2h0OiAyMjBweDtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0dG9wOiAxMHB4O1xuXHRcdGxlZnQ6IDVweDtcblx0XHRib3JkZXItcmFkaXVzOiAxNDBweDtcblx0XHQtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBzcGluO1xuXHRcdC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxMDAwbXM7XG5cdFx0LXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcblx0XHQtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcblx0XHQtbW96LWFuaW1hdGlvbi1uYW1lOiBzcGluO1xuXHRcdC1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOiAxMDAwbXM7XG5cdFx0LW1vei1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcblx0XHQtbW96LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcblx0XHQtbXMtYW5pbWF0aW9uLW5hbWU6IHNwaW47XG5cdFx0LW1zLWFuaW1hdGlvbi1kdXJhdGlvbjogMTAwMG1zO1xuXHRcdC1tcy1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcblx0XHQtbXMtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuXHRcdFxuXHRcdGFuaW1hdGlvbi1uYW1lOiBzcGluO1xuXHRcdGFuaW1hdGlvbi1kdXJhdGlvbjogNTAwbXM7XG5cdFx0YW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gICAgXHRhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gICAgfVxuICAgIC5zcGluMSB7XG5cdFx0YmFja2dyb3VuZDogd2hpdGU7XG5cdFx0d2lkdGg6IDIxNXB4O1xuXHRcdGhlaWdodDogMjE1cHg7XG5cdFx0dG9wOiAycHg7XG5cdFx0bGVmdDogN3B4O1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRib3JkZXItcmFkaXVzOiAxMTBweDtcblx0XHRib3JkZXI6IDFweCBzb2xpZCB5ZWxsb3c7XG4gICAgfVxuXHRALW1zLWtleWZyYW1lcyBzcGluIHtcblx0XHRmcm9tIHsgLW1zLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XG5cdFx0dG8geyAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxuXHR9XG5cdEAtbW96LWtleWZyYW1lcyBzcGluIHtcblx0XHRmcm9tIHsgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuXHRcdHRvIHsgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG5cdH1cblx0QC13ZWJraXQta2V5ZnJhbWVzIHNwaW4ge1xuXHRcdGZyb20geyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XG5cdFx0dG8geyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cblx0fVxuXHRAa2V5ZnJhbWVzIHNwaW4ge1xuXHRcdGZyb20ge1xuXHRcdFx0dHJhbnNmb3JtOnJvdGF0ZSgwZGVnKTtcblx0XHR9XG5cdFx0dG8ge1xuXHRcdFx0dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpO1xuXHRcdH1cblx0fVxuXHQuY29udGVudCB7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdGxlZnQ6IDI3JTtcblx0XHR0b3A6IDQyJTtcblx0XHRmb250OiBhcmlhbDtcblx0XHRmb250LXNpemU6IDIzcHg7XG5cdFx0Zm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcblx0XHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIG9yYW5nZSwgcmVkKTtcblx0XHQtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgXHRcdC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcblx0fVxuICBgO1xuICAgICAgICBjb25zdCBzaGFkb3cgPSB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6IFwib3BlblwiIH0pO1xuICAgICAgICB0aGlzLm1haW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLm1haW5EaXYuY2xhc3NMaXN0LmFkZChcIm1haW5cIik7XG4gICAgICAgIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICAgICAgICBzdHlsZS50ZXh0Q29udGVudCA9IHRoaXMuX3N0eWxlcztcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJzcGluXCIpO1xuICAgICAgICBjb25zdCBkaXYxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZGl2MS5jbGFzc0xpc3QuYWRkKFwic3BpbjFcIik7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChkaXYxKTtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImNvbnRlbnRcIik7XG4gICAgICAgIGNvbnRlbnQudGV4dENvbnRlbnQgPSBcIkxPQURJTkcuLlwiO1xuICAgICAgICBzaGFkb3cuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICAgICAgICB0aGlzLm1haW5EaXYuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgdGhpcy5tYWluRGl2LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgICAgICBzaGFkb3cuYXBwZW5kQ2hpbGQodGhpcy5tYWluRGl2KTtcbiAgICB9XG4gICAgLy8gU3BlY2lmeSBvYnNlcnZlZCBhdHRyaWJ1dGVzIHNvIHRoYXRcbiAgICAvLyBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sgd2lsbCB3b3JrXG4gICAgc3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKSB7XG4gICAgICAgIHJldHVybiBbXCJhY3RpdmVcIl07XG4gICAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwibG9hZGluZy1zcGlubmVyXCIsIExvYWRpbmdTcGlubmVyKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n')}]);