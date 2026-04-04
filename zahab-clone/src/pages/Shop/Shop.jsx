import React from "react";
import { useParams } from "react-router-dom";
import "./Shop.css";

// Assets & components
import {
  product_list,
  sweet_type,
  traditional_type,
} from "../../assets/resources/assets";
import ProductSection from "../../components/ProductSection/ProductSection";
import PageShift from "../../components/PageShift/PageShift";
import BottomNav from "../../components/BottomNav/BottomNav";
import Footer from "../../components/Footer/Footer";

const Shop = () => {
  const { category } = useParams(); // Get category from URL params

  // Map category param to title and product list
  const categoryMap = {
    "sweet-collection": {
      title: "Sweet Collection",
      products: sweet_type,
    },
    "traditional-collection": {
      title: "Traditional Collection",
      products: traditional_type,
    },
    "popular-items": {
      title: "Popular Items",
      products: product_list,
    },
  };

  // Use mapped category or default to Shop with all products
  const current = categoryMap[category] || {
    title: "Shop",
    products: product_list,
  };

  return (
    <div className="shop-page">
      {/* Bottom navigation for mobile/quick access */}
      <BottomNav />

      {/* Page title / breadcrumb component */}
      <PageShift title={current.title} />

      {/* Product grid / listing */}
      <ProductSection title={current.title} products={current.products} />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Shop;
