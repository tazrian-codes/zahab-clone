import React from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoxOpen,
  faShield,
  faHeadset,
  faAngleLeft,
  faHome,
  faShoppingBasket,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import "./Pages.css";
import Navbar from "../components/Navbar/Navbar";
import About from "./About/About";
import Blog from "./Blog/Blog";
import Home from "./Home/Home";
import Shop from "./Shop/Shop";
import Footer from "../components/Footer/Footer";
import PageShift from "../components/PageShift/PageShift";
import Account from "./Account/Account";

const Pages = () => {
  const { pageName } = useParams();

  const content = {
    blog: "Blog",
    contact: "Contact Us",
    about: "About Us",
  };

  return (
    <div className="pages">
      <PageShift title={content[pageName]} />

      <div className="pages-body">
      {pageName === "about" ? (
        <About />
      ) : pageName === "blog" ? (
        <Blog />
      ) : pageName === "account" ? (
        <Account />
      ) : null}
      </div>
      <Footer />
    </div>
  );
};

export default Pages;
