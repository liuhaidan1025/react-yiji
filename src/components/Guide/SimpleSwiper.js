import React from "react";
import Swiper from "react-id-swiper";
import "./simpleswiper.css";
const SimpleSwiper = props => {
  const { userName, password, inputUserName, inputPassword, login } = props;
  // console.log(props);
  return (
    <Swiper>
      <div className="lunbo1">
        {/* <img
          src="https://coding-net-production-file-ci.codehub.cn/492be5e0-c550-11e9-81af-e1f3ecba4e26.jpg?sign=h7TllpuckmThvFYR+3/g1uUJLQlhPTEyNTcyNDI1OTkmaz1BS0lEYXk4M2xGbWFTNlk0TFRkek1WTzFTZFpPeUpTTk9ZcHImZT0xNTY3MjYwNDM3JnQ9MTU2NzA0NDQzNyZyPTM5NDQ3MjM4JmY9LzQ5MmJlNWUwLWM1NTAtMTFlOS04MWFmLWUxZjNlY2JhNGUyNi5qcGcmYj1jb2RpbmctbmV0LXByb2R1Y3Rpb24tZmlsZQ=="
          alt=""
        /> */}
      </div>
      <div className="lunbo2">
        {/* <img
          src="https://coding-net-production-file-ci.codehub.cn/4932eac0-c550-11e9-81af-e1f3ecba4e26.jpg?sign=49RCetOJ3bcgqCNxv2hHKc8coLphPTEyNTcyNDI1OTkmaz1BS0lEYXk4M2xGbWFTNlk0TFRkek1WTzFTZFpPeUpTTk9ZcHImZT0xNTY3MjYwNTE3JnQ9MTU2NzA0NDUxNyZyPTYyNzMyMDg3JmY9LzQ5MzJlYWMwLWM1NTAtMTFlOS04MWFmLWUxZjNlY2JhNGUyNi5qcGcmYj1jb2RpbmctbmV0LXByb2R1Y3Rpb24tZmlsZQ=="
          alt=""
        /> */}
      </div>
      <div className="lunbo3">
        {/* <img
          src="https://coding-net-production-file-ci.codehub.cn/493d23f0-c550-11e9-81af-e1f3ecba4e26.jpg?sign=UYWD7y6OKLO2kaORCKU03Yr6Nz9hPTEyNTcyNDI1OTkmaz1BS0lEYXk4M2xGbWFTNlk0TFRkek1WTzFTZFpPeUpTTk9ZcHImZT0xNTY3MjYwNTQ2JnQ9MTU2NzA0NDU0NiZyPTUyODExMjIwJmY9LzQ5M2QyM2YwLWM1NTAtMTFlOS04MWFmLWUxZjNlY2JhNGUyNi5qcGcmYj1jb2RpbmctbmV0LXByb2R1Y3Rpb24tZmlsZQ=="
          alt=""
        /> */}
      </div>
      <div className="lunbo4">
        {/* <img
          src="https://coding-net-production-file-ci.codehub.cn/56a6d360-c550-11e9-81af-e1f3ecba4e26.jpg?sign=kgf9fiUseaAqmPY585z83Q8vhbRhPTEyNTcyNDI1OTkmaz1BS0lEYXk4M2xGbWFTNlk0TFRkek1WTzFTZFpPeUpTTk9ZcHImZT0xNTY3MjYwNTcxJnQ9MTU2NzA0NDU3MSZyPTQ5MTM4MTExJmY9LzU2YTZkMzYwLWM1NTAtMTFlOS04MWFmLWUxZjNlY2JhNGUyNi5qcGcmYj1jb2RpbmctbmV0LXByb2R1Y3Rpb24tZmlsZQ=="
          alt=""
        /> */}
      </div>
      <div className="lunbo5">
        {/* <img
          src="https://coding-net-production-file-ci.codehub.cn/49377ea0-c550-11e9-81af-e1f3ecba4e26.jpg?sign=rdxAmA3LYuxvcsXeoNRD/ldrwMZhPTEyNTcyNDI1OTkmaz1BS0lEYXk4M2xGbWFTNlk0TFRkek1WTzFTZFpPeUpTTk9ZcHImZT0xNTY3MjYwNTkyJnQ9MTU2NzA0NDU5MiZyPTczNDg4NDEyJmY9LzQ5Mzc3ZWEwLWM1NTAtMTFlOS04MWFmLWUxZjNlY2JhNGUyNi5qcGcmYj1jb2RpbmctbmV0LXByb2R1Y3Rpb24tZmlsZQ=="
          alt=""
        /> */}
      </div>
      <div className="login">
        <div className="login-input">
          <input
            type="text"
            value={userName}
            onChange={event => {
              inputUserName(event);
            }}
            placeholder="点击输入手机号/Email登录"
          />
          <input
            type="text"
            value={password}
            onChange={event => {
              inputPassword(event);
            }}
            placeholder="输入密码"
          />
        </div>
        <div className="login-in">
          <span onClick={login}>登录</span>
          <span>注册</span>
        </div>
        <div className="agree">
          <p>
            登录或注册即同意艺集<span>用户服务协议</span>
          </p>
        </div>
        <div className="login-stype">
          <span className="iconfont icon-weibo">
            &nbsp;
            <span> 微博</span>
          </span>
          <span className="iconfont icon-weixin">
            &nbsp;
            <span> 微信</span>
          </span>
          <span className="iconfont icon-icon">
            &nbsp;
            <span> QQ</span>
          </span>
        </div>
      </div>
    </Swiper>
  );
};
export default SimpleSwiper;
