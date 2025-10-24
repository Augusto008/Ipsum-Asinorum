import { addPost } from "./Src/V1/Scripts/Posts/populate.js";
import { altImg } from "./Src/V1/Scripts/Standardizers/images.js";

const resetters = document.getElementsByClassName("reset");
const main = document.getElementById("main") as HTMLElement | null;

const routes: Record<string, string> = {
  "": "Pages/V1/Intro.html",
  home: "Pages/V1/home.html",
  about: "Pages/V1/about.html",
  diary: "Pages/V1/diary.html",
  products: "Pages/V1/products.html",
  projects: "Pages/V1/projects.html"
};

function mainNavigation(target: string): void {
  const selected = document.querySelectorAll(".c-nav__item__selected");

  selected.forEach((element) => {
    element.classList.remove("c-nav__item__selected");
    element.classList.add("c-nav__item");
  });

  if (target) {
    const choose = document.getElementById("nav" + target);
    if (choose) {
      choose.classList.remove("c-nav__item");
      choose.classList.add("c-nav__item__selected");
    } else {
      console.warn("Elemento alvo não encontrado:", "nav" + target);
    }
  }
}

function loadRoute(): void {
  const hash: string = window.location.hash.replace("#", "");
  const route: string = routes[hash] || routes[""];;

  fetch(route)
    .then((res: Response) => res.text())
    .then((html: string) => {

      if (main) {
        main.innerHTML = html;
        let target = "";

        switch (hash) {
          case "home":
            target = "Home";
            break;
          case "diary":
            target = "Diary";
            addPost();
            altImg();
            break;
          case "projects":
            target = "Projects";
            break;
          case "products":
            target = "Products";
            break;
          case "about":
            target = "About"
            break;
          default:
            console.log("Default");
        }
        mainNavigation(target);

        //console.log(hash);
      } else {
        console.error("Elemento com id='main' não encontrado.");
      }
    })
    .catch((err: Error) => {
      console.error("Erro ao carregar rota:", err.message);
    });
}

Array.from(resetters).forEach((el) => {
  el.addEventListener("click", (event) => {
    history.replaceState(null, "", window.location.pathname + window.location.search);
    loadRoute();
  });
});

window.addEventListener("hashchange", loadRoute);
window.addEventListener("load", loadRoute);
