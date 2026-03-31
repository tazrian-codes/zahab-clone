import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrosoft } from "@fortawesome/free-brands-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";
import "./Shop.css";
import { product_list, sweet_type, traditional_type } from "../../assets/resources/assets";
import ProductCard from "../../components/ProductCard/ProductCard";
import ProductSection from "../../components/ProductSection/ProductSection";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import PageShift from "../../components/PageShift/PageShift";
import BottomNav from "../../components/BottomNav/BottomNav";

const Shop = () => {
  const { category } = useParams();

  const categoryMap = {
    'sweet-collection': {
      title: 'Sweet Collection',
      products: sweet_type
    },
    'traditional-collection': {
      title: 'Traditional Collection',
      products: traditional_type
    },
    'popular-items': {
      title: 'Popular Items',
      products: product_list
    }
  };

  const current = categoryMap[category] || {
    title: 'Shop',
    products: product_list
  };

  return (
    <div className="shop-page">
      <BottomNav />
      <PageShift title={current.title} />
      <ProductSection title={current.title} products={current.products} />
      <Footer />
    </div>
  );
};

export default Shop;
