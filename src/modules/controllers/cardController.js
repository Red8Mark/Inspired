import { API_URL } from "../const";
import { getData } from "../getData";
import { renderCard } from "../render/renderCard";
import { renderHero } from "../render/renderHero";
import { renderNavigation } from "../render/renderNavigation";
import { renderProducts } from "../render/renderProducts";

export const cardController = async (routerDATA) => {
  const { id } = routerDATA.data;

  const data = await getData(`${API_URL}/api/goods/${id}`);

  renderNavigation(data.gender, data.category);
  renderHero(false);
  renderCard(data);
  renderProducts("Вам также может понравиться", {
    count: 4,
    gender: data.gender,
  });
};