const navbar = document.querySelector(".navbar");
const navlink = document.querySelectorAll(".navbar a");
const navbarItem = document.querySelectorAll(".navbar li");
const navMobile = document.querySelector(".navbar .fas");
const navList = document.querySelector(".navbar .navbar__list");
const headerArrow = document.querySelectorAll(".header__content .fas");
let position = 0;
const timeContent = 10000;
const dataHeader = [
  {
    title: "Que me Caracteriza!",
    message: "Ser apasionado, motivado y determinado a alcanzar mis metas",
  },
  {
    title: "Porque Desarrollo Web?",
    message:
      "Me apasiona el mundo tecnológico y el desarrollo web me ha permitido conocer como se combinan todas estas tecnologías.",
  },
  {
    title: "Herramientas",
    message:
      "Aprendo el uso de nuevas herramientas, debido al constante cambio que existe.",
  },
  {
    title: "Nunca rendirse!",
    message:
      "A pesar de las dificultades, la perseverancia para alcanzar lo que desees es la clave del éxito.",
  },
];

const modify = () => {
  const titleContent = document.querySelector("#title");
  const messageContent = document.querySelector("#message");

  messageContent.textContent = dataHeader[position].message;
  titleContent.textContent = dataHeader[position].title;
};
const modifyContent = {
  next() {
    if (position >= dataHeader.length - 1) {
      position = 0;
    } else {
      position++;
    }
    modify();
  },

  forward() {
    if (position <= 0) {
      position = dataHeader.length - 1;
    } else {
      position--;
    }
    modify();
  },

  autoplay() {
    setInterval(this.next, timeContent);
  },
};

const addRemove = (type, ele, name) => {
  if (type === "add") {
    ele.forEach((item) => {
      item.classList.add(name);
    });
  }
  if (type === "remove") {
    ele.forEach((item) => {
      item.classList.remove(name);
    });
  }
};

window.addEventListener("scroll", () => {
  if (pageYOffset != 0) {
    navbar.classList.add("navbar--scroll");
    navMobile.classList.add("fas--scroll");
    navList.classList.add("navbar__list--bg");
    addRemove("add", navlink, "navlink--scroll");
    addRemove("add", navbarItem, "navbarItem");
  }
  if (pageYOffset == 0) {
    navbar.classList.remove("navbar--scroll");
    navMobile.classList.remove("fas--scroll");
    addRemove("remove", navlink, "navlink--scroll");
    addRemove("remove", navbarItem, "navbarItem");
    navList.classList.remove("navbar__list--bg");
  }
});

navMobile.addEventListener("click", () => {
  navList.classList.toggle("navbar__list--show");
});

for (const arrow of headerArrow) {
  arrow.addEventListener("click", () => {
    if (arrow.classList.contains("fa-chevron-right")) {
      modifyContent.next();
    }
    if (arrow.classList.contains("fa-chevron-left")) {
      modifyContent.forward();
    }
  });
}

modifyContent.autoplay();
