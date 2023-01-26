import { DATA } from "../const";
import { renderCard } from "../render/renderCard";
import { renderHero } from "../render/renderHero";
import { renderNavigation } from "../render/renderNavigation";
import { renderProducts } from "../render/renderProducts";

export const categoryPageController = (routerDATA) => {
  const { gender, category } = routerDATA.data;
  if (!Object.keys(DATA.navigation).includes(gender)) {
    return;
  }
  const params = { gender, category};

  if (routerDATA.params?.page) {
    params.page = routerDATA.params.page;
  }

  const title = DATA.navigation[gender].list.find(item => item.slug === category).title;
  renderNavigation(gender, category);
  renderHero(false);
  renderCard(false);
  renderProducts(title, params);
};


