import React, { Component } from "react";
import Slider from "react-slick";
import './Carousel.css'
import { Card } from './Reviews.elements'
import Arrow from '../../../../assets/Icon/Right.png'
import quotationMarks from '../../../../assets/Icon/quotationMarks.png'
import Avatar from '../../../../assets/Icon/avatar.png'


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none"}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none"}}
      onClick={onClick}
    />
  );
}




export default class PreviousNextMethods extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      dotsClass: 'dots', 
      responsive: [
        {
          breakpoint:960,
          settings: {
            slidesToScroll:1,
            slidesToShow:1,
            dots:true,

          }
        }
      ],
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <div style={{justifyContent: 'center', alignItems: 'center', paddingTop:'4%'}}>
      <div className='top_content'> 
          <h2 className="title">What our customer say</h2>
          <div style={{ textAlign: "center" }}>
            <button className="button" onClick={this.previous}>
                <img src={Arrow} alt='left-arrow' className="arrow_left"/>
            </button>
            <button className="button" onClick={this.next}>
                <img src={Arrow} alt='right-arrow' className="arrow_right"/>
            </button>
         </div>
      </div>
        <Slider ref={c => (this.slider = c)} {...settings} className="carousel">
          <div key={1}>
            <Card>
              <img src={quotationMarks} alt='quotation-marks' className="quotation"/>
              <p className="text_content">“River provides affordable care for our part-time members. We love it!”</p>
              <div className="avatar_container">
                <img src={Avatar} alt="avatar"/>
                <p><span>Scott</span>, VP of People</p>
              </div>
            </Card>
          </div>
          <div key={2}>
            <Card>
              <img src={quotationMarks} alt='quotation-marks' className="quotation"/>
              <p className="text_content">“River provides affordable care for our part-time members. We love it!”</p>
              <div className="avatar_container">
                <img src={Avatar} alt="avatar"/>
                <p><span>Scott</span>, VP of People</p>
              </div>
            </Card>
          </div>
          <div key={3}>
            <Card>
              <img src={quotationMarks} alt='quotation-marks' className="quotation"/>
              <p className="text_content">“River provides affordable care for our part-time members. We love it!”</p>
              <div className="avatar_container">
                <img src={Avatar} alt="avatar"/>
                <p><span>Scott</span>, VP of People</p>
              </div>
            </Card>
          </div>
          <div key={4}>
            <Card>
              <img src={quotationMarks} alt='quotation-marks' className="quotation"/>
              <p className="text_content">“River provides affordable care for our part-time members. We love it!”</p>
              <div className="avatar_container">
                <img src={Avatar} alt="avatar"/>
                <p><span>Scott</span>, VP of People</p>
              </div>
            </Card>
          </div>
          <div key={5}>
            <Card>
              <img src={quotationMarks} alt='quotation-marks' className="quotation"/>
              <p className="text_content">“River provides affordable care for our part-time members. We love it!”</p>
              <div className="avatar_container">
                <img src={Avatar} alt="avatar"/>
                <p><span>Scott</span>, VP of People</p>
              </div>
            </Card>
          </div>
          <div key={6}>
            <Card>
              <img src={quotationMarks} alt='quotation-marks' className="quotation"/>
              <p className="text_content">“River provides affordable care for our part-time members. We love it!”</p>
              <div className="avatar_container">
                <img src={Avatar} alt="avatar"/>
                <p><span>Scott</span>, VP of People</p>
              </div>
            </Card>
          </div>   
          <div key={7}>
            <Card>
              <img src={quotationMarks} alt='quotation-marks' className="quotation"/>
              <p className="text_content">“River provides affordable care for our part-time members. We love it!”</p>
              <div className="avatar_container">
                <img src={Avatar} alt="avatar"/>
                <p><span>Scott</span>, VP of People</p>
              </div>
            </Card>
        </div> 
        </Slider>

      </div>
    );
  }
}