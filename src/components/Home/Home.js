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
        "https://dev.tencent.com/u/haidan1025/p/yiji/git/raw/master/5526e850-c58b-11e9-81af-e1f3ecba4e26.jpg",
        "https://dev.tencent.com/u/haidan1025/p/yiji/git/raw/master/552d7800-c58b-11e9-81af-e1f3ecba4e26.jpg",
        "https://dev.tencent.com/u/haidan1025/p/yiji/git/raw/master/5539ad00-c58b-11e9-81af-e1f3ecba4e26.jpg"
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
        "https://dev.tencent.com/u/haidan1025/p/yiji/git/raw/master/8bbe1930-c58e-11e9-8948-0728598063e4.jpg",
        "https://dev.tencent.com/u/haidan1025/p/yiji/git/raw/master/8bc963d0-c58e-11e9-8948-0728598063e4.jpg",
        "https://dev.tencent.com/u/haidan1025/p/yiji/git/raw/master/8bbe1930-c58e-11e9-8948-0728598063e4.jpg",
        "https://dev.tencent.com/u/haidan1025/p/yiji/git/raw/master/8bc963d0-c58e-11e9-8948-0728598063e4.jpg",
        "https://dev.tencent.com/u/haidan1025/p/yiji/git/raw/master/8bbe1930-c58e-11e9-8948-0728598063e4.jpg",
        "https://dev.tencent.com/u/haidan1025/p/yiji/git/raw/master/8bc963d0-c58e-11e9-8948-0728598063e4.jpg"
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
                src="https://dev.tencent.com/u/haidan1025/p/yiji/git/raw/master/30966a30-c62e-11e9-99fa-d9b98f91f971.jpg"
                alt=""
              />
              <span className="to-will" onClick={this.toWill} />
              <div>{showNowList}</div>
            </div>
            <div className="will">
              <img
                className="show-top"
                src="https://dev.tencent.com/u/haidan1025/p/yiji/git/raw/master/309b9a50-c62e-11e9-99fa-d9b98f91f971.jpg"
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
