import "./style.css";
import Pic1 from "./img/Ponyo.gif";
import Pic2 from "./img/SpongeBob-SquarePants.gif";
import Pic3 from "./img/Mulan.gif";
import Pic4 from "./img/lady-and-the-tramp.gif";
import Pic5 from "./img/the-princess-and-the-frog.gif";
import Pic6 from "./img/Alice-in-Wonderland.gif";
import Pic7 from "./img/the-simpsons.gif";
import Pic8 from "./img/buzz-cola-the-simpsons.gif";
import Pic9 from "./img/duff-beer-the-simpsons.gif";
import Pic10 from "./img/coffee-the-simpsons.gif";

const createMenuPage = () => {
  let content = document.querySelector("#content");

  let main = document.createElement("div");
  main.setAttribute("id", "main");

  //add menu page title
  const header = document.createElement("h1");
  header.textContent = "Menu 🍩";
  main.appendChild(header);

  //add menu category for main dishes
  const subtileMains = document.createElement("h2");
  subtileMains.textContent = "Mains";
  main.appendChild(subtileMains);

  //add main menu container
  const menuOptions = document.createElement("div");
  menuOptions.classList.add("menu-options");

  //add menu options
  const option1 = document.createElement("div");
  option1.classList.add("menu-item");
  const dishName1 = document.createElement("h3");
  dishName1.textContent = "Comforting bowl of ramen from 'Ponyo' ";
  const dishPic1 = new Image();
  dishPic1.src = Pic1;
  const dishInfo1 = document.createElement("p");
  dishInfo1.textContent = `Served with some ham, eggs, and fresh vegetables on top, this animated dish is one of the most mouth-watering dishes in this movie.`;

  option1.appendChild(dishName1);
  option1.appendChild(dishPic1);
  option1.appendChild(dishInfo1);

  const option2 = document.createElement("div");
  option2.classList.add("menu-item");
  const dishName2 = document.createElement("h3");
  dishName2.textContent =
    "The legendary Krabby Patty  from 'Spongebob Squarepants' ";
  const dishPic2 = new Image();
  dishPic2.src = Pic2;
  const dishInfo2 = document.createElement("p");
  dishInfo2.textContent = `No wonder Plankton wanted this dish. The Krusty Krab's most famous and iconic dish is the Krabby Patty. It resembles a meatless hamburger composed of seaweed-sea buns, underwater vegetables, sauces, and a patty; cheese can also be included. Throughout the series, it is intentionally kept a secret what the patty's secret formula is.`;

  option2.appendChild(dishName2);
  option2.appendChild(dishPic2);
  option2.appendChild(dishInfo2);

  const option3 = document.createElement("div");
  option3.classList.add("menu-item");
  const dishName3 = document.createElement("h3");
  dishName3.textContent = "Congee  from 'Mulan' ";
  const dishPic3 = new Image();
  dishPic3.src = Pic3;
  const dishInfo3 = document.createElement("p");
  dishInfo3.textContent = `Rice is considered to be the most popular food to eat around the world. Due to its versatility, you can eat it on its own or pair it with a lot of different ingredients. The congee we see in Mulan is just that, rice, in a more liquidy form, with some bacon and eggs. If you are a morning person, this dish might just be for you.`;

  option3.appendChild(dishName3);
  option3.appendChild(dishPic3);
  option3.appendChild(dishInfo3);

  const option4 = document.createElement("div");
  option4.classList.add("menu-item");
  const dishName4 = document.createElement("h3");
  dishName4.textContent = "Spaghetti With Meatballs from 'Lady And The Tramp' ";
  const dishPic4 = new Image();
  dishPic4.src = Pic4;
  const dishInfo4 = document.createElement("p");
  dishInfo4.textContent = `Nothing is more memorable than the Lady and the Tramp eating some spaghetti with meatballs in an alleyway. A perfect Italian dish, two simple foods combined, made one of the most iconic cartoon foods we have ever seen. Add some sauce on top of it and you will have the perfect dish on your table.`;

  option4.appendChild(dishName4);
  option4.appendChild(dishPic4);
  option4.appendChild(dishInfo4);

  menuOptions.appendChild(option1);
  menuOptions.appendChild(option2);
  menuOptions.appendChild(option3);
  menuOptions.appendChild(option4);

  //add desserts
  const subtileDesserts = document.createElement("h2");
  subtileDesserts.textContent = "Desserts";

  const option5 = document.createElement("div");
  option5.classList.add("menu-item");
  const dishName5 = document.createElement("h3");
  dishName5.textContent = "Beignets from 'The Princess And The Frog' ";
  const dishPic5 = new Image();
  dishPic5.src = Pic5;
  const dishInfo5 = document.createElement("p");
  dishInfo5.textContent = `Nothing says Louisiana and New Orleans like the combination of Gumbo and Beignets. Both suit each other very nicely. Gumbo is a liquid, while a beignet is bread-like food. Nothing feels as good as picking up some gumbo with some beignets and then taking that sweet, sweet bite. When these two combine, it feels like a match made in heaven.`;

  option5.appendChild(dishName5);
  option5.appendChild(dishPic5);
  option5.appendChild(dishInfo5);

  const option6 = document.createElement("div");
  option6.classList.add("menu-item");
  const dishName6 = document.createElement("h3");
  dishName6.textContent = "The Eat Me Cookies 'Alice In Wonderland' ";
  const dishPic6 = new Image();
  dishPic6.src = Pic6;
  const dishInfo6 = document.createElement("p");
  dishInfo6.textContent = `Cookies can’t speak in real life (in dreams they can). So without speaking a word, only displaying the simple term like “Eat me,” is enough to pique the interest of any person near it. A lot of attention is given to the writing on the cookie. Even a simple cookie with some writing on it is enticing and irresistible.`;

  option6.appendChild(dishName6);
  option6.appendChild(dishPic6);
  option6.appendChild(dishInfo6);

  const option7 = document.createElement("div");
  option7.classList.add("menu-item");
  const dishName7 = document.createElement("h3");
  dishName7.textContent = "That iconic pink doughnut from 'The Simpsons' ";
  const dishPic7 = new Image();
  dishPic7.src = Pic7;
  const dishInfo7 = document.createElement("p");
  dishInfo7.textContent = `Mmm, donuts. Nothing says tasty like freshly baked donuts covered in bright pink glaze with colorful funfetti sprinkles. This donut is the trademark of Homer Simpson. He despises other people eating his donuts and cannot function without them. It’s an addiction that we can agree is just too relatable.`;

  option7.appendChild(dishName7);
  option7.appendChild(dishPic7);
  option7.appendChild(dishInfo7);

  menuOptions.appendChild(subtileDesserts);
  menuOptions.appendChild(option5);
  menuOptions.appendChild(option6);
  menuOptions.appendChild(option7);

  //add drinks
  const subtileDrinks = document.createElement("h2");
  subtileDrinks.textContent = "Drinks";
  const subtileP = document.createElement("p");
  subtileP.textContent = "[or how to drink like a Simpson!]";

  const option8 = document.createElement("div");
  option8.classList.add("menu-item");
  const dishName8 = document.createElement("h3");
  dishName8.textContent = "Buzz Cola";
  const dishPic8 = new Image();
  dishPic8.src = Pic8;
  const dishInfo8 = document.createElement("p");
  dishInfo8.textContent = `"twice the sugar, twice the caffeine".`;

  option8.appendChild(dishName8);
  option8.appendChild(dishPic8);
  option8.appendChild(dishInfo8);

  const option9 = document.createElement("div");
  option9.classList.add("menu-item");
  const dishName9 = document.createElement("h3");
  dishName9.textContent = "Duff Beer";
  const dishPic9 = new Image();
  dishPic9.src = Pic9;
  const dishInfo9 = document.createElement("p");
  dishInfo9.textContent = `Can't Get Enough Of That Wonderful Duff?
  Grab an icy cold glass of Homer’s favorite drink and relax!`;

  option9.appendChild(dishName9);
  option9.appendChild(dishPic9);
  option9.appendChild(dishInfo9);

  const option10 = document.createElement("div");
  option10.classList.add("menu-item");
  const dishName10 = document.createElement("h3");
  dishName10.textContent = "Loads of coffee";
  const dishPic10 = new Image();
  dishPic10.src = Pic10;
  const dishInfo10 = document.createElement("p");
  dishInfo10.textContent = `Guaranteed will wake you up!`;

  option10.appendChild(dishName10);
  option10.appendChild(dishPic10);
  option10.appendChild(dishInfo10);

  menuOptions.appendChild(subtileDrinks);
  menuOptions.appendChild(subtileP);
  menuOptions.appendChild(option8);
  menuOptions.appendChild(option9);
  menuOptions.appendChild(option10);

  main.appendChild(menuOptions);
  content.appendChild(main);
};

export default createMenuPage;
