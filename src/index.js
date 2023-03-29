import pageLoad from "./page-load.js";
import createMenuPage from "./menu-page.js";

const createTabs = () => {
  const content = document.querySelector("#content");

  const tabsDiv = document.createElement("div");
  tabsDiv.classList.add("tabs");

  const tab1 = document.createElement("p");
  tab1.textContent = "Home";
  tab1.setAttribute("id", "home-btn");
  tab1.classList.add("tab");
  const tab2 = document.createElement("p");
  tab2.setAttribute("id", "menu-btn");
  tab2.textContent = "Menu";
  tab2.classList.add("tab");

  const tab3 = document.createElement("p");
  tab3.setAttribute("id", "contact-btn");
  tab3.textContent = "Contact";
  tab3.classList.add("tab");

  tabsDiv.appendChild(tab1);
  tabsDiv.appendChild(tab2);
  tabsDiv.appendChild(tab3);

  content.appendChild(tabsDiv);

  tab1.addEventListener("click", () => {
    clearContent();
    pageLoad();
  });

  tab2.addEventListener("click", () => {
    clearContent();
    createMenuPage();
  });

  tab3.addEventListener("click", () => {
    clearContent();
    createContactPage();
  });
};

function clearContent() {
  const content = document.querySelector("#content");
  const pageContent = document.querySelector("#main");
  if (pageContent) {
    content.removeChild(pageContent);
  }
}
createTabs();
pageLoad();
