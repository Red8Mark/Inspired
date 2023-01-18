import "./index.html";
import "./index.scss";

import { router } from "./modules/router";
import { mainPage } from "./modules/mainPage/mainPage";
import { renderFooter } from "./modules/render/renderFooter";
import { renderHeader } from "./modules/render/renderHeader";
import { womenMainPage } from "./modules/mainPage/womenMainPage";
import { menMainPage } from "./modules/mainPage/menMainPage";
import { getData } from "./modules/getData";
import { API_URL, DATA } from "./modules/const";
import { createCssColors } from "./modules/createCssColors";
import { createElement } from "./modules/createElement";

const init = async () => {
  try {
    router.on("*", () => {
      renderHeader();
      renderFooter();
    });
    DATA.navigation = await getData(`${API_URL}/api/categories`);
    DATA.colors = await getData(`${API_URL}/api/colors`);

    createCssColors(DATA.colors);

    router.on("/", () => {
      mainPage();
    });

    router.on("women", () => {
      womenMainPage();
    });

    router.on("men", () => {
      menMainPage();
    });

    router.on("search", (data) => {
      menMainPage();
    });

  } catch (e) {
    createElement(
      "h2",
      {
        textContent: "Что-то пошло не так, попробуйте позже...",
      },
      {
        parent: document.querySelector("main"),
        cb(h2) {
          h2.style.textAlign = "center";
        },
      }
    );
  } finally {
    router.resolve();
  }
};

init();
