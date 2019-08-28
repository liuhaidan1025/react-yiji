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
                  ? "https://coding-net-production-file-ci.codehub.cn/74884d10-c586-11e9-81af-e1f3ecba4e26.png?sign=7w9aLMtGRaLhOWZSR6gOhTFsDBVhPTEyNTcyNDI1OTkmaz1BS0lEYXk4M2xGbWFTNlk0TFRkek1WTzFTZFpPeUpTTk9ZcHImZT0xNTY2NzY4MzYzJnQ9MTU2NjU1MjM2MyZyPTE2MTAwMDE1JmY9Lzc0ODg0ZDEwLWM1ODYtMTFlOS04MWFmLWUxZjNlY2JhNGUyNi5wbmcmYj1jb2RpbmctbmV0LXByb2R1Y3Rpb24tZmlsZQ=="
                  : "https://coding-net-production-file-ci.codehub.cn/74862a30-c586-11e9-81af-e1f3ecba4e26.png?sign=PCW+b/O1EG/kUF+DvTb74aB8s9VhPTEyNTcyNDI1OTkmaz1BS0lEYXk4M2xGbWFTNlk0TFRkek1WTzFTZFpPeUpTTk9ZcHImZT0xNTY2NzY3NzIyJnQ9MTU2NjU1MTcyMiZyPTM4MTc3MDk1JmY9Lzc0ODYyYTMwLWM1ODYtMTFlOS04MWFmLWUxZjNlY2JhNGUyNi5wbmcmYj1jb2RpbmctbmV0LXByb2R1Y3Rpb24tZmlsZQ=="
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
                  ? "https://coding-net-production-file-ci.codehub.cn/edc4d070-c58d-11e9-8948-0728598063e4.png?sign=q9PicVjc0AotLHwhh4RrPOtxOe5hPTEyNTcyNDI1OTkmaz1BS0lEYXk4M2xGbWFTNlk0TFRkek1WTzFTZFpPeUpTTk9ZcHImZT0xNTY2NzcwOTE2JnQ9MTU2NjU1NDkxNiZyPTU4NjQzNDk0JmY9L2VkYzRkMDcwLWM1OGQtMTFlOS04OTQ4LTA3Mjg1OTgwNjNlNC5wbmcmYj1jb2RpbmctbmV0LXByb2R1Y3Rpb24tZmlsZQ=="
                  : "https://coding-net-production-file-ci.codehub.cn/7479ce20-c586-11e9-81af-e1f3ecba4e26.png?sign=7T/9jd5YWEKFnAXL9X/5hzCZDB9hPTEyNTcyNDI1OTkmaz1BS0lEYXk4M2xGbWFTNlk0TFRkek1WTzFTZFpPeUpTTk9ZcHImZT0xNTY2NzY3ODM5JnQ9MTU2NjU1MTgzOSZyPTEyMjkzOTM5JmY9Lzc0NzljZTIwLWM1ODYtMTFlOS04MWFmLWUxZjNlY2JhNGUyNi5wbmcmYj1jb2RpbmctbmV0LXByb2R1Y3Rpb24tZmlsZQ=="
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
                  ? "https://coding-net-production-file-ci.codehub.cn/73c3c490-c586-11e9-81af-e1f3ecba4e26.png?sign=e4VFhQtxIGxEwoaYdVeR+CLhhhNhPTEyNTcyNDI1OTkmaz1BS0lEYXk4M2xGbWFTNlk0TFRkek1WTzFTZFpPeUpTTk9ZcHImZT0xNTY2NzY4NTIzJnQ9MTU2NjU1MjUyMyZyPTc0MDM0OTQ0JmY9LzczYzNjNDkwLWM1ODYtMTFlOS04MWFmLWUxZjNlY2JhNGUyNi5wbmcmYj1jb2RpbmctbmV0LXByb2R1Y3Rpb24tZmlsZQ=="
                  : "https://coding-net-production-file-ci.codehub.cn/73f50dc0-c586-11e9-81af-e1f3ecba4e26.png?sign=Tk4hVq9W6kU17m+HYjrjccyiuDBhPTEyNTcyNDI1OTkmaz1BS0lEYXk4M2xGbWFTNlk0TFRkek1WTzFTZFpPeUpTTk9ZcHImZT0xNTY2NzY3ODY2JnQ9MTU2NjU1MTg2NiZyPTMwMjU5MDYmZj0vNzNmNTBkYzAtYzU4Ni0xMWU5LTgxYWYtZTFmM2VjYmE0ZTI2LnBuZyZiPWNvZGluZy1uZXQtcHJvZHVjdGlvbi1maWxl"
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
                  ? "https://coding-net-production-file-ci.codehub.cn/73d7e8d0-c586-11e9-81af-e1f3ecba4e26.png?sign=dmt6TTmc6DjXBrk2m+apVgu0CP1hPTEyNTcyNDI1OTkmaz1BS0lEYXk4M2xGbWFTNlk0TFRkek1WTzFTZFpPeUpTTk9ZcHImZT0xNTY2NzY4NTczJnQ9MTU2NjU1MjU3MyZyPTU2ODUxOTExJmY9LzczZDdlOGQwLWM1ODYtMTFlOS04MWFmLWUxZjNlY2JhNGUyNi5wbmcmYj1jb2RpbmctbmV0LXByb2R1Y3Rpb24tZmlsZQ=="
                  : "https://coding-net-production-file-ci.codehub.cn/73f7a5d0-c586-11e9-81af-e1f3ecba4e26.png?sign=U8XqCV/zGtqy5lWthGmehD25NJlhPTEyNTcyNDI1OTkmaz1BS0lEYXk4M2xGbWFTNlk0TFRkek1WTzFTZFpPeUpTTk9ZcHImZT0xNTY2NzY3ODk1JnQ9MTU2NjU1MTg5NSZyPTU3MDU5MDQxJmY9LzczZjdhNWQwLWM1ODYtMTFlOS04MWFmLWUxZjNlY2JhNGUyNi5wbmcmYj1jb2RpbmctbmV0LXByb2R1Y3Rpb24tZmlsZQ=="
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
