import React, { Component } from "react";
import Slider from "react-slick";
import './Carousel.css'
import { Card } from './Reviews.elements'
import quotationMarks from '../../../../images/Icon/quotationMarks.png'
import avatar_peter from '../../../../images/Home/Avatar/avatar_peter.jpg'
import avatar_catherine from '../../../../images/Home/Avatar/avatar_catherine.jpg'
import avatar_judy from '../../../../images/Home/Avatar/avatar_judy.jpg'
import avatar_alexa from '../../../../images/Home/Avatar/avatar_alexa.jpg'
import avatar_michael from '../../../../images/Home/Avatar/avatar_michael.jpg'
import avatar_janet from '../../../../images/Home/Avatar/avatar_janet.jpg'
import avatar_laura from '../../../../images/Home/Avatar/avatar_laura.jpg'
import avatar_jordan from '../../../../images/Home/Avatar/avatar_jordan.jpg'


function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none"}}
      onClick={onClick}
      onKeyDown={onClick}
      aria-hidden="true"    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none"}}
      onClick={onClick}
      onKeyDown={onClick}
      aria-hidden="true"    />
  );
}




export default class Carousel extends Component {
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
          }
        }
      ],
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />
    };
    return (
      <div style={{justifyContent: 'center', alignItems: 'center', paddingTop:'4%'}}>
      <div className='top_content'> 
          <h2 className="title">What our customer say</h2>
          <div style={{ textAlign: "center" }}>
            <button className="button" onClick={this.previous} onKeyDown={this.previous}>
            <span class="material-symbols-outlined">
            arrow_back_ios
            </span>
            </button>
            <button className="button" onClick={this.next} onKeyDown={this.next}>
                <span class="material-symbols-outlined">
                arrow_forward_ios
                </span>
            </button>
         </div>
      </div>
        <Slider ref={c => (this.slider = c)} {...settings} className="carousel">
          <div key={1}>
            <Card>
              <img src={quotationMarks} alt='quotation-marks' className="quotation"/>
              <p className="text_content">“The support is very fast and helpful.”</p>
              <div className="avatar_container">
                <img src={avatar_peter} alt="avatar"/>
                <p><span>Peter</span>, Realtor</p>
              </div>
            </Card>
          </div>
          <div key={2}>
            <Card>
              <img src={quotationMarks} alt='quotation-marks' className="quotation"/>
              <p className="text_content">“This is the best chat tool for home shopping.”</p>
              <div className="avatar_container">
                <img src={avatar_catherine} alt="avatar"/>
                <p><span>Catherine</span>, Real Estate Agent</p>
              </div>
            </Card>
          </div>
          <div key={3}>
            <Card>
              <img src={quotationMarks} alt='quotation-marks' className="quotation"/>
              <p className="text_content">“My clients love using Remigo to discuss properties.”</p>
              <div className="avatar_container">
                <img src={avatar_judy} alt="avatar"/>
                <p><span>Judy</span>, Realtor</p>
              </div>
            </Card>
          </div>
          <div key={4}>
            <Card>
              <img src={quotationMarks} alt='quotation-marks' className="quotation"/>
              <p className="text_content">“Remigo saves me time on the back and forth.”</p>
              <div className="avatar_container">
                <img src={avatar_alexa} alt="avatar"/>
                <p><span>Alexa</span>, Realtor</p>
              </div>
            </Card>
          </div>
          <div key={5}>
            <Card>
              <img src={quotationMarks} alt='quotation-marks' className="quotation"/>
              <p className="text_content">“Use Remigo! I can’t go back to text and calls to talk to my clients.”</p>
              <div className="avatar_container">
                <img src={avatar_michael} alt="avatar"/>
                <p><span>Michael</span>, Realtor</p>
              </div>
            </Card>
          </div>
          <div key={6}>
            <Card>
              <img src={quotationMarks} alt='quotation-marks' className="quotation"/>
              <p className="text_content">“My husband and I started using Remigo and it has helped so much!”</p>
              <div className="avatar_container">
                <img src={avatar_janet} alt="avatar"/>
                <p><span>Janet</span>, Buyer</p>
              </div>
            </Card>
          </div>   
          <div key={7}>
            <Card>
              <img src={quotationMarks} alt='quotation-marks' className="quotation"/>
              <p className="text_content">“I used Remigo with my agent and it made home shopping so much easier.”</p>
              <div className="avatar_container">
                <img src={avatar_laura} alt="avatar"/>
                <p><span>Laura</span>, Buyer</p>
              </div>
            </Card>
        </div> 
          <div key={8}>
            <Card>
              <img src={quotationMarks} alt='quotation-marks' className="quotation"/>
              <p className="text_content">“Talking to my agent was made so much easier with Remigo.”</p>
              <div className="avatar_container">
                <img src={avatar_jordan} alt="avatar"/>
                <p><span>Jordan</span>, Buyer</p>
              </div>
            </Card>
        </div> 
        </Slider>

      </div>
    );
  }
}