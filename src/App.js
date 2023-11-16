import React from "react";
import PostCarousel from "./PostCarousel";
import BlogCard from "./BlogCard";
import FeaturedBlogCard from "./FeaturedBlogCard";
import "./styles/main.css";

function App() {
  return (
    <div className="front-page-container">
      <PostCarousel />
      <div className="mobile-scissors"></div>
      <div className="learn-to-embroider-wrapper">
        <div className="start-here-container">
          <div className="start-here-info">
            <h2>Learn How To Embroider</h2>
            <p>
              New to embroidery? I'm so happy you're here! Get started learning
              all the basics today with a simple step-by-step guide...
            </p>
            <a href="https://crewelghoul.com/how-to-embroider-2/" type="link">
              <button>START HERE</button>
            </a>
          </div>
        </div>
        <div className="contents">
          <div className="image-container">
            <img
              className="scissors"
              src="https://crewelghoul.com/wp-content/uploads/2023/11/hoop-2-e1700101437278.png"
            ></img>
          </div>
        </div>
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
      </div>
      <div className="patreon-container">
        <h2>Monthly Embroidery Patterns And Tutorials</h2>
        <p>
          Join the Patreon community to get embroidery tips, thread painting
          tutorials, and a brand new pattern to stitch up every month.
        </p>
        <a href="https://patreon.com/crewelghoul" target="_blank">
          <button>LEARN MORE</button>
        </a>
      </div>
      <div className="embroidery-stitches-container">
        <div id="embroidery-stitches"></div>
        <div className="info-card">
          <h2>Embroidery Stitches</h2>
          <p>
            From the basics, to more intricate stitches, you'll find all the
            tutorials you need for embroidery stitches here.
          </p>
          <a href="https://crewelghoul.com/hand-embroidery-stitches/">
            <button>Stitch Library</button>
          </a>
        </div>
      </div>
      <div className="styles-of-embroidery-container">
        <div className="styles">
          <h2>Styles of Embroidery</h2>
          <ul>
            <a href="https://crewelghoul.com/blog/category/hand-embroidery/how-to-embroider-for-beginners/">
              <li>Surface</li>
            </a>
            <a href="https://crewelghoul.com/blog/category/cross-stitch/">
              <li>Cross Stitch</li>
            </a>
            <a href="https://crewelghoul.com/blog/category/thread-painting/">
              <li>Thread Painting</li>
            </a>
            <a href="https://crewelghoul.com/blog/category/stumpwork/">
              <li>Stumpwork</li>
            </a>
            <a href="https://crewelghoul.com/blog/category/crewel-work/">
              <li>Crewel Work</li>
            </a>
            <a href="https://crewelghoul.com/blog/category/punch-needle/">
              <li id="bottom-li">Punch Needle</li>
            </a>
          </ul>
        </div>
        <div id="frog-embroidery"></div>
      </div>
    </div>
  );
}

export default App;
