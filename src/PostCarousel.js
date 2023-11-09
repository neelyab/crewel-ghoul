import React from "react";
import { useEffect, useState } from "react";

function PostCarousel() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function loadPosts() {
      const response = await fetch("/wp-json/wp/v2/posts");
      if (!response.ok) {
       console.log(response);
      }

      const posts = await response.json().then((res)=>console.log(res));
      setPosts(posts);
    }

    loadPosts();
  }, []);

  return (
    <div>
      {posts ? posts.map((post, index) => (
        <p>{post.title.rendered}</p>
      )) : ''}
    </div>
  );
}

export default PostCarousel;
