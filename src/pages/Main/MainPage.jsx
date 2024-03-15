// import { NewProducts } from "../../components/NewProducts/NewProducts";
import { Categories } from "../../components/Сategories/Сategories";
import { SpotlightSlider } from "../../components/SpotlightSlider/SpotlightSlider";
import { TextAbout } from "../../components/TextAbout/TextAbout";
import { Menu } from "../../components/Menu/Menu";

export const MainPage = () => {
  return (
    <div>
      <SpotlightSlider />
      <Menu/>
      <Categories />
      {/* <NewProducts /> */}
      <TextAbout />
    </div>
  );
};
