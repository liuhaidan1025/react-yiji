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
        "https://coding-net-production-file-ci.codehub.cn/5539ad00-c58b-11e9-81af-e1f3ecba4e26.jpg?sign=GqMvQ3g/nH7os3rnz79a/dL9UHRhPTEyNTcyNDI1OTkmaz1BS0lEYXk4M2xGbWFTNlk0TFRkek1WTzFTZFpPeUpTTk9ZcHImZT0xNTY3MjYxMTY4JnQ9MTU2NzA0NTE2OCZyPTgzMjQwOTg4JmY9LzU1MzlhZDAwLWM1OGItMTFlOS04MWFmLWUxZjNlY2JhNGUyNi5qcGcmYj1jb2RpbmctbmV0LXByb2R1Y3Rpb24tZmlsZQ==",
        "https://coding-net-production-file-ci.codehub.cn/5526e850-c58b-11e9-81af-e1f3ecba4e26.jpg?sign=Um+znywnp6+SwlYo+MHLReLwQM9hPTEyNTcyNDI1OTkmaz1BS0lEYXk4M2xGbWFTNlk0TFRkek1WTzFTZFpPeUpTTk9ZcHImZT0xNTY3MjYxMTgyJnQ9MTU2NzA0NTE4MiZyPTg4Mzg2OTAwJmY9LzU1MjZlODUwLWM1OGItMTFlOS04MWFmLWUxZjNlY2JhNGUyNi5qcGcmYj1jb2RpbmctbmV0LXByb2R1Y3Rpb24tZmlsZQ==",
        "https://coding-net-production-file-ci.codehub.cn/552d7800-c58b-11e9-81af-e1f3ecba4e26.jpg?sign=LIx3kZqJNHwc6JlmKWIVdF5CK9phPTEyNTcyNDI1OTkmaz1BS0lEYXk4M2xGbWFTNlk0TFRkek1WTzFTZFpPeUpTTk9ZcHImZT0xNTY3MjYxMTk2JnQ9MTU2NzA0NTE5NiZyPTIzNTExNzEwJmY9LzU1MmQ3ODAwLWM1OGItMTFlOS04MWFmLWUxZjNlY2JhNGUyNi5qcGcmYj1jb2RpbmctbmV0LXByb2R1Y3Rpb24tZmlsZQ=="
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
        "https://coding-net-production-file-ci.codehub.cn/8bbe1930-c58e-11e9-8948-0728598063e4.jpg?sign=XMokfonksQ2lSVZRNHaB1Qstm8NhPTEyNTcyNDI1OTkmaz1BS0lEYXk4M2xGbWFTNlk0TFRkek1WTzFTZFpPeUpTTk9ZcHImZT0xNTY3MjYxMjM4JnQ9MTU2NzA0NTIzOCZyPTY2MDQyODIwJmY9LzhiYmUxOTMwLWM1OGUtMTFlOS04OTQ4LTA3Mjg1OTgwNjNlNC5qcGcmYj1jb2RpbmctbmV0LXByb2R1Y3Rpb24tZmlsZQ==",
        "https://coding-net-production-file-ci.codehub.cn/8bc963d0-c58e-11e9-8948-0728598063e4.jpg?sign=JzWBgrZDz0hyr2IvNknBDv1IZ+thPTEyNTcyNDI1OTkmaz1BS0lEYXk4M2xGbWFTNlk0TFRkek1WTzFTZFpPeUpTTk9ZcHImZT0xNTY3MjYxMjU3JnQ9MTU2NzA0NTI1NyZyPTg4NjQxNzYwJmY9LzhiYzk2M2QwLWM1OGUtMTFlOS04OTQ4LTA3Mjg1OTgwNjNlNC5qcGcmYj1jb2RpbmctbmV0LXByb2R1Y3Rpb24tZmlsZQ==",
        "https://coding-net-production-file-ci.codehub.cn/8bbe1930-c58e-11e9-8948-0728598063e4.jpg?sign=XMokfonksQ2lSVZRNHaB1Qstm8NhPTEyNTcyNDI1OTkmaz1BS0lEYXk4M2xGbWFTNlk0TFRkek1WTzFTZFpPeUpTTk9ZcHImZT0xNTY3MjYxMjM4JnQ9MTU2NzA0NTIzOCZyPTY2MDQyODIwJmY9LzhiYmUxOTMwLWM1OGUtMTFlOS04OTQ4LTA3Mjg1OTgwNjNlNC5qcGcmYj1jb2RpbmctbmV0LXByb2R1Y3Rpb24tZmlsZQ==",
        "https://coding-net-production-file-ci.codehub.cn/8bc963d0-c58e-11e9-8948-0728598063e4.jpg?sign=JzWBgrZDz0hyr2IvNknBDv1IZ+thPTEyNTcyNDI1OTkmaz1BS0lEYXk4M2xGbWFTNlk0TFRkek1WTzFTZFpPeUpTTk9ZcHImZT0xNTY3MjYxMjU3JnQ9MTU2NzA0NTI1NyZyPTg4NjQxNzYwJmY9LzhiYzk2M2QwLWM1OGUtMTFlOS04OTQ4LTA3Mjg1OTgwNjNlNC5qcGcmYj1jb2RpbmctbmV0LXByb2R1Y3Rpb24tZmlsZQ==",
        "https://coding-net-production-file-ci.codehub.cn/8bbe1930-c58e-11e9-8948-0728598063e4.jpg?sign=XMokfonksQ2lSVZRNHaB1Qstm8NhPTEyNTcyNDI1OTkmaz1BS0lEYXk4M2xGbWFTNlk0TFRkek1WTzFTZFpPeUpTTk9ZcHImZT0xNTY3MjYxMjM4JnQ9MTU2NzA0NTIzOCZyPTY2MDQyODIwJmY9LzhiYmUxOTMwLWM1OGUtMTFlOS04OTQ4LTA3Mjg1OTgwNjNlNC5qcGcmYj1jb2RpbmctbmV0LXByb2R1Y3Rpb24tZmlsZQ==",
        "https://coding-net-production-file-ci.codehub.cn/8bc963d0-c58e-11e9-8948-0728598063e4.jpg?sign=JzWBgrZDz0hyr2IvNknBDv1IZ+thPTEyNTcyNDI1OTkmaz1BS0lEYXk4M2xGbWFTNlk0TFRkek1WTzFTZFpPeUpTTk9ZcHImZT0xNTY3MjYxMjU3JnQ9MTU2NzA0NTI1NyZyPTg4NjQxNzYwJmY9LzhiYzk2M2QwLWM1OGUtMTFlOS04OTQ4LTA3Mjg1OTgwNjNlNC5qcGcmYj1jb2RpbmctbmV0LXByb2R1Y3Rpb24tZmlsZQ=="
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
                src="https://coding-net-production-file-ci.codehub.cn/30966a30-c62e-11e9-99fa-d9b98f91f971.jpg?sign=oVT29lcxsEomdh+RDdS7VIAQtJVhPTEyNTcyNDI1OTkmaz1BS0lEYXk4M2xGbWFTNlk0TFRkek1WTzFTZFpPeUpTTk9ZcHImZT0xNTY3MjYxNDMzJnQ9MTU2NzA0NTQzMyZyPTE0MzE1MDYyJmY9LzMwOTY2YTMwLWM2MmUtMTFlOS05OWZhLWQ5Yjk4ZjkxZjk3MS5qcGcmYj1jb2RpbmctbmV0LXByb2R1Y3Rpb24tZmlsZQ=="
                alt=""
              />
              <span className="to-will" onClick={this.toWill} />
              <div>{showNowList}</div>
            </div>
            <div className="will">
              <img
                className="show-top"
                src="https://coding-net-production-file-ci.codehub.cn/309b9a50-c62e-11e9-99fa-d9b98f91f971.jpg?sign=Z9E24IdXM6MmwvUX3MXAm8/nTwphPTEyNTcyNDI1OTkmaz1BS0lEYXk4M2xGbWFTNlk0TFRkek1WTzFTZFpPeUpTTk9ZcHImZT0xNTY3MjYxNDYwJnQ9MTU2NzA0NTQ2MCZyPTQ1NjE2NjgyJmY9LzMwOWI5YTUwLWM2MmUtMTFlOS05OWZhLWQ5Yjk4ZjkxZjk3MS5qcGcmYj1jb2RpbmctbmV0LXByb2R1Y3Rpb24tZmlsZQ=="
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
