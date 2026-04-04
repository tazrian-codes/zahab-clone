import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoxOpen,
  faShield,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";
import "./About.css";

const About = () => {
  return (
    <div>
      <div className="about">
        <div className="about-body">
          <p>
            Welcome to <span className="extra-black">Zahab Perfumes,</span>{" "}
            where elegance meets fragrance. We take pride in offering{" "}
            <span className="extra-black">
              premium-quality attars and perfumes
            </span>{" "}
            that embody luxury, sophistication, and tradition.
          </p>

          <h4>Our Journey</h4>
          <p>
            Zahab Perfumes was founded with a passion for creating scents that
            leave a lasting impression. Our mission is to bring you{" "}
            <span className="extra-black">
              exquisite, long-lasting fragrances
            </span>{" "}
            crafted from the finest ingredients. Whether you prefer{" "}
            <span className="extra-black">classic oriental attars</span> or{" "}
            <span className="extra-black">modern perfume blends,</span> we have
            something for every fragrance lover.
          </p>

          <h4>Why Choose Zahab Perfumes?</h4>
          <div className="list">
            <ul>
              <li>
                <span className="extra-black">
                  ✔ Authentic & Premium Fragrances{" "}
                </span>{" "}
                – Each perfume is carefully selected to ensure the best quality
                and longevity.
              </li>
              <li>
                <span className="extra-black">✔ Wide Range of Selections </span>{" "}
                – From deep and musky to fresh and floral, our collection is
                designed to suit every personality and occasion.
              </li>
              <li>
                <span className="extra-black">
                  ✔ Customer Satisfaction First{" "}
                </span>{" "}
                – We believe in building trust, which is why our customers’ love
                and feedback inspire us to keep delivering excellence.
              </li>
              <li>
                <span className="extra-black">✔ Affordable Luxury </span> –
                Experience top-tier fragrances at competitive prices, making
                luxury accessible to everyone.
              </li>
            </ul>
          </div>

          <h4>Our Vision</h4>
          <p>
            We aim to be{" "}
            <span className="extra-black">
              {" "}
              Bangladesh’s most trusted perfume brand,
            </span>{" "}
            known for our exceptional fragrances and commitment to quality.
            Zahab Perfumes isn’t just about scents—it’s about creating
            unforgettable experiences.
          </p>

          <h4>Join Our Fragrance Journey</h4>
          <p>
            Be a part of the{" "}
            <span className="extra-black">Zahab Perfumes family</span> and
            discover a world of mesmerizing scents. Explore our collection and
            let your fragrance tell your story.
          </p>
        </div>

        <div className="about-bottom">
          <div className="about-bottom-main">
            <div className="shipping">
              <FontAwesomeIcon icon={faBoxOpen} className="icon" />
              <h5>Free Shipping</h5>
              <p>
                Enjoy free delivery on all orders above 2500 BDT — bringing your
                favorite perfumes to you at no extra cost.
              </p>
            </div>

            <div className="secure-payments">
              <FontAwesomeIcon icon={faShield} className="icon" />
              <h5>Secure Payments</h5>
              <p>
                Your safety comes first. All transactions are encrypted to
                ensure secure and hassle-free payments every time.
              </p>
            </div>

            <div className="support-customer">
              <FontAwesomeIcon icon={faHeadset} className="icon" />
              <h5>Support Customer</h5>
              <p>
                Your satisfaction is our priority. Our dedicated support team is
                always ready to assist you with any query or concern.
              </p>
            </div>
          </div>
          <div className="last-line"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
