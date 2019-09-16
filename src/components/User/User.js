import React, { Component } from "react";
import Nav from "../PublicJs/Nav";
import "./user.css";
class User extends Component {
  state = {
    isShowtouxiang: false,
    isShowshezhi: false,
    isShowCover: false,
    open1: true,
    open2: false
  };
  changeTouxiang = () => {
    this.setState({
      isShowtouxiang: !this.state.isShowtouxiang
    });
  };
  changeshezhi = () => {
    this.setState({
      isShowshezhi: !this.state.isShowshezhi
    });
  };
  changeIsShowCover = () => {
    this.setState({
      isShowCover: !this.state.isShowCover
    });
  };
  changColor = () => {
    this.setState({
      open1: !this.state.open1
    });
  };
  changColor2 = () => {
    this.setState({
      open2: !this.state.open2
    });
  };
  render() {
    return (
      <div className="user">
        <div className="top">
          <img
            onClick={this.changeTouxiang}
            src="https://dev.tencent.com/u/haidan1025/p/yiji/git/raw/master/52442020-c96f-11e9-9aa6-fb9ccf6266eb.png"
            alt=""
          />
          <div className="position">
            <span>阴雨天</span>
            <div>
              <span>
                关注 <br />
                11
              </span>
              <span>
                发布 <br />9
              </span>
              <span>
                访客 <br />
                49
              </span>
            </div>
          </div>
          <span onClick={this.changeshezhi} className="shezhizi">
            设置
          </span>
        </div>
        <div className="all">
          <span>艺象云集</span>
          <span>All ></span>
        </div>
        <div className="dingyue">
          <div>
            <img
              src="https://dev.tencent.com/u/haidan1025/p/yiji/git/raw/master/a7f9c3e0-c96e-11e9-9aa6-fb9ccf6266eb.png"
              alt=""
            />
            <span>订阅/11</span>
          </div>
          <div>
            <img
              src="https://dev.tencent.com/u/haidan1025/p/yiji/git/raw/master/a8e24f20-c96e-11e9-9aa6-fb9ccf6266eb.png"
              alt=""
            />
            <span>订阅/9</span>
          </div>
          <div>
            <img
              src="https://dev.tencent.com/u/haidan1025/p/yiji/git/raw/master/a8fa1ce0-c96e-11e9-9aa6-fb9ccf6266eb.png"
              alt=""
            />
            <span>订阅/13</span>
          </div>
        </div>
        <div>
          <img
            src="https://dev.tencent.com/u/haidan1025/p/yiji/git/raw/master/d12dfc10-c971-11e9-9aa6-fb9ccf6266eb.jpg"
            alt=""
          />
          <div className="df">
            <div>
              {" "}
              <img
                src="https://dev.tencent.com/u/haidan1025/p/yiji/git/raw/master/a7dee8e0-c96e-11e9-9aa6-fb9ccf6266eb.png"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://dev.tencent.com/u/haidan1025/p/yiji/git/raw/master/a7e2e080-c96e-11e9-9aa6-fb9ccf6266eb.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <Nav />
        <div
          className="touxiang"
          style={{ left: this.state.isShowtouxiang ? "0" : "100vw" }}
        >
          <span onClick={this.changeTouxiang}></span>
          <img
            onClick={this.changeIsShowCover}
            src="https://dev.tencent.com/u/haidan1025/p/yiji/git/raw/master/a7f445a0-c96e-11e9-9aa6-fb9ccf6266eb.png"
            alt=""
          />
        </div>
        <div
          className="shezhi"
          style={{ left: this.state.isShowshezhi ? "0" : "100vw" }}
        >
          <span
            onClick={this.changeshezhi}
            className="iconfont icon-fanhui"
          ></span>
          <div>
            <span
              onClick={this.changColor}
              style={{ color: this.state.open1 ? "red" : "" }}
            >
              开
            </span>
            <span>/</span>
            <span
              onClick={this.changColor}
              style={{ color: !this.state.open1 ? "red" : "" }}
            >
              关
            </span>
          </div>
          <div>
            <span
              onClick={this.changColor2}
              style={{ color: this.state.open2 ? "red" : "" }}
            >
              开
            </span>
            <span>/</span>
            <span
              onClick={this.changColor2}
              style={{ color: !this.state.open2 ? "red" : "" }}
            >
              关
            </span>
          </div>
        </div>
        <div
          className="cover"
          onClick={this.changeIsShowCover}
          style={{ display: this.state.isShowCover ? "block" : "none" }}
        />
        <div
          className="share-to"
          style={{ bottom: this.state.isShowCover ? "0" : "-40vh" }}
        >
          <img
            src="https://dev.tencent.com/u/haidan1025/p/yiji/git/raw/master/1badc9e0-c97d-11e9-9aa6-fb9ccf6266eb.png"
            alt=""
          />
          <span onClick={this.changeIsShowCover}></span>
        </div>
      </div>
    );
  }
}
export default User;
