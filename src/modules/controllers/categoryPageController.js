import { DATA } from "../const";
import { renderHero } from "../render/renderHero";
import { renderNavigation } from "../render/renderNavigation";
import { renderProducts } from "../render/renderProducts";

export const categoryPageController = (routerDATA) => {
  const { gender, category } = routerDATA.data;
  const params = { gender, category};

  if (routerDATA.params?.page) {
    params.page = routerDATA.params.page;
  }

  const title = DATA.navigation[gender].list.find(item => item.slug === category).title;
  renderNavigation(gender, category);
  renderHero(false);
  renderProducts(title, params);
};


