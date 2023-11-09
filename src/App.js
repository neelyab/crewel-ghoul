import React from "react";
import PostCarousel from "./PostCarousel";
import BlogCard from "./BlogCard";
import FeaturedBlogCard from "./FeaturedBlogCard";
import "./styles/main.css";

function App() {
  return (
    <div className="front-page-container">
      <PostCarousel />
      <div className="learn-to-embroider">
        <div className="info-box"></div>
        <div className="parallax"></div>
      </div>
      <div className="popular-tutorials">
        <h2>Popular Tutorials</h2>
        <div className="post-container">
          <FeaturedBlogCard
            img="https://crewelghoul.com/wp-content/uploads/2022/07/butterfly-embroidery-1-768x768.jpg.webp"
            link="https://crewelghoul.com/blog/embroidery-tricks/"
            title="9 Hand Embroidery Tricks To Save You Time And Frustration"
          />
          <div className="blog-card-container">
            <BlogCard
              img="https://crewelghoul.com/wp-content/uploads/2023/11/5828218077959188444_IMG_4247-scaled-2-e1699569107811.webp"
              link="https://crewelghoul.com/blog/how-to-embroider-clothes/"
              title="How To Embroider On Clothes"
            />
              <BlogCard
              img="https://crewelghoul.com/wp-content/uploads/2021/05/IMG_6656-scaled-scaled.jpg.webp"
              link="https://crewelghoul.com/blog/embroider-letters-by-hand/"
              title="How To Embroider Letters By Hand"
            />
              <BlogCard
              img="https://crewelghoul.com/wp-content/uploads/2021/07/lexi-t-g8VPCuu31c8-unsplash-1440x957.jpg.webp"
              link="https://crewelghoul.com/blog/how-to-cross-stitch-neatly-quick-and-helpful-tips/"
              title="How To Cross Stitch Neatly"
            />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default App;
