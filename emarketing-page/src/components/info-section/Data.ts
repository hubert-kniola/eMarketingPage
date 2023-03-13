import About from "../../images/about.svg";
import Discover from "../../images/discover.svg";
import Services from "../../images/services.svg";
import Mail from "../../images/mail.svg";

export const homeObjOne = {
  id: "product",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "Szybki elastyczny generator",
  headline: "Wprowadź wymagane dane i uzyskaj wynik",
  description:
    "To całkiem proste! Udostępnij kilka małoznaczących cyfr, wylicz swoje zapotrzebowanie i odbierz dostosowaną do siebie dietę.",
  buttonLabel: "Sprawdź swój GENZ",
  imgStart: false,
  img: About,
  alt: "Product",
  dark: false,
  primary: true,
  darkText: false,
  withButton: true,
};

export const homeObjTwo = {
  id: "about",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Automatycznie układana dieta",
  headline: "Nie lubisz brukselki? Nie ma problemu!",
  description:
    "Specjalnie zaprogramowany algorytm weźmie pod uwagę twoje gusta dotyczące dań i produktów i na ich podstawie zwróci spersonalizowany spis dań.",
  imgStart: true,
  img: Discover,
  alt: "About",
  dark: true,
  primary: true,
  darkText: true,
  withButton: false,
};

export const homeObjThree = {
  id: "services",
  lightBg: true,
  lightText: false,
  lightTextDesc: true,
  topLine: "Wszystkie popularne składniki",
  headline: "Globalna baza produktów",
  description:
    "Nasz produkt przeszuka każdy zakamarek żeby znaleźć dobrej jakości produkt z jak najlepszymi wartościami odżywczymi. Nie czekaj i wypróbuj!",
  buttonLabel: "Sprawdź",
  imgStart: false,
  img: Services,
  alt: "Services",
  dark: true,
  primary: true,
  darkText: true,
  withButton: true,
};

export const homeObjFour = {
  id: "contact",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "skontaktuj się",
  headline: "Zadaj nam pytanie!",
  description:
    "Jeśli masz jakiekolwiek pytania dotyczące inwestycji lub chcesz poznać więcej szczegółów na temat produktu napisz do nas!",
  buttonLabel: "Wyślij mail",
  imgStart: false,
  img: Mail,
  alt: "Contact",
  dark: false,
  primary: true,
  darkText: false,
  withButton: true,
};

