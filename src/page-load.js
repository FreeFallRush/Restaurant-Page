import "./style.css";
import Pic from "./img/spirited-away.gif";

const createHomePage = () => {
  let content = document.querySelector("#content");

  let main = document.createElement("div");
  main.setAttribute("id", "main");

  //restaurant title
  let header = document.createElement("h1");
  header.textContent = `Sketchy Restaurant`;
  main.appendChild(header);

  //add home-page img
  const infoPic = new Image();
  infoPic.src = Pic;
  main.appendChild(infoPic);

  content.appendChild(main);
};

export default createHomePage;
