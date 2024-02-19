import { Slider as ProductsSlider } from "../../components/Slider/Slider";
const products = [
  { img: "productsSlider/productBanner.png", to: "#" },
  { img: "/logo.png", to: "#" },
];
export const MainPage = () => {
  return (
    <div>
      <ProductsSlider products={products} />
    </div>
  );
};
