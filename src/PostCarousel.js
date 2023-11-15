import React from "react";

class PostCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      posts: [],
      url: "",
      title: "",
      hasError: false
    };
  }
  async loadPosts() {
    const response = await fetch("/wp-json/wp/v2/posts?_embed&per_page=4");
    if (!response.ok) {
      this.setState({hasError: true})
    }

    const posts = await response.json();
    return posts;
  }
  changePost = () => {
    let numPosts = this.state.posts.length - 1;
    if (this.state.count < numPosts) {
      this.setState({ count: (this.state.count += 1) });
      this.updateUrl();
      this.updateTitle();
    } else if (this.state.count == numPosts) {
      this.setState({ count: (this.state.count -= numPosts) });
      this.updateUrl();
      this.updateTitle();
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
  updateTitle() {
    this.setState({ title: this.state.posts[this.state.count].title.rendered });
  }
  componentDidMount() {
    this.loadPosts().then((posts) => {
      this.setState({ posts: [...posts] });
      this.updateUrl();
      this.updateTitle();
    });
  }

  render() {
    if (this.state.hasError) {
      return <span>Something went wrong.</span>;
    }
    return (
      <div>
        {this.state.posts ? (
          <>
            <div className="recent-post-image">
              {this.state.url != "null" ? <img src={this.state.url}></img> : ""}
            </div>
            <div className="recent-post-info">
              <h3>{this.state.title}</h3>
            </div>
          </>
        ) : (
          ""
        )}
        <button className="arrow" onClick={() => this.changePost()}>
          click
        </button>
      </div>
    );
  }
}

export default PostCarousel;
