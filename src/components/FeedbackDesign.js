import React from 'react'
import styled from 'styled-components'
import Avatar from '../images/Avatar.png'
import Avatar1 from '../images/Avatar1.png'
import Avatar2 from '../images/Avatar2.png'
import Avatar3 from '../images/Avatar3.png'
import Icons from '../images/Icons.png'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Fade from 'react-reveal/Fade';


const DivContainer = styled.div`
    display:flex;
    justify-content:flex-start;
    align-items: center;
    background-color: #fff;
    max-width: 850px;
    width: 100%;
    height:80px;
    border-radius: 15px;
    border: 1px solid #E5E7EB;
    box-sizing: border-box;
    box-shadow: 0px 0px 24px rgba(0, 100, 137, 0.33);    
    margin-top:15px;
    margin-bottom:15px;
`
const DivContainerData = styled.div`
    display:grid;
    background-color: #fff;
    padding:20px;
    max-width: 850px;
    width: 100%;
    height:auto;
    border-radius: 15px;
    border: 1px solid #E5E7EB;
    box-sizing: border-box;
    box-shadow: 0px 0px 24px rgba(0, 100, 137, 0.33);    
    margin-top:15px;
    margin-bottom:15px;

    @media screen and (max-width: 408px) {
        padding:10px;
    }

`
const ImgContainer = styled.div`
    margin-left: 10px;
    img {
        width:48px;
        height:auto;
    }
`

const TextContainer = styled.div`
    margin-left: 10px;
    position: relative;
    p {
        font-size: 16px;
        color:#4B5562;
        line-height: 24px;
        font-weight:300;
        font-family: 'Source Sans Pro', sans-serif;    }
`

const Heading = styled.div`
    display:inline;
    justify-content:center;
    align-items: center;

`
const ImgIcon = styled.img`
        width:70px;
        height:auto;
        float: right;

`
const ImgAvatar = styled.img`
        width:40px;
        height:auto;
        float: left;

`
const Text = styled.div`
    align-items:center;
    justify-content: center;
    max-width:100%;
    padding: 17px 5px 17px 0px;
    border-bottom: 1px solid #E5E7EB;
    margin-bottom: 20px;

`

const Text1 = styled.p`
    font-size: 16px;
    font-weight:500;
    float: left;
    color:#1F2936;
    font-family: 'Source Sans Pro', sans-serif; 
`
const Text2 = styled.p`
    font-size: 16px;
    font-weight:300;
    float: right;
    color:#1F2936;
    font-family: 'Source Sans Pro', sans-serif; 
    span {
        color: #28B8A7;
    }
`
const Star = styled.p`

    float: right;
  
`

const TextStars = styled.div`
    align-items:center;
    justify-content: center;
    max-width:100%;
    padding: 17px 5px 17px 0px;
    margin-bottom: 20px;

    `

  
 

const FeedbackDesign = () => {

    return (
        <>  

            <DivContainerData>
            <Fade bottom cascade>

                <Heading>
                    <ImgAvatar src={Avatar3} alt='avatar-png'/>
                    <ImgIcon src={Icons} alt='avatar-png'/>
                </Heading>
                <div>
                <Fade bottom cascade>
                    <Text >
                        <Text1>Shared</Text1>
                        <Text2>Today</Text2>
                    </Text>
                    <Text>
                        <Text1>Page Views</Text1>
                        <Text2>3</Text2>
                    </Text>
                    <Text>
                        <Text1>Total Time</Text1>
                        <Text2>11m 12s</Text2>
                    </Text>

                    <Text>
                        <Text1>Rank</Text1>
                        <Text2>Ranked <span>#1</span> Just now</Text2>
                    </Text>
                </Fade>
                </div>
                <div>
                <Fade bottom cascade>

                    <TextStars>
                        <Text1>Lot Rating</Text1>
                        <Star>
                            <Stack spacing={1}>
                                <Rating name="half-rating" defaultValue={4.0} precision={0.5} readOnly/>
                            </Stack>
                        </Star>
                    </TextStars>
                    <TextStars>
                        <Text1>Location</Text1>
                        <Star>
                            <Stack spacing={1}>
                                <Rating name="half-rating" defaultValue={5.0} precision={0.5} readOnly/>
                            </Stack>
                        </Star>
                    </TextStars>
                    <TextStars>
                        <Text1>Price</Text1>
                        <Star>
                            <Stack spacing={1}>
                                <Rating name="half-rating" defaultValue={3.5} precision={0.5} readOnly/>
                            </Stack>
                        </Star>
                    </TextStars>
                    <TextStars className='fadeIn'>
                        <Text1>Home Style</Text1>
                        <Star>
                            <Stack spacing={1}>
                                <Rating name="half-rating" defaultValue={4.0} precision={0.5} readOnly/>
                            </Stack>
                        </Star>
                    </TextStars>
                    <TextStars>
                        <Text1>Home Configuration</Text1>
                        <Star>
                            <Stack spacing={1}>
                                <Rating name="half-rating" defaultValue={3.0} precision={0.5} readOnly/>
                            </Stack>
                        </Star>
                    </TextStars>
                    <TextStars>
                        <Text1>Home Amenities</Text1>
                        <Star>
                            <Stack spacing={1}>
                                <Rating name="half-rating" defaultValue={5} precision={0.5} readOnly/>
                            </Stack>
                        </Star>
                    </TextStars>
                    </Fade>

                </div>
                </Fade>
            </DivContainerData>
             <DivContainer>
                <Fade bottom cascade>

                <ImgContainer>
                    <img src={Avatar} alt='avatar-png'/>
                </ImgContainer>
                <TextContainer>
                    <p>Waiting for feedback from Javier</p>
                </TextContainer>
                </Fade>
            </DivContainer>
            <DivContainer>
            <Fade bottom cascade>
                <ImgContainer>
                    <img src={Avatar1} alt='avatar-png'/>
                </ImgContainer>
                <TextContainer>
                    <p>Waiting for feedback from Reed</p>
                </TextContainer>
                </Fade>
            </DivContainer>
            
            <DivContainer>
            <Fade bottom cascade>

                <ImgContainer>
                    <img src={Avatar2} alt='avatar-png'/>
                </ImgContainer>
                <TextContainer>
                    <p>Waiting for feedback from Vlad</p>
                </TextContainer>
                </Fade>

            </DivContainer>
        </>
    )
}

export default FeedbackDesign
