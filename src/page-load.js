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

  //add restaurant description
  let textDiv = document.createElement("div");
  textDiv.classList.add("info");
  let description = document.createElement("p");
  description.textContent = `Fill all your cartoon food cravings and childhood nostalgia in our restaurant!
  We have everything here: from the legendary
  "SpongeBob SquarePants" Krabby Patty to
  "Alice in Wonderland"'s cookies that are just begging to be
  eaten!`;
  description.classList.add("description");

  //add restaurant opening hours
  let openingHours = document.createElement("div");
  openingHours.classList.add("open-hours");
  let heading1 = document.createElement("h3");
  heading1.textContent = `Open Hours`;
  openingHours.appendChild(heading1);
  let openingHoursInfo = document.createElement("ul");
  let weekdays = document.createElement("li");
  weekdays.textContent = `Mon-Fri: every second of your free time`;
  let weekend = document.createElement("li");
  weekend.textContent = `weekend: 24/7`;

  openingHoursInfo.appendChild(weekdays);
  openingHoursInfo.appendChild(weekend);
  openingHours.appendChild(openingHoursInfo);

  //add restaurant location
  let location = document.createElement("div");
  location.classList.add("location");
  let heading2 = document.createElement("h3");
  heading2.textContent = `Location`;
  location.appendChild(heading2);
  let locationInfo = document.createElement("p");
  locationInfo.textContent = `Imagination Street, Childhood Drawer`;
  location.appendChild(locationInfo);

  textDiv.appendChild(description);
  textDiv.appendChild(openingHours);
  textDiv.appendChild(location);
  main.appendChild(textDiv);
  content.appendChild(main);
};

export default createHomePage;
