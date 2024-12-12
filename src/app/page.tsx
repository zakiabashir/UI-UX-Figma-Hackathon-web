import PromotionBg from "./components/PromotionBg";
import { Josefin_Sans } from "next/font/google"; // Use PascalCase for the font
import FeaturedProducts from "./components/FeaturedProducts";
import LeatestProducts from "./components/LeatestProducts";
import WhatShopexOffer from "./components/WhatShopexOffer";
import UniqueFeatureSofa from "./components/UniqueFeatureSofa";
import TrendingProducts from "./components/TrendingProducts";
import Discountitem from "./components/Discountitem";
import TopCategories from "./components/TopCategories";
import GetLatest from "./components/GetLatest";
import LatestBlog from "./components/LatestBlog";


// Load the Josefin Sans font at the module scope
const josefin = Josefin_Sans({
  weight: ['400', '700'],
  style: 'normal',
  subsets: ['latin'],
  display: 'swap',
});

export default function Home() {
  return (
<div className={josefin.className}>

<PromotionBg />

<FeaturedProducts />

<LeatestProducts />

<WhatShopexOffer />

<UniqueFeatureSofa />    

<TrendingProducts />

<Discountitem />

<TopCategories />

<GetLatest />

<LatestBlog />
                          
</div>

  );
}
