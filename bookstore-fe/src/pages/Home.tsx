import React from "react";
import {HeroSection} from "../containers/HeroSection";
import {Categories} from "../containers/Categories";
import {NewBook} from "../containers/NewBook";
import {ProductPortfolio} from "../containers/ProductPortfolio";
import {ShoppingTrends} from "../containers/ShoppingTrends";

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