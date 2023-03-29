import "./style.css";

const createHomePage = () => {
  let content = document.querySelector("#content");

  let main = document.createElement("div");
  main.setAttribute("id", "main");

  //restaurant title
  let header = document.createElement("h1");
  header.textContent = `Sketchy Restaurant`;
  main.appendChild(header);

  content.appendChild(main);
};

export default createHomePage;
