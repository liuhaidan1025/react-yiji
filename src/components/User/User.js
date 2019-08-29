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
            src="https://coding-net-production-file-ci.codehub.cn/52442020-c96f-11e9-9aa6-fb9ccf6266eb.png?sign=nvThOCdt9LERv48UnkAktfui5sxhPTEyNTcyNDI1OTkmaz1BS0lEYXk4M2xGbWFTNlk0TFRkek1WTzFTZFpPeUpTTk9ZcHImZT0xNTY3MTk3NTY0JnQ9MTU2Njk4MTU2NCZyPTcwMTM2NTQ1JmY9LzUyNDQyMDIwLWM5NmYtMTFlOS05YWE2LWZiOWNjZjYyNjZlYi5wbmcmYj1jb2RpbmctbmV0LXByb2R1Y3Rpb24tZmlsZQ=="
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
          <span onClick={this.changeshezhi} className="shezhi">
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
              src="https://coding-net-production-file-ci.codehub.cn/a7f9c3e0-c96e-11e9-9aa6-fb9ccf6266eb.png?sign=+5wxfn1BaLcRf7/8xTTeUPbQwAxhPTEyNTcyNDI1OTkmaz1BS0lEYXk4M2xGbWFTNlk0TFRkek1WTzFTZFpPeUpTTk9ZcHImZT0xNTY3MTk4MjE1JnQ9MTU2Njk4MjIxNSZyPTM4MzIyNTI1JmY9L2E3ZjljM2UwLWM5NmUtMTFlOS05YWE2LWZiOWNjZjYyNjZlYi5wbmcmYj1jb2RpbmctbmV0LXByb2R1Y3Rpb24tZmlsZQ=="
              alt=""
            />
            <span>订阅/11</span>
          </div>
          <div>
            <img
              src="https://coding-net-production-file-ci.codehub.cn/a8e24f20-c96e-11e9-9aa6-fb9ccf6266eb.png?sign=eDOYMMfTqlyFZMK6sg8SGA6lFv1hPTEyNTcyNDI1OTkmaz1BS0lEYXk4M2xGbWFTNlk0TFRkek1WTzFTZFpPeUpTTk9ZcHImZT0xNTY3MTk4MjMxJnQ9MTU2Njk4MjIzMSZyPTM0MDcwODkmZj0vYThlMjRmMjAtYzk2ZS0xMWU5LTlhYTYtZmI5Y2NmNjI2NmViLnBuZyZiPWNvZGluZy1uZXQtcHJvZHVjdGlvbi1maWxl"
              alt=""
            />
            <span>订阅/9</span>
          </div>
          <div>
            <img
              src="https://coding-net-production-file-ci.codehub.cn/a8fa1ce0-c96e-11e9-9aa6-fb9ccf6266eb.png?sign=yJKoHiIjmIkiBUhcQZlNh43OZIFhPTEyNTcyNDI1OTkmaz1BS0lEYXk4M2xGbWFTNlk0TFRkek1WTzFTZFpPeUpTTk9ZcHImZT0xNTY3MTk4MjQ5JnQ9MTU2Njk4MjI0OSZyPTg3MTQzNzk5JmY9L2E4ZmExY2UwLWM5NmUtMTFlOS05YWE2LWZiOWNjZjYyNjZlYi5wbmcmYj1jb2RpbmctbmV0LXByb2R1Y3Rpb24tZmlsZQ=="
              alt=""
            />
            <span>订阅/13</span>
          </div>
        </div>
        <div>
          <img
            src="https://coding-net-production-file-ci.codehub.cn/d12dfc10-c971-11e9-9aa6-fb9ccf6266eb.jpg?sign=hGbJQ0wNmb60sV0fRZcGyr1NLVVhPTEyNTcyNDI1OTkmaz1BS0lEYXk4M2xGbWFTNlk0TFRkek1WTzFTZFpPeUpTTk9ZcHImZT0xNTY3MTk4NjMxJnQ9MTU2Njk4MjYzMSZyPTExNTk5NDQ1JmY9L2QxMmRmYzEwLWM5NzEtMTFlOS05YWE2LWZiOWNjZjYyNjZlYi5qcGcmYj1jb2RpbmctbmV0LXByb2R1Y3Rpb24tZmlsZQ=="
            alt=""
          />
          <div className="df">
            <div>
              {" "}
              <img
                src="https://coding-net-production-file-ci.codehub.cn/a7dee8e0-c96e-11e9-9aa6-fb9ccf6266eb.png?sign=1lfAMbUqLhMUbwV0nEBUJHOJRSRhPTEyNTcyNDI1OTkmaz1BS0lEYXk4M2xGbWFTNlk0TFRkek1WTzFTZFpPeUpTTk9ZcHImZT0xNTY3MTk4NzEyJnQ9MTU2Njk4MjcxMiZyPTI2Njg4MTYwJmY9L2E3ZGVlOGUwLWM5NmUtMTFlOS05YWE2LWZiOWNjZjYyNjZlYi5wbmcmYj1jb2RpbmctbmV0LXByb2R1Y3Rpb24tZmlsZQ=="
                alt=""
              />
            </div>
            <div>
              <img
                src="https://coding-net-production-file-ci.codehub.cn/a7e2e080-c96e-11e9-9aa6-fb9ccf6266eb.png?sign=PS0DyKCYXlTULIEEIE5Ckt2w3sNhPTEyNTcyNDI1OTkmaz1BS0lEYXk4M2xGbWFTNlk0TFRkek1WTzFTZFpPeUpTTk9ZcHImZT0xNTY3MTk4NzI4JnQ9MTU2Njk4MjcyOCZyPTYzNzc3MDk5JmY9L2E3ZTJlMDgwLWM5NmUtMTFlOS05YWE2LWZiOWNjZjYyNjZlYi5wbmcmYj1jb2RpbmctbmV0LXByb2R1Y3Rpb24tZmlsZQ=="
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
          {/* <img
            src="https://coding-net-production-file-ci.codehub.cn/782e9240-c977-11e9-9aa6-fb9ccf6266eb.jpg?sign=Deky695cP1o/XtEVnWE6AvoLiiFhPTEyNTcyNDI1OTkmaz1BS0lEYXk4M2xGbWFTNlk0TFRkek1WTzFTZFpPeUpTTk9ZcHImZT0xNTY3MjAxMDYyJnQ9MTU2Njk4NTA2MiZyPTE3ODkxNTU5JmY9Lzc4MmU5MjQwLWM5NzctMTFlOS05YWE2LWZiOWNjZjYyNjZlYi5qcGcmYj1jb2RpbmctbmV0LXByb2R1Y3Rpb24tZmlsZQ=="
            alt=""
          /> */}
          <span onClick={this.changeTouxiang}></span>
          <img
            onClick={this.changeIsShowCover}
            src="https://coding-net-production-file-ci.codehub.cn/a7f445a0-c96e-11e9-9aa6-fb9ccf6266eb.png?sign=rcx1mERGUTW5QrBlDDYCeJ/YHGxhPTEyNTcyNDI1OTkmaz1BS0lEYXk4M2xGbWFTNlk0TFRkek1WTzFTZFpPeUpTTk9ZcHImZT0xNTY3MjAyMzU4JnQ9MTU2Njk4NjM1OCZyPTQzMzkwNDU4JmY9L2E3ZjQ0NWEwLWM5NmUtMTFlOS05YWE2LWZiOWNjZjYyNjZlYi5wbmcmYj1jb2RpbmctbmV0LXByb2R1Y3Rpb24tZmlsZQ=="
            alt=""
          />
        </div>
        <div
          className="shezhi"
          style={{ left: this.state.isShowshezhi ? "0" : "100vw" }}
        >
          {/* <img
            src="https://coding-net-production-file-ci.codehub.cn/af416320-c977-11e9-9aa6-fb9ccf6266eb.jpg?sign=9x0JcDUbDQpwORIcmoDOptkylvphPTEyNTcyNDI1OTkmaz1BS0lEYXk4M2xGbWFTNlk0TFRkek1WTzFTZFpPeUpTTk9ZcHImZT0xNTY3MjAxMTUxJnQ9MTU2Njk4NTE1MSZyPTk0NTMxNDkzJmY9L2FmNDE2MzIwLWM5NzctMTFlOS05YWE2LWZiOWNjZjYyNjZlYi5qcGcmYj1jb2RpbmctbmV0LXByb2R1Y3Rpb24tZmlsZQ=="
            alt=""
          /> */}
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
            src="https://coding-net-production-file-ci.codehub.cn/1badc9e0-c97d-11e9-9aa6-fb9ccf6266eb.png?sign=kzr56Aa5cesn9Xfa+z08w9XoWURhPTEyNTcyNDI1OTkmaz1BS0lEYXk4M2xGbWFTNlk0TFRkek1WTzFTZFpPeUpTTk9ZcHImZT0xNTY3MjAzNDg2JnQ9MTU2Njk4NzQ4NiZyPTEwNTE0OTEzJmY9LzFiYWRjOWUwLWM5N2QtMTFlOS05YWE2LWZiOWNjZjYyNjZlYi5wbmcmYj1jb2RpbmctbmV0LXByb2R1Y3Rpb24tZmlsZQ=="
            alt=""
          />
          <span onClick={this.changeIsShowCover}></span>
        </div>
      </div>
    );
  }
}
export default User;
