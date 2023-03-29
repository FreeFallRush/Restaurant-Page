import "./style.css";

const createContactPage = () => {
  let content = document.querySelector("#content");

  let main = document.createElement("div");
  main.setAttribute("id", "main");

  const header = document.createElement("h1");
  header.textContent = "Contact📝";
  main.appendChild(header);

  //add contact us heading
  const contactUs = document.createElement("h3");
  contactUs.textContent = "Contact Us";
  main.appendChild(contactUs);

  //add form
  const contactFormContainer = document.createElement("div");
  contactFormContainer.classList.add("form-container");

  const contactForm = document.createElement("form");
  contactForm.setAttribute("action", "#");

  const inputName = document.createElement("input");
  inputName.setAttribute("id", "name");
  inputName.setAttribute("name", "name");
  inputName.setAttribute("type", "text");
  inputName.setAttribute("placeholder", "Name");
  inputName.required = true;

  const inputMail = document.createElement("input");
  inputMail.setAttribute("id", "email");
  inputMail.setAttribute("name", "email");
  inputMail.setAttribute("type", "email");
  inputMail.setAttribute("placeholder", "Email Address");
  inputMail.required = true;

  const inputSubject = document.createElement("input");
  inputSubject.setAttribute("id", "subject");
  inputSubject.setAttribute("name", "subject");
  inputSubject.setAttribute("type", "text");
  inputSubject.setAttribute("placeholder", "Subject");
  inputSubject.required = true;

  const inputMessage = document.createElement("textarea");
  inputMessage.setAttribute("id", "message");
  inputMessage.setAttribute("name", "message");
  inputMessage.setAttribute("placeholder", "Message");

  contactForm.appendChild(inputName);
  contactForm.appendChild(inputMail);
  contactForm.appendChild(inputSubject);
  contactForm.appendChild(inputMessage);

  contactFormContainer.appendChild(contactForm);

  //add restaurant info: phone, location, mail
  const restaurantData = document.createElement("div");
  restaurantData.classList.add("info-data");
  const phoneNumber = document.createElement("div");
  phoneNumber.classList.add("phone-data");
  const phoneSpan = document.createElement("span");
  phoneSpan.innerText = "📞 Phone Number: ";
  phoneNumber.append(phoneSpan, "800 800 LaLaLand");
  restaurantData.appendChild(phoneNumber);

  const locationStatus = document.createElement("div");
  locationStatus.classList.add("location-data");
  const locationSpan = document.createElement("span");
  locationSpan.innerText = "🔎 Find Us: ";
  locationStatus.append(
    locationSpan,
    "High chances to find delicious animated food in almost any cartoon! Need to feed that imagination!"
  );
  restaurantData.appendChild(locationStatus);

  const contactMail = document.createElement("div");
  contactMail.classList.add("mail-data");
  const mailSpan = document.createElement("span");
  mailSpan.innerText = "🖍 📍 Write us: ";
  contactMail.append(mailSpan, "your-imagination@tastycartoonfood.com");
  restaurantData.appendChild(contactMail);

  //add references for images and text
  const references = document.createElement("div");
  references.classList.add("references");
  const refImages = document.createElement("div");
  refImages.classList.add("reference");
  const pImages = document.createElement("p");
  pImages.textContent = `Our Sketchy Restaurant's Delicious gifs were taken from: `;
  const imgLink = document.createElement("a");
  imgLink.textContent = `HERE`;
  imgLink.href =
    "https://says.com/my/fun/mouth-watering-cartoon-foods-we-wish-existed-irl";
  imgLink.target = "_blank";

  const refText = document.createElement("div");

  const pText = document.createElement("p");
  pText.textContent = `Our yummy menu's descriptions were taken from: `;
  const textLink = document.createElement("a");
  textLink.textContent = `HERE`;
  textLink.href =
    "https://www.boredpanda.com/cartoon-food/?utm_source=duckduckgo&utm_medium=referral&utm_campaign=organic";
  textLink.target = "_blank";

  const otherRef = document.createElement("div");

  const pOther = document.createElement("p");
  pOther.textContent = `Other Sources: THE INTERNET `;

  refImages.append(pImages, imgLink, pText, textLink, pOther);

  references.appendChild(refImages);
  references.appendChild(refText);
  references.appendChild(otherRef);

  main.appendChild(contactFormContainer);
  main.appendChild(restaurantData);
  main.appendChild(references);
  content.appendChild(main);
};

export default createContactPage;
