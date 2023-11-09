import React from "react";

function BlogCard(props) {
  return (
    <div className="blog-card">
      <div className="blog-card-img">
        <img alt={props.title} src={props.img}></img>
      </div>
      <div className="blog-info">
        <a href={props.link}>
          <span className="blog-card-title">{props.title}</span>
        </a>
      </div>
    </div>
  );
}

export default BlogCard;
