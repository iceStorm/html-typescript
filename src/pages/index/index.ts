import "./index.scss";
import img from "./java-script.png";

const button = document.createElement("button");
button.innerHTML = `<img src=${img} />`;

document.body.appendChild(button);

console.log("Hello world!");
