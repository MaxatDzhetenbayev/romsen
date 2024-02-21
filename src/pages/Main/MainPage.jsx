import { NewProducts } from "../../components/NewProducts/NewProducts";
import { Categories } from "../../components/Сategories/Сategories";
import{TextAbout} from "../../components/TextAbout/TextAbout";
import { SpotlightSlider } from "../../components/SpotlightSlider/SpotlightSlider";
export const MainPage = () => {
  return (
    <div>
      <SpotlightSlider />
      <Categories />
      <NewProducts />
      <TextAbout/>
    </div>
  );
};
