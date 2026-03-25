import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoxOpen,
  faShield,
  faHeadset,
  faAngleLeft,
  faHome,
  faShoppingBasket,
  faShoppingBag,
  faAngleRight,
  faSearch
} from "@fortawesome/free-solid-svg-icons";
import './Blog.css'

const Blog = () => {
  return (
    <div className='blog'>
      <div className="blog-body-left">
        
      </div>

      <div className="blog-body-right">
        <div className="search-div border-div">
          <input type="text" placeholder="Search..." />
          <FontAwesomeIcon icon={faSearch} className = "search-icon" />
        </div>

        <div className="categories border-div">
          <h4>Categories</h4>
          <div className="line"></div>
          <div className="cat-body">
            <FontAwesomeIcon icon={faAngleRight} />
            <span>Blog</span>
            <span>(1)</span>
          </div>
        </div>

        <div className="recent-posts border-div">
          <h4>Recent Posts</h4>
          <div className="line"></div>
          <div className="recent-posts-body">
            <span>সম্মানিত গ্রাহক, ২৭শে মার্চ ২০২৫, দুপুর ২টার পরের অর্ডার ৭ই এপ্রিল ২০২৫ এর পরে ডেলিভারি করা হবে। আপনার সহযোগিতার জন্য ধন্যবাদ। ঈদ মোবারক!</span>
            <span>MARCH 27, 2025</span>
          </div>
        </div>

        <div className="archive border-div">
          <h4>Archives</h4>
          <div className="line"></div>
          <div className="arc-body">
            <FontAwesomeIcon icon={faAngleRight} />
            <span>March 2025</span>
          </div>
        </div>

        <div className="meta border-div">
          <h4>Meta</h4>
          <div className="line"></div>
          <div className="meta-body">
            <div className="meta-one">
              <FontAwesomeIcon icon={faAngleRight} />
              <span>Log in</span>
            </div>

            <div className="meta-one">
              <FontAwesomeIcon icon={faAngleRight} />
              <span>Entries feed</span>
            </div>

            <div className="meta-one">
              <FontAwesomeIcon icon={faAngleRight} />
              <span>Comments feed</span>
            </div>

            <div className="meta-one">
              <FontAwesomeIcon icon={faAngleRight} />
              <span>WordPress.org</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog