import React from "react";
import Swiper from "react-id-swiper";
import "./simpleswiper.css";
const SimpleSwiper = props => {
  const { userName, password, inputUserName, inputPassword, login } = props;
  // console.log(props);
  return (
    <Swiper>
      <div>
        <img
          src="https://coding-net-production-file-ci.codehub.cn/492be5e0-c550-11e9-81af-e1f3ecba4e26.jpg?sign=lMWEGGj7/uM8+tKmR410TSwXkGJhPTEyNTcyNDI1OTkmaz1BS0lEYXk4M2xGbWFTNlk0TFRkek1WTzFTZFpPeUpTTk9ZcHImZT0xNTY2NzQ1NTM3JnQ9MTU2NjUyOTUzNyZyPTQ3MDk0NjY2JmY9LzQ5MmJlNWUwLWM1NTAtMTFlOS04MWFmLWUxZjNlY2JhNGUyNi5qcGcmYj1jb2RpbmctbmV0LXByb2R1Y3Rpb24tZmlsZQ=="
          alt=""
        />
      </div>
      <div>
        <img
          src="https://coding-net-production-file-ci.codehub.cn/4932eac0-c550-11e9-81af-e1f3ecba4e26.jpg?sign=TlQglNkX4EMEV32GtZoeGJAOqRhhPTEyNTcyNDI1OTkmaz1BS0lEYXk4M2xGbWFTNlk0TFRkek1WTzFTZFpPeUpTTk9ZcHImZT0xNTY2NzQ1NTYwJnQ9MTU2NjUyOTU2MCZyPTMwMzIzMDM0JmY9LzQ5MzJlYWMwLWM1NTAtMTFlOS04MWFmLWUxZjNlY2JhNGUyNi5qcGcmYj1jb2RpbmctbmV0LXByb2R1Y3Rpb24tZmlsZQ=="
          alt=""
        />
      </div>
      <div>
        <img
          src="https://coding-net-production-file-ci.codehub.cn/493d23f0-c550-11e9-81af-e1f3ecba4e26.jpg?sign=5iKSPz/nQHDlbnay4/ZBO/3+bilhPTEyNTcyNDI1OTkmaz1BS0lEYXk4M2xGbWFTNlk0TFRkek1WTzFTZFpPeUpTTk9ZcHImZT0xNTY2NzQ1NTc4JnQ9MTU2NjUyOTU3OCZyPTUzMjgxODUxJmY9LzQ5M2QyM2YwLWM1NTAtMTFlOS04MWFmLWUxZjNlY2JhNGUyNi5qcGcmYj1jb2RpbmctbmV0LXByb2R1Y3Rpb24tZmlsZQ=="
          alt=""
        />
      </div>
      <div>
        <img
          src="https://coding-net-production-file-ci.codehub.cn/56a6d360-c550-11e9-81af-e1f3ecba4e26.jpg?sign=FQ0/pxhMr4RiJ75XaYD6xmFOnbdhPTEyNTcyNDI1OTkmaz1BS0lEYXk4M2xGbWFTNlk0TFRkek1WTzFTZFpPeUpTTk9ZcHImZT0xNTY2NzQ1NjAyJnQ9MTU2NjUyOTYwMiZyPTMxMzkyNDQ1JmY9LzU2YTZkMzYwLWM1NTAtMTFlOS04MWFmLWUxZjNlY2JhNGUyNi5qcGcmYj1jb2RpbmctbmV0LXByb2R1Y3Rpb24tZmlsZQ=="
          alt=""
        />
      </div>
      <div>
        <img
          src="https://coding-net-production-file-ci.codehub.cn/49377ea0-c550-11e9-81af-e1f3ecba4e26.jpg?sign=uGuPpvz623fFbJ9PcVnKSZwEj/9hPTEyNTcyNDI1OTkmaz1BS0lEYXk4M2xGbWFTNlk0TFRkek1WTzFTZFpPeUpTTk9ZcHImZT0xNTY2NzQ0NDk5JnQ9MTU2NjUyODQ5OSZyPTYxNDIzOTI3JmY9LzQ5Mzc3ZWEwLWM1NTAtMTFlOS04MWFmLWUxZjNlY2JhNGUyNi5qcGcmYj1jb2RpbmctbmV0LXByb2R1Y3Rpb24tZmlsZQ=="
          alt=""
        />
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
