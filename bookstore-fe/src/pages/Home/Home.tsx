import React from "react";
import {HeroSection} from "./compoments/HeroSection";
import {Categories} from "./compoments/Categories";
import {NewBook} from "./compoments/NewBook";
import {ProductPortfolio} from "./compoments/ProductPortfolio";
import {ShoppingTrends} from "./compoments/ShoppingTrends";

export const Home: React.FC = () => {
  return (
      <>
          <HeroSection/>
          <Categories/>
          <NewBook/>
          <ProductPortfolio/>
          <ShoppingTrends/>
      </>
  )
}