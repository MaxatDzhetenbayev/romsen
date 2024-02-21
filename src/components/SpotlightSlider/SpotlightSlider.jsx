import { Slider } from "../Slider/Slider";
const products = [
  { img: "productsSlider/productBanner.png", to: "#" },
  { img: "/logo.png", to: "#" },
];

export const SpotlightSlider = () => {
  return <Slider products={products} />;
};
