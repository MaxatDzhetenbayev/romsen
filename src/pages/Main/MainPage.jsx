import { NewProducts } from "../../components/NewProducts/NewProducts";
import { Categories } from "../../components/Сategories/Сategories";
import { SpotlightSlider } from "../../components/SpotlightSlider/SpotlightSlider";
import { Menu } from "../../components/Menu/Menu";

export const MainPage = () => {
  return (
    <div>
      <SpotlightSlider />
      <Menu/>
      <Categories />
      <NewProducts />
    </div>
  );
};
