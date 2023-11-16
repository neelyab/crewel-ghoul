import React from "react";

class PostCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      posts: [],
      url: "",
      title: "",
      date: "",
      postLink: "",
      hasError: false,
    };
  }
  async loadPosts() {
    const response = await fetch("/wp-json/wp/v2/posts?_embed&per_page=4");
    if (!response.ok) {
      this.setState({ hasError: true });
    }
    const posts = await response.json();
    console.log(posts);
    return posts;
  }
  nextPost = () => {
    let numPosts = this.state.posts.length - 1;
    if (this.state.count < numPosts) {
      this.setState({ count: (this.state.count += 1) });
      this.updateUrl();
      this.updatePostInfo();
    } else if (this.state.count == numPosts) {
      this.setState({ count: (this.state.count -= numPosts) });
      this.updateUrl();
      this.updatePostInfo();
    }
  };
  previousPost = () => {
    let numPosts = this.state.posts.length - 1;
    if (this.state.count > 0) {
      this.setState({ count: (this.state.count -= 1) });
      this.updateUrl();
      this.updatePostInfo();
    } else if (this.state.count == 0) {
      this.setState({ count: (this.state.count += numPosts) });
      this.updateUrl();
      this.updatePostInfo();
    }
  };
  updateUrl() {
    if (this.state.posts[this.state.count]["_embedded"]["wp:featuredmedia"]) {
      this.setState({
        url: this.state.posts[this.state.count]["_embedded"][
          "wp:featuredmedia"
        ][0].source_url,
      });
    } else {
      this.setState({ url: "null" });
    }
  }
  updatePostInfo() {
    // format date
    let localeString = new Date(
      this.state.posts[this.state.count].date
    ).toLocaleDateString();
    
    //format apostrophes 
    let blogTitle = this.state.posts[this.state.count].title.rendered;
    blogTitle = blogTitle.replace(/&#8217;/g, "'");


    this.setState({
      title: blogTitle,
      date: localeString,
      postLink: this.state.posts[this.state.count].link,
    });
  }
  componentDidMount() {
    this.loadPosts().then((posts) => {
      this.setState({ posts: [...posts] });
      this.updateUrl();
      this.updatePostInfo();
    });
  }

  render() {
    if (this.state.hasError) {
      return <span>Something went wrong.</span>;
    }
    return (
      <div>
        {this.state.posts ? (
          <div className="post-carousel-container">
            <div className="recent-post-image">
              {this.state.url != "null" ? (
                <div
                  className="post-image"
                  id="fade-in-animation"
                  style={{ backgroundImage: `url(${this.state.url})` }}
                  alt={this.state.title}
                ></div>
              ) : (
                <div
                  className="post-image"
                  style={{ backgroundColor: "#F8EDEB" }}
                ></div>
              )}
              <i
                class="fa-solid fa-chevron-left --fa-border-color"
                id="chevron-left"
                onClick={() => this.previousPost()}
              ></i>
              <i
                class="fa-solid fa-chevron-right --fa-border-color"
                id="chevron-right"
                onClick={() => this.nextPost()}
              ></i>
            </div>
            <div className="recent-post-info">
              <span className="date-banner">{this.state.date}</span>
              <h3>{this.state.title}</h3>
              <a href={this.state.postLink}>
                <button>READ MORE</button>
              </a>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default PostCarousel;
