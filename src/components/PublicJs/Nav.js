import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./nav.css";
function Nav(props) {
  const { path } = props.match;
  return (
    <div className="nav">
      <ul>
        <li>
          <Link to="/home">
            <img
              src={
                path === "/home"
                  ? "https://coding-net-production-file-ci.codehub.cn/74884d10-c586-11e9-81af-e1f3ecba4e26.png?sign=QVsyIdFQ3USf/+odJJCRHLE4MMVhPTEyNTcyNDI1OTkmaz1BS0lEYXk4M2xGbWFTNlk0TFRkek1WTzFTZFpPeUpTTk9ZcHImZT0xNTY3MjYwNzE4JnQ9MTU2NzA0NDcxOCZyPTcwOTU3NTIzJmY9Lzc0ODg0ZDEwLWM1ODYtMTFlOS04MWFmLWUxZjNlY2JhNGUyNi5wbmcmYj1jb2RpbmctbmV0LXByb2R1Y3Rpb24tZmlsZQ=="
                  : "https://coding-net-production-file-ci.codehub.cn/74862a30-c586-11e9-81af-e1f3ecba4e26.png?sign=HbHM5v+GKIA0QMpLKhIVz2SVcpxhPTEyNTcyNDI1OTkmaz1BS0lEYXk4M2xGbWFTNlk0TFRkek1WTzFTZFpPeUpTTk9ZcHImZT0xNTY3MjYwNzczJnQ9MTU2NzA0NDc3MyZyPTM4OTM3Mzg4JmY9Lzc0ODYyYTMwLWM1ODYtMTFlOS04MWFmLWUxZjNlY2JhNGUyNi5wbmcmYj1jb2RpbmctbmV0LXByb2R1Y3Rpb24tZmlsZQ=="
              }
              alt=""
            />
          </Link>
        </li>
        <li>
          <Link to="/recommend">
            <img
              src={
                path === "/recommend"
                  ? "https://coding-net-production-file-ci.codehub.cn/edc4d070-c58d-11e9-8948-0728598063e4.png?sign=+nFyqxQGpS2nrQt7KZBzMfi2cRphPTEyNTcyNDI1OTkmaz1BS0lEYXk4M2xGbWFTNlk0TFRkek1WTzFTZFpPeUpTTk9ZcHImZT0xNTY3MjYwOTkzJnQ9MTU2NzA0NDk5MyZyPTE3NzgxMjE1JmY9L2VkYzRkMDcwLWM1OGQtMTFlOS04OTQ4LTA3Mjg1OTgwNjNlNC5wbmcmYj1jb2RpbmctbmV0LXByb2R1Y3Rpb24tZmlsZQ=="
                  : "https://coding-net-production-file-ci.codehub.cn/7479ce20-c586-11e9-81af-e1f3ecba4e26.png?sign=8rhjd79zBPG2Pi//9UagmQeI7pNhPTEyNTcyNDI1OTkmaz1BS0lEYXk4M2xGbWFTNlk0TFRkek1WTzFTZFpPeUpTTk9ZcHImZT0xNTY3MjYwODE5JnQ9MTU2NzA0NDgxOSZyPTczNDQ4ODQmZj0vNzQ3OWNlMjAtYzU4Ni0xMWU5LTgxYWYtZTFmM2VjYmE0ZTI2LnBuZyZiPWNvZGluZy1uZXQtcHJvZHVjdGlvbi1maWxl"
              }
              alt=""
            />
          </Link>
        </li>
        <li>
          <Link to="/publish">
            <img
              src={
                path === "/publish"
                  ? "https://coding-net-production-file-ci.codehub.cn/73c3c490-c586-11e9-81af-e1f3ecba4e26.png?sign=pAfQ9sgiqlc+3yUmxanvMbMC6a9hPTEyNTcyNDI1OTkmaz1BS0lEYXk4M2xGbWFTNlk0TFRkek1WTzFTZFpPeUpTTk9ZcHImZT0xNTY3MjYwOTAzJnQ9MTU2NzA0NDkwMyZyPTM0NzUwMTEzJmY9LzczYzNjNDkwLWM1ODYtMTFlOS04MWFmLWUxZjNlY2JhNGUyNi5wbmcmYj1jb2RpbmctbmV0LXByb2R1Y3Rpb24tZmlsZQ=="
                  : "https://coding-net-production-file-ci.codehub.cn/73f50dc0-c586-11e9-81af-e1f3ecba4e26.png?sign=5buc5Sh10UlDM7QbvY2/IrB1GfdhPTEyNTcyNDI1OTkmaz1BS0lEYXk4M2xGbWFTNlk0TFRkek1WTzFTZFpPeUpTTk9ZcHImZT0xNTY3MjYwODgxJnQ9MTU2NzA0NDg4MSZyPTkxNDY2MzgwJmY9LzczZjUwZGMwLWM1ODYtMTFlOS04MWFmLWUxZjNlY2JhNGUyNi5wbmcmYj1jb2RpbmctbmV0LXByb2R1Y3Rpb24tZmlsZQ=="
              }
              alt=""
            />
          </Link>
        </li>
        <li>
          <Link to="/user">
            <img
              src={
                path === "/user"
                  ? "https://coding-net-production-file-ci.codehub.cn/73d7e8d0-c586-11e9-81af-e1f3ecba4e26.png?sign=Hku6beNiwRJPFhpTsvC/NI0KB5ZhPTEyNTcyNDI1OTkmaz1BS0lEYXk4M2xGbWFTNlk0TFRkek1WTzFTZFpPeUpTTk9ZcHImZT0xNTY3MjYwOTQ1JnQ9MTU2NzA0NDk0NSZyPTQ3ODI0MDA3JmY9LzczZDdlOGQwLWM1ODYtMTFlOS04MWFmLWUxZjNlY2JhNGUyNi5wbmcmYj1jb2RpbmctbmV0LXByb2R1Y3Rpb24tZmlsZQ=="
                  : "https://coding-net-production-file-ci.codehub.cn/73f7a5d0-c586-11e9-81af-e1f3ecba4e26.png?sign=RCy3H4OLNUndtJ14KPqkzxBf53FhPTEyNTcyNDI1OTkmaz1BS0lEYXk4M2xGbWFTNlk0TFRkek1WTzFTZFpPeUpTTk9ZcHImZT0xNTY3MjYwOTYzJnQ9MTU2NzA0NDk2MyZyPTI3NTMzODE4JmY9LzczZjdhNWQwLWM1ODYtMTFlOS04MWFmLWUxZjNlY2JhNGUyNi5wbmcmYj1jb2RpbmctbmV0LXByb2R1Y3Rpb24tZmlsZQ=="
              }
              alt=""
            />
          </Link>
        </li>
      </ul>
    </div>
  );
}
export default withRouter(Nav);
