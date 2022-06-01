import React, { Component } from "react";
import Slider from "react-slick";
import { Card, LeftContainer, RightContainer, Image, Name, Icon } from './InfoFour.elements'
import Caitlin from '../../../../images/About/Caitlin_profile.png'
import Hunter from '../../../../images/About/Hunter_profile.png'
import Katie from '../../../../images/About/Katie_profile.png'

import { Text } from '../../../globalStyles'
import './Carousel.css'
import quotation from '../../../../images/About/quotationMark.png'

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none"}}
      onClick={onClick}
      onKeyDown={onClick}
      aria-hidden="true"
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
      onKeyDown={onClick}
      aria-hidden="true"
    />
  );
}



export default class SimpleSlider extends Component {
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
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1, 
      dotsClass: "dots_about",
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />

    };
    return (
      <div>
      <div className='top_content'> 
          <h2 className="title" style={{visibility:'hidden'}}>test</h2>
          <div style={{ textAlign: "center" }}>
            <button className="button" onClick={this.previous}>
              <span class="material-symbols-outlined">
              arrow_back_ios
              </span>
            </button>
            <button className="button" onClick={this.next}>
              <span class="material-symbols-outlined">
              arrow_forward_ios
              </span>
            </button>
         </div>
      </div>
        <Icon src={quotation} alt="quotation-mark"/>
        <Slider ref={c => (this.slider = c)} {...settings}>
          <div>
                <Card>
                   <LeftContainer>
                        <Text>My buyer clients and I have been using Remigo and it has made working together much smoother. Feedback on properties was all over place and this has made it a lot easier to add notes and comments on specific houses. Remigo has become the first step for setting up new clients. Even if they’re just starting, I have had clients add tons of notes and better understand the available market with Remigo.</Text>
                        <Name>Hunter Phillips</Name>
                        <Text>Real Estate Agent</Text>
                   </LeftContainer>
                   <RightContainer>
                            <Image src={Hunter} alt="profile"/>
                   </RightContainer>
                </Card>
          </div>
          <div>
                <Card>
                   <LeftContainer>
                        <Text>I’ve noticed that my clients are sharing more notes on every house we view. It’s way easier for them to keep track of specific houses so they prefer this over the MLS sharing options. Now most of my clients communicate almost entirely on chat so I don’t have to jump from text to email as much.</Text>
                        <Name>Caitlin Hughes</Name>
                        <Text>Real Estate Agent</Text>
                   </LeftContainer>
                   <RightContainer>
                            <Image src={Caitlin} alt="profile"/>
                   </RightContainer>
                </Card>
          </div>
          <div>
                <Card>
                   <LeftContainer>
                        <Text>Remigo made it fast and easy to share feedback with our realtor and it was so much easier than our previous text and email conversations to keep everything organized. Being able to rate properties makes searching back through all of the houses we have saved more convenient. Being able to copy and paste house urls from other sites into Remigo is also very helpful. Start using Remigo!</Text>
                        <Name>Katie Burris</Name>
                        <Text>Home Buyer</Text>
                   </LeftContainer>
                   <RightContainer>
                            <Image src={Katie} alt="profile"/>
                   </RightContainer>
                </Card>
          </div>
        </Slider>
      </div>
    );
  }
}