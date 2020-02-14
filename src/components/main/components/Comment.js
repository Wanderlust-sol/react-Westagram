import React, { Component } from "react";
import "./css/Comment.css";
import "./css/Feed.css";

class Comment extends Component {
  // console.log(this.props.data)
  render() {
    const comments = this.props.data.map((item, index) => {
      return (
        <div className="newDiv" key={index}>
          <span className="name">wanderlust_sol</span>
          <span className="newComment">{item}</span>
          <span className="heartIcon-box">
            <img
              className="heartIcon"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
            />
          </span>
        </div>
      );
    });
    return <div>{comments}</div>;
  }
}

export default Comment;
