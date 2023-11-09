import React from "react";

function FeaturedBlogCard(props) {
  return (
    <div className="featured-blog-card">
      <div className="featured-blog-card-img">
        <img alt={props.title} src={props.img}></img>
      </div>
      <div className="featured-blog-info">
        <a href={props.link}>
          <span className="featured-blog-card-title">{props.title}</span>
        </a>
      </div>
    </div>
  );
}

export default FeaturedBlogCard;
