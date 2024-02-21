import { Slider as ProductsSlider } from "../../components/Slider/Slider";
const products = [
  { img: "productsSlider/productBanner.png", to: "#" },
  { img: "/logo.png", to: "#" },
];
import { NewProducts } from "../../components/NewProducts/NewProducts"
import { Categories } from "../../components/Сategories/Сategories";

export const MainPage = () => {
  return (
    <div>
      <ProductsSlider products={products} />
      <Categories/>
      <NewProducts/>
    </div>
  );
};

