import React, { Component } from "react";
import Search from "../PublicJs/Search";
import Nav from "../PublicJs/Nav";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./recommend.css";
import { isGood } from "../../store/selectors";
class Recommend extends Component {
  state = {
    mLeft: "0"
  };
  toWen = () => {
    this.setState({
      mLeft: "-100vw"
    });
  };
  toZhan = () => {
    this.setState({
      mLeft: "0"
    });
  };
  render() {
    const { show } = this.props;
    console.log(show);
    const showZhanList = show
      .filter(ele => ele.styleType === "zhan")
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
    const showWenList = show
      .filter(ele => ele.styleType === "wen")
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
      <div className="recommend">
        <Search />
        <div className="show-container">
          <div
            className="show-wrapper"
            style={{ marginLeft: this.state.mLeft }}
          >
            <div className="now">
              <img
                className="show-top"
                src="https://dev.tencent.com/u/haidan1025/p/yiji/git/raw/master/444bb8a0-c7d7-11e9-9734-27c7b226d101.jpg"
                alt=""
              />
              <span className="to-will" onClick={this.toWen} />
              <div>{showZhanList}</div>
            </div>
            <div className="will">
              <img
                className="show-top"
                src="https://dev.tencent.com/u/haidan1025/p/yiji/git/raw/master/444ddb80-c7d7-11e9-9734-27c7b226d101.jpg"
                alt=""
              />
              <span className="to-now" onClick={this.toZhan} />
              <div>{showWenList}</div>
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
export default connect(mapStateToProps)(Recommend);
