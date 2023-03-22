import About from "../../images/about.svg";
import Discover from "../../images/discover.svg";
import Services from "../../images/services.svg";
import Mail from "../../images/mail.svg";
import Notify from "../../images/notify.svg";
import Award1 from "../../images/award1.svg";
import Award2 from "../../images/award2.svg";
import KFD from "../../images/KFD.jpg";
import SFD from "../../images/SFD.jpg";
import GymGlamour from "../../images/glamour.jpg";
import GymShark from "../../images/gymshark.png";
import Dzik from "../../images/dzik.png";
import GymBeam from "../../images/beam.png";
import Fitatu from "../../images/fitatu.png";
import Viking from "../../images/viking.png";
import Owner from "../../images/owner.png";
import Areczek from "../../images/areczek.jpg";
import Map from "../../images/map.jpg";
import Team1 from "../../images/team.jpg";
import Team2 from "../../images/team.png";
import PM from "../../images/pm.jpg";
import Menago from "../../images/menago.jpg";

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
  id: "",
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
  topLine: "Skontaktuj się",
  headline: "Zadaj nam pytanie!",
  description:
    "Jeśli masz jakiekolwiek pytania dotyczące inwestycji lub chcesz poznać więcej szczegółów na temat produktu napisz do nas!",
  description1: "Adres e-mail: diet-genz@genz.com",
  description2: "Numer: +48 444 222 666",
  description3: "FAX: +48 61 222 33 44",
  buttonLabel: "Wyślij mail",
  imgStart: false,
  img: Mail,
  alt: "Contact",
  dark: false,
  primary: true,
  darkText: false,
  withButton: true,
};

export const homeObjFive = {
  id: "services",
  maintitle: "Zaufaj nam!",
  subtitle1: "Najlepsi!",
  description1:
    "Pierwsze miejsce w plebiscycie na najlepszą firmę w branży sportowej w Polsce w 2022 roku!",
  icon1: Award1,
  subtitle2: "Zawsze cię słuchamy!",
  description2:
    "Ponad 95% pozytywnych opinii na forach i serwisach opiniotwórczych.",
  icon2: Notify,
  subtitle3: "Współpracój!",
  description3:
    "Zostać naszym agentem w świecie sportu i reklamuj nasze produkty.",
  icon3: Award2,
  multi: false,
};

export const homeObjSix = {
  id: "",
  maintitle: "Współpracowaliśmy z:",
  icon1: KFD,
  icon2: SFD,
  icon3: GymGlamour,
  icon4: GymShark,
  icon5: Dzik,
  icon6: GymBeam,
  icon7: Fitatu,
  icon8: Viking,
  multi: true,
};

export const homeObjSeven = {
  id: "people",
  lightBg: true,
  lightText: false,
  lightTextDesc: true,
  topLine: "Hubert Knioła",
  headline: "CEO and OWNER",
  description:
    '"Człowiek XXI wieku, elokwętny, o niestandardowym IQ, wyróżniający się gracją i nienaganną dykcją, a przede wszystkim skromny szef dobrze funkcjonującej firmy! To właśnie ja."',
  buttonLabel: "Poznaj resztę zespołu",
  to: "/company",
  imgStart: false,
  img: Owner,
  alt: "Services",
  dark: true,
  primary: true,
  darkText: true,
  withButton: false,
  withNavButton: true,
};

export const homeObjEight = {
  id: "people",
  lightBg: true,
  lightText: false,
  lightTextDesc: true,
  topLine: "Janusz Kowalski",
  headline: "CIO and CFO",
  description: '"Panie areczku! Witam w naszej firmie! Dla Pana wszystko."',
  buttonLabel: "Sprawdź",
  imgStart: true,
  img: Areczek,
  alt: "Services",
  dark: true,
  primary: true,
  darkText: true,
  withButton: false,
};

export const compObjOne = {
  id: "people",
  lightBg: true,
  lightText: false,
  lightTextDesc: true,
  topLine: "Marcin Fokusińki",
  headline: "Brand Manager",
  description:
    '"Nie zawsze wszystko idzie po naszej. Trzeba pracować by nie stanowiło to przeszkód w naszej drodze ku celowi"',
  buttonLabel: "Sprawdź",
  imgStart: true,
  img: PM,
  alt: "Services",
  dark: true,
  primary: true,
  darkText: true,
  withButton: false,
};

export const compObjTwo = {
  id: "people",
  lightBg: true,
  lightText: false,
  lightTextDesc: true,
  topLine: "",
  headline: "MARKETING TEAM",
  description: "",
  buttonLabel: "Sprawdź",
  imgStart: true,
  img: Team1,
  alt: "Services",
  dark: true,
  primary: true,
  darkText: true,
  withButton: false,
};

export const compObjThree = {
  id: "people",
  lightBg: true,
  lightText: false,
  lightTextDesc: true,
  topLine: "",
  headline: "DEVELOPMENT TEAM",
  description: "",
  buttonLabel: "Sprawdź",
  imgStart: true,
  img: Team2,
  alt: "Services",
  dark: true,
  primary: true,
  darkText: true,
  withButton: false,
};

export const compObjSeven = {
  id: "people",
  lightBg: true,
  lightText: false,
  lightTextDesc: true,
  topLine: "Martyna Rzeźnik",
  headline: "Customer Service Manager",
  description: '"Staraj się, a zwróci się z nawiązką."',
  buttonLabel: "Sprawdź",
  imgStart: false,
  img: Menago,
  alt: "Services",
  dark: true,
  primary: true,
  darkText: true,
  withButton: false,
};

export const compObjFour = {
  id: "",
  maintitle: "FAQ",
  subtitle1:
    "Czy dieta generowana automatycznie przez Waszą firmę jest indywidualnie dostosowana do moich potrzeb?",
  description1:
    "Tak, dieta jest generowana automatycznie na podstawie informacji podanych przez klienta, takich jak waga, wzrost, aktywność fizyczna i wiek.",
  subtitle2:
    "Jakie są korzyści płynące z wybierania diety generowanej automatycznie przez Waszą firmę?",
  description2:
    "Dieta generowana automatycznie przez naszą firmę zapewnia szybkie i wygodne rozwiązanie dla osób, które potrzebują dostosowanej do ich potrzeb diety.",
  subtitle3:
    "Jakie informacje muszę podać, aby wygenerować dietę za pomocą Waszej platformy?",
  description3:
    "Aby wygenerować dietę, musisz podać swoją wagę, wzrost, aktywność fizyczną i wiek. Te informacje pomogą naszej platformie wygenerować indywidualnie dostosowaną dietę dla Ciebie.",
  subtitle4:
    "Czy dieta generowana automatycznie przez Waszą firmę uwzględnia moje preferencje żywieniowe?",
  description4:
    "Tak, nasza platforma uwzględnia preferencje żywieniowe, takie jak dieta wegetariańska lub wegańska, przy generowaniu diety.",
  subtitle5: "Czy mogę wygenerować dietę za pomocą Waszej platformy za darmo?",
  description5:
    "Nasza platforma oferuje bezpłatną wersję próbną, która pozwala wygenerować dietę na jeden dzień. Pełna wersja platformy wymaga opłaty.",
  subtitle6:
    "Jak często powinienem stosować dietę wygenerowaną przez Waszą platformę?",
  description6:
    "Częstotliwość stosowania diety zależy od celów i potrzeb klienta. Zalecamy skonsultowanie się z lekarzem lub dietetykiem przed rozpoczęciem stosowania diety.",
  subtitle7:
    "Czy dieta generowana przez Waszą firmę uwzględnia preferencje żywieniowe, takie jak wegetarianizm lub bezglutenowość?",
  description7:
    "Tak, nasza platforma generująca dietę uwzględnia preferencje żywieniowe klienta, w tym wegetarianizm, weganizm, bezglutenowość.",
  subtitle8: "Czy można dokonać modyfikacji wygenerowanej diety?",
  description8:
    "Tak, wygenerowana dieta jest jedynie propozycją, którą można modyfikować i dostosowywać do indywidualnych potrzeb i preferencji.",
  multi: true,
};

export const compObjFive = {
  id: "people",
  lightBg: true,
  lightText: false,
  lightTextDesc: true,
  topLine: "Znajdz nas w naszych miejscówkach!",
  headline: "Siedziba!",
  description: "Poznań ul. Polna 3",
  description1: "Warszwa ul. Marszłakowska 55",
  description2: "Gdańsk ul. Byka 8",
  description3: "Wrocław ul. Polna 24",
  description4: "Kraków ul. Wietrzna 3/14",
  buttonLabel: "Sprawdź",
  imgStart: false,
  img: Map,
  alt: "Services",
  dark: true,
  primary: true,
  darkText: true,
  withButton: false,
};

export const compObjSix = {
  id: "",
  maintitle: "Współpracowaliśmy z:",
  icon1: KFD,
  icon2: SFD,
  icon3: GymGlamour,
  icon4: GymShark,
  icon5: Dzik,
  icon6: GymBeam,
  icon7: Fitatu,
  icon8: Viking,
  multi: true,
};
