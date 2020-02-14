import React, { Component } from "react";
import Comment from "./Comment";
import "../Main.css";
import "./css/Feed.css";

class Feed extends Component {
  constructor() {
    super();
    this.state = {
      comments: "",
      data: []
    };
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.setState({
      data: [...this.state.data, this.state.comments],
      comments: ""
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className="feeds">
        <article className="feeds_list">
          <div>
            <div className="header-profile">
              <span className="header-profile-image">
                <img
                  className="header-profile-photo"
                  src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/68924849_844230532644621_3703998268724740096_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=pb_4OPqJqwwAX-whIM-&oh=4a8cff530ec1b252a34c5e078b5ce09c&oe=5ED13BCE"
                />
              </span>
              <div className="profile-content">
                <span className="header-profile-name name">wanderlust_sol</span>
                <span className="header-profile-where">
                  Golden Circle Iceland
                </span>
              </div>
              <div className="header-dot">
                <img
                  className="dot_image"
                  src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png"
                />
              </div>
            </div>
          </div>
          <div className="feeds_main">
            <img
              className="feeds_main-image"
              src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/e35/53382048_404605393432893_1608514742760826747_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=109&_nc_ohc=l4tu_qMwHRkAX-RPXOL&oh=08aa3048d4b5e90d60f2b49055f91f50&oe=5EBA0C9F"
            />
          </div>
          <div className="feeds_bottom">
            <section className="comment-icon">
              <span className="comment-icon_image1">
                <button className="heart-button" type="button">
                  <img
                    className="heart-button_image"
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                  />
                </button>
              </span>
              <span className="comment-icon_image2">
                <button className="comment-button" type="button">
                  <img
                    className="comment-button_image"
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/comment.png"
                  />
                </button>
              </span>
              <span className="comment-icon_image3">
                <button className="share-button" type="button">
                  <img
                    className="share-button_image"
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/share.png"
                  />
                </button>
              </span>
              <span className="bookmark-icon_image4">
                <button className="bookmark-button" type="button">
                  <img
                    className="bookmark-button_image"
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/bookmark.png"
                  />
                </button>
              </span>
            </section>
            <section className="likes_part">
              <span className="likes-number name">89 likes</span>
            </section>
            <section className="content_part">
              <span className="content_part-name name">wanderlust_sol</span>
              <span className="content_part-contents">
                아이슬란드 1번 국도 위에서 ....
                <span style={{ color: "#999" }}>more</span>
              </span>
              <Comment data={this.state.data}></Comment>
            </section>
            <div className="time_part">
              <span className="time_part-ago bottom-name">2 HOURS AGO</span>
            </div>
            <section className="addcomment">
              <form
                className="addcomment_form"
                onSubmit={
                  this.state.comments !== ""
                    ? this.onSubmit
                    : e => e.preventDefault()
                }
              >
                <textarea
                  className="addcomment_box"
                  name="comments"
                  placeholder="Add a comment..."
                  value={this.state.comments}
                  onChange={this.handleChange}
                  //onKeyPress={this.handleEnterPress}
                ></textarea>
                <button className="post_button" type="submit">
                  Post
                </button>
              </form>
            </section>
          </div>
        </article>
      </div>
    );
  }
}

export default Feed;
