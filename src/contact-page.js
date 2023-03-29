import "./style.css";

const createContactPage = () => {
  let content = document.querySelector("#content");

  let main = document.createElement("div");
  main.setAttribute("id", "main");

  const header = document.createElement("h1");
  header.textContent = "Contact📝";
  main.appendChild(header);

  content.appendChild(main);
};

export default createContactPage;
