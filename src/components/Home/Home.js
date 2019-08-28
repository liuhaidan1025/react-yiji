import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./home.css";
import Search from "../PublicJs/Search";
import Nav from "../PublicJs/Nav";
import MySwiper from "../PublicJs/MySwiper";
import { connect } from "react-redux";
import { isGood } from "../../store/selectors";
class Home extends Component {
  state = {
    mLeft: "0"
  };
  toWill = () => {
    this.setState({
      mLeft: "-100vw"
    });
  };
  toNow = () => {
    this.setState({
      mLeft: "0"
    });
  };
  render() {
    const swiperOne = {
      pics: [
        "https://coding-net-production-file-ci.codehub.cn/5539ad00-c58b-11e9-81af-e1f3ecba4e26.jpg?sign=KDueHdZPmkj9hpCDmrH1H0nzRZhhPTEyNTcyNDI1OTkmaz1BS0lEYXk4M2xGbWFTNlk0TFRkek1WTzFTZFpPeUpTTk9ZcHImZT0xNTY2NzY5Nzg2JnQ9MTU2NjU1Mzc4NiZyPTg5ODc1OTY1JmY9LzU1MzlhZDAwLWM1OGItMTFlOS04MWFmLWUxZjNlY2JhNGUyNi5qcGcmYj1jb2RpbmctbmV0LXByb2R1Y3Rpb24tZmlsZQ==",
        "https://coding-net-production-file-ci.codehub.cn/5526e850-c58b-11e9-81af-e1f3ecba4e26.jpg?sign=2TltL2m+2OIrJ0bjkYClzeoybKthPTEyNTcyNDI1OTkmaz1BS0lEYXk4M2xGbWFTNlk0TFRkek1WTzFTZFpPeUpTTk9ZcHImZT0xNTY2NzY5ODE1JnQ9MTU2NjU1MzgxNSZyPTYwNjg3OTExJmY9LzU1MjZlODUwLWM1OGItMTFlOS04MWFmLWUxZjNlY2JhNGUyNi5qcGcmYj1jb2RpbmctbmV0LXByb2R1Y3Rpb24tZmlsZQ==",
        "https://coding-net-production-file-ci.codehub.cn/552d7800-c58b-11e9-81af-e1f3ecba4e26.jpg?sign=rjJ78G+Qp0hA3gPa6ohR6rUi8SVhPTEyNTcyNDI1OTkmaz1BS0lEYXk4M2xGbWFTNlk0TFRkek1WTzFTZFpPeUpTTk9ZcHImZT0xNTY2NzY5ODMzJnQ9MTU2NjU1MzgzMyZyPTI5NTM1NjExJmY9LzU1MmQ3ODAwLWM1OGItMTFlOS04MWFmLWUxZjNlY2JhNGUyNi5qcGcmYj1jb2RpbmctbmV0LXByb2R1Y3Rpb24tZmlsZQ=="
      ],
      loop: true,
      direction: "horizontal",
      width: "100vw",
      height: "29vh",
      slidesPerView: 1,
      className: "swiperOne",
      pagination: {
        el: ".swiper-pagination"
      },
      spaceBetween: 0,
      autoplay: true
    };
    const swiperTwo = {
      pics: [
        "https://coding-net-production-file-ci.codehub.cn/8bbe1930-c58e-11e9-8948-0728598063e4.jpg?sign=yKu0Ld/pfhEI5V5Dp6hF1X0AsDVhPTEyNTcyNDI1OTkmaz1BS0lEYXk4M2xGbWFTNlk0TFRkek1WTzFTZFpPeUpTTk9ZcHImZT0xNTY2NzcxMTc0JnQ9MTU2NjU1NTE3NCZyPTk1Mjk4MTQmZj0vOGJiZTE5MzAtYzU4ZS0xMWU5LTg5NDgtMDcyODU5ODA2M2U0LmpwZyZiPWNvZGluZy1uZXQtcHJvZHVjdGlvbi1maWxl",
        "https://coding-net-production-file-ci.codehub.cn/8bc963d0-c58e-11e9-8948-0728598063e4.jpg?sign=lSV8TEkbYyyu6BVYtJFGlpH4gLZhPTEyNTcyNDI1OTkmaz1BS0lEYXk4M2xGbWFTNlk0TFRkek1WTzFTZFpPeUpTTk9ZcHImZT0xNTY2NzcxMjAzJnQ9MTU2NjU1NTIwMyZyPTk1NzcxJmY9LzhiYzk2M2QwLWM1OGUtMTFlOS04OTQ4LTA3Mjg1OTgwNjNlNC5qcGcmYj1jb2RpbmctbmV0LXByb2R1Y3Rpb24tZmlsZQ==",
        "https://coding-net-production-file-ci.codehub.cn/8bbe1930-c58e-11e9-8948-0728598063e4.jpg?sign=yKu0Ld/pfhEI5V5Dp6hF1X0AsDVhPTEyNTcyNDI1OTkmaz1BS0lEYXk4M2xGbWFTNlk0TFRkek1WTzFTZFpPeUpTTk9ZcHImZT0xNTY2NzcxMTc0JnQ9MTU2NjU1NTE3NCZyPTk1Mjk4MTQmZj0vOGJiZTE5MzAtYzU4ZS0xMWU5LTg5NDgtMDcyODU5ODA2M2U0LmpwZyZiPWNvZGluZy1uZXQtcHJvZHVjdGlvbi1maWxl",
        "https://coding-net-production-file-ci.codehub.cn/8bc963d0-c58e-11e9-8948-0728598063e4.jpg?sign=lSV8TEkbYyyu6BVYtJFGlpH4gLZhPTEyNTcyNDI1OTkmaz1BS0lEYXk4M2xGbWFTNlk0TFRkek1WTzFTZFpPeUpTTk9ZcHImZT0xNTY2NzcxMjAzJnQ9MTU2NjU1NTIwMyZyPTk1NzcxJmY9LzhiYzk2M2QwLWM1OGUtMTFlOS04OTQ4LTA3Mjg1OTgwNjNlNC5qcGcmYj1jb2RpbmctbmV0LXByb2R1Y3Rpb24tZmlsZQ==",
        "https://coding-net-production-file-ci.codehub.cn/8bbe1930-c58e-11e9-8948-0728598063e4.jpg?sign=yKu0Ld/pfhEI5V5Dp6hF1X0AsDVhPTEyNTcyNDI1OTkmaz1BS0lEYXk4M2xGbWFTNlk0TFRkek1WTzFTZFpPeUpTTk9ZcHImZT0xNTY2NzcxMTc0JnQ9MTU2NjU1NTE3NCZyPTk1Mjk4MTQmZj0vOGJiZTE5MzAtYzU4ZS0xMWU5LTg5NDgtMDcyODU5ODA2M2U0LmpwZyZiPWNvZGluZy1uZXQtcHJvZHVjdGlvbi1maWxl",
        "https://coding-net-production-file-ci.codehub.cn/8bc963d0-c58e-11e9-8948-0728598063e4.jpg?sign=lSV8TEkbYyyu6BVYtJFGlpH4gLZhPTEyNTcyNDI1OTkmaz1BS0lEYXk4M2xGbWFTNlk0TFRkek1WTzFTZFpPeUpTTk9ZcHImZT0xNTY2NzcxMjAzJnQ9MTU2NjU1NTIwMyZyPTk1NzcxJmY9LzhiYzk2M2QwLWM1OGUtMTFlOS04OTQ4LTA3Mjg1OTgwNjNlNC5qcGcmYj1jb2RpbmctbmV0LXByb2R1Y3Rpb24tZmlsZQ=="
      ],
      loop: true,
      direction: "horizontal",
      width: "100vw",
      height: "17vh",
      slidesPerView: 2.5,
      className: "swiperTwo",
      pagination: {},
      spaceBetween: 5,
      autoplay: false
    };
    const { show } = this.props;
    console.log(show);
    const showNowList = show
      .filter(ele => ele.type === "now")
      .map(item => (
        <div className="pos" key={item.id}>
          <Link to={`/show/${item.id}`}>
            <img className="show-pic" src={item.img} alt="" />
          </Link>
          <span className="time">剩余{item.times}天</span>
          <div className="bottom">
            <span className="iconfont icon-fenxiang" />
            <span
              className={
                isGood(show, item.id)
                  ? "iconfont icon-bqxin red"
                  : "iconfont icon-bqxin"
              }
            />
            <span>&nbsp;{item.goods}</span>
            <span className="iconfont icon-guanzhu" />
            <span>&nbsp;{item.follow}</span>
            <span className="iconfont icon-message" />
            <span>&nbsp;{item.reply}</span>
          </div>
        </div>
      ));
    const showWillList = show
      .filter(ele => ele.type === "will")
      .map(item => (
        <div className="pos" key={item.id}>
          <img className="show-pic" src={item.img} alt="" />
          <span className="time">剩余{item.times}天</span>
          <div className="bottom">
            <span className="iconfont icon-fenxiang" />
            <span
              className={
                isGood(show, item.id)
                  ? "iconfont icon-bqxin red"
                  : "iconfont icon-bqxin"
              }
            />
            <span>&nbsp;{item.goods}</span>
            <span className="iconfont icon-guanzhu" />
            <span>&nbsp;{item.follow}</span>
            <span className="iconfont icon-message" />
            <span>&nbsp;{item.reply}</span>
          </div>
        </div>
      ));
    return (
      <div className="home">
        <Search />
        <MySwiper {...swiperOne} />
        <MySwiper {...swiperTwo} />
        <div className="show-container">
          <div
            className="show-wrapper"
            style={{ marginLeft: this.state.mLeft }}
          >
            <div className="now">
              <img
                className="show-top"
                src="https://coding-net-production-file-ci.codehub.cn/30966a30-c62e-11e9-99fa-d9b98f91f971.jpg?sign=uHKlD3zKRkSSijVdD6cBQliEzU9hPTEyNTcyNDI1OTkmaz1BS0lEYXk4M2xGbWFTNlk0TFRkek1WTzFTZFpPeUpTTk9ZcHImZT0xNTY2ODM5NzM2JnQ9MTU2NjYyMzczNiZyPTc2Mzc0MjM3JmY9LzMwOTY2YTMwLWM2MmUtMTFlOS05OWZhLWQ5Yjk4ZjkxZjk3MS5qcGcmYj1jb2RpbmctbmV0LXByb2R1Y3Rpb24tZmlsZQ=="
                alt=""
              />
              <span className="to-will" onClick={this.toWill} />
              <div>{showNowList}</div>
            </div>
            <div className="will">
              <img
                className="show-top"
                src="https://coding-net-production-file-ci.codehub.cn/309b9a50-c62e-11e9-99fa-d9b98f91f971.jpg?sign=s0iQKaRACoedvyEwFOO+uLLIBoFhPTEyNTcyNDI1OTkmaz1BS0lEYXk4M2xGbWFTNlk0TFRkek1WTzFTZFpPeUpTTk9ZcHImZT0xNTY2ODQxNTc2JnQ9MTU2NjYyNTU3NiZyPTI3NjM0OTE0JmY9LzMwOWI5YTUwLWM2MmUtMTFlOS05OWZhLWQ5Yjk4ZjkxZjk3MS5qcGcmYj1jb2RpbmctbmV0LXByb2R1Y3Rpb24tZmlsZQ=="
                alt=""
              />
              <span className="to-now" onClick={this.toNow} />
              <div>{showWillList}</div>
            </div>
          </div>
        </div>
        <Nav />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    show: state.show.show
  };
};
export default connect(mapStateToProps)(Home);
