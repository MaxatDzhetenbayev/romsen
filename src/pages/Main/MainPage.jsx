import { NewProducts } from "../../components/NewProducts/NewProducts";
import { Categories } from "../../components/Сategories/Сategories";
import { SpotlightSlider } from "../../components/SpotlightSlider/SpotlightSlider";
export const MainPage = () => {
  return (
    <div>
      <SpotlightSlider />
      <Categories />
      <NewProducts />
    </div>
  );
};
