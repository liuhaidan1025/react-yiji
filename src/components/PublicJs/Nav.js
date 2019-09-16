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
                  ? "https://dev.tencent.com/u/haidan1025/p/yiji/git/raw/master/74884d10-c586-11e9-81af-e1f3ecba4e26.png"
                  : "https://dev.tencent.com/u/haidan1025/p/yiji/git/raw/master/74862a30-c586-11e9-81af-e1f3ecba4e26.png"
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
                  ? "https://dev.tencent.com/u/haidan1025/p/yiji/git/raw/master/edc4d070-c58d-11e9-8948-0728598063e4.png"
                  : "https://dev.tencent.com/u/haidan1025/p/yiji/git/raw/master/7479ce20-c586-11e9-81af-e1f3ecba4e26.png"
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
                  ? "https://dev.tencent.com/u/haidan1025/p/yiji/git/raw/master/73c3c490-c586-11e9-81af-e1f3ecba4e26.png"
                  : "https://dev.tencent.com/u/haidan1025/p/yiji/git/raw/master/73f50dc0-c586-11e9-81af-e1f3ecba4e26.png"
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
                  ? "https://dev.tencent.com/u/haidan1025/p/yiji/git/raw/master/73d7e8d0-c586-11e9-81af-e1f3ecba4e26.png"
                  : "https://dev.tencent.com/u/haidan1025/p/yiji/git/raw/master/73f7a5d0-c586-11e9-81af-e1f3ecba4e26.png"
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
