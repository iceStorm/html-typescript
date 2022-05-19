import "./styles/main.scss";
import img from "./assets/java-script.png";

const button = document.createElement("button");
button.innerHTML = `<img src=${img} />`;

document.body.appendChild(button);

console.log("Hello world!");
