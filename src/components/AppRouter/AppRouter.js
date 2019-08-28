import React from "react";
import { Route } from "react-router-dom";
import Home from "../Home/Home";
import Guide from "../Guide/Guide";
import Recommend from "../Recommend/Recommend";
import Publish from "../Publish/Publish";
import User from "../User/User";
import Show from "../Show/Show";
const AppRouter = () => {
  return (
    <div>
      <Route path="/" exact component={Guide} />
      <Route path="/home" component={Home} />
      <Route path="/recommend" component={Recommend} />
      <Route path="/publish" component={Publish} />
      <Route path="/user" component={User} />
      <Route path="/show/:id" component={Show} />
    </div>
  );
};
export default AppRouter;
