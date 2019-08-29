import React, { Component } from "react";
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import "./my-swiper.css";
class MySwiper extends Component {
  state = {};
  componentDidMount() {
    const {
      loop,
      slidesPerView,
      direction,
      className,
      pagination,
      spaceBetween,
      autoplay
    } = this.props;
    // 初始化 swiper
    new Swiper(`.${className}`, {
      loop, // 循环模式选项
      direction,
      slidesPerView,
      pagination,
      spaceBetween,
      autoplay
    });
  }
  render() {
    const { width, height, pics, className, pagination } = this.props;
    return (
      <div className="my-swiper">
        <div
          style={{ width, height }}
          className={`swiper-container ${className}`}
        >
          <div className="swiper-wrapper">
            {pics.map((item, index) => (
              <div
                key={index}
                className="swiper-slide"
                style={{ backgroundImage: `url('${item}')` }}
              >
                {/* <img src={item} alt="" /> */}
              </div>
            ))}
          </div>
          <div
            className="swiper-pagination"
            style={{ diplay: pagination ? "bolck" : "none" }}
          />
        </div>
      </div>
    );
  }
}
export default MySwiper;
