import React, { Component } from "react";
import { connect } from "react-redux";
import "./show.css";
import { addComment, changeGood } from "../../store/action";
import { isGood } from "../../store/selectors";
class Show extends Component {
  state = {
    isShowAll: "2",
    isShowMap: false,
    isShowCover: false,
    isShowComment: false,
    val: ""
  };
  goBack = () => {
    this.props.history.go(-1);
  };
  showAll = () => {
    const { isShowAll } = this.state;
    const { id } = this.props.match.params;
    const { show } = this.props;
    if (isShowAll === "2") {
      this.setState({
        isShowAll: show.find(item => item.id === id).info.comments.length
      });
    } else {
      this.setState({
        isShowAll: "2"
      });
    }
  };
  changeIsShowMap = () => {
    this.setState({
      isShowMap: !this.state.isShowMap
    });
  };
  changeIsShowCover = () => {
    this.setState({
      isShowCover: !this.state.isShowCover
    });
  };
  changeIsShowComment = () => {
    this.setState({
      isShowComment: !this.state.isShowComment
    });
  };
  changeTextareaVal = e => {
    const { val } = this.state;
    if (e.target.value.trim()) {
      this.setState({
        val: e.target.value
      });
      console.log(val);
    } else {
      alert("评论不能为空");
    }
  };
  addComment = () => {
    const { val } = this.state;
    const { id } = this.props.match.params;
    // console.log(new Date().toLocaleDateString());
    this.props.addComment(
      {
        id: new Date().getTime(),
        author: "我自己",
        img: "https://coding.net/static/project_icon/scenery-10.png",
        time: new Date().toLocaleDateString(),
        content: val
      },
      () => {
        this.setState({
          val: ""
        });
      },
      id
    );
  };
  render() {
    const { id } = this.props.match.params;
    const { show } = this.props;
    const showPersonal = show.find(item => item.id === id);
    // console.log(showPersonal.info.comments);
    const commentsList = showPersonal.info.comments
      ? showPersonal.info.comments
          .slice(0, this.state.isShowAll)
          .map(comment => (
            <li key={comment.id}>
              <div>
                <img src={comment.img} alt="" />
              </div>
              <div>
                <span>{comment.author}</span>
                <span>{comment.time}</span>
                <span>{comment.content}</span>
              </div>
            </li>
          ))
      : [];
    return (
      <div
        className="show-info"
        style={{ position: "relative", height: "100vh", overflow: "hidden" }}
      >
        <div className="showPersonal">
          <div className="top">
            <img src={showPersonal.img} alt="" />
            <span onClick={this.goBack} className="iconfont icon-fanhui" />
          </div>
          <div className="introduce">
            <span className="red-title">展览内容</span>
            <p>{showPersonal.info.content}</p>
          </div>
          <div className="author">
            <img src={showPersonal.info.img} alt="" />
            <p>{showPersonal.info.author}</p>
          </div>
          <div className="shows">
            {showPersonal.info.pics.map((pic, index) => (
              <img key={index} src={pic} alt="" />
            ))}
          </div>
          <div className="comments">
            <span className="red-title">展览评论</span>
            <ul>
              {commentsList}
              <li
                className="show-all"
                onClick={this.showAll}
                style={{
                  display:
                    showPersonal.info.comments.length >= 3 ? "block" : "none"
                }}
              >
                <span>
                  {this.state.isShowAll === "2"
                    ? `展开全部${showPersonal.info.comments.length}条评论 V`
                    : "收起"}
                </span>
              </li>
            </ul>
          </div>
          <div className="bottom">
            <div
              onClick={() => {
                this.props.changeGood(id);
              }}
            >
              <span
                className={
                  isGood(show, id)
                    ? "iconfont icon-bqxin red"
                    : "iconfont icon-bqxin"
                }
              />
              &nbsp;
              <span>关注</span>
            </div>
            <div onClick={this.changeIsShowMap}>
              <span className="iconfont icon-hj2" />
              &nbsp;
              <span>到这</span>
            </div>
            <div onClick={this.changeIsShowCover}>
              <span className="iconfont icon-fenxiang" />
              &nbsp;
              <span>分享</span>
            </div>
            <div onClick={this.changeIsShowComment}>
              <span className="iconfont icon-message" />
              &nbsp;
              <span>评论</span>
            </div>
          </div>
        </div>
        <div
          className="map"
          style={{ left: this.state.isShowMap ? "0" : "100vw" }}
        >
          <img
            src="https://coding-net-production-file-ci.codehub.cn/1080b430-c7e1-11e9-9734-27c7b226d101.jpg?sign=676Icw05TVeM2f/ZARnObefPL4phPTEyNTcyNDI1OTkmaz1BS0lEYXk4M2xGbWFTNlk0TFRkek1WTzFTZFpPeUpTTk9ZcHImZT0xNTY3MDI3MDQ1JnQ9MTU2NjgxMTA0NSZyPTUwMzE5Mzg2JmY9LzEwODBiNDMwLWM3ZTEtMTFlOS05NzM0LTI3YzdiMjI2ZDEwMS5qcGcmYj1jb2RpbmctbmV0LXByb2R1Y3Rpb24tZmlsZQ=="
            alt=""
          />
          <div>
            <h4>chi k11 艺术空间</h4>
            <p>开放时间：9：00-18：00</p>
            <p>地址：淮海中路300号 上海k11购物艺术中心 B3层</p>
          </div>
          <span onClick={this.changeIsShowMap} />
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
            src="https://coding-net-production-file-ci.codehub.cn/12e44000-c93c-11e9-9aa6-fb9ccf6266eb.jpg?sign=YWruuUzm/qGmRYkfEZtSNirv4oRhPTEyNTcyNDI1OTkmaz1BS0lEYXk4M2xGbWFTNlk0TFRkek1WTzFTZFpPeUpTTk9ZcHImZT0xNTY3MTc1NTQ4JnQ9MTU2Njk1OTU0OCZyPTc4NTQ1OTcxJmY9LzEyZTQ0MDAwLWM5M2MtMTFlOS05YWE2LWZiOWNjZjYyNjZlYi5qcGcmYj1jb2RpbmctbmV0LXByb2R1Y3Rpb24tZmlsZQ=="
            alt=""
          />
          <span onClick={this.changeIsShowCover}></span>
        </div>
        <div
          className="map comment"
          style={{ left: this.state.isShowComment ? "0" : "100vw" }}
        >
          <div className="top">
            <span
              onClick={this.changeIsShowComment}
              className="iconfont icon-fanhui"
            />
            <span>评论</span>
            <span
              onClick={() => {
                this.addComment(id);
              }}
            >
              发布
            </span>
          </div>
          <textarea
            placeholder="你想说点什么。。。"
            value={this.state.val}
            onChange={this.changeTextareaVal}
          ></textarea>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    show: state.show.show
  };
};
export default connect(
  mapStateToProps,
  { addComment, changeGood }
)(Show);
