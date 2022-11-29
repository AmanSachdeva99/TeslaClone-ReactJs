import React from "react";
import styled from "styled-components"
import Fade from 'react-reveal/Fade';


const Section=({title,para,b1Info,b2Info,backgroundImage})=>{
    return(
        <>
        <Container bgImage={backgroundImage}>

            <Content>
            <Fade up>
                <h1>{title}</h1>
                <p>Order Online for Touchless Delivery</p>
                </Fade>
            </Content>
            <ButtonGroup>
            <Fade up>
                <LB>Custom Order</LB>
                <RB>Existing Order</RB>
                </Fade>
            </ButtonGroup>
        </Container>
        </>
    )
}


export default Section

const Container=styled.div`

height:100vh;
width:100vw;
background-size:cover;
background-position:center;
background-repeat: no-repeat;
display:flex;
flex-direction: column;
align-items: center;
background-image:${props=> `url("images/${props.bgImage}");`}

Fade{
    transition:0.2s
}

`
const Content =styled.div`
margin-top:80px ;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;

h1{
    margin-top: 29px;
}
`


const ButtonGroup=styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
margin-top: auto;
margin-bottom: 80px;

`

const LB=styled.button`
background-color:#393c42 ;
border:0px solid transparent;
border-radius: 20px;
padding: 12px 80px;
color: white;
font-size: 12px;
margin-right: 10px;
text-transform: uppercase;
cursor: pointer;
`

const RB=styled(LB)`
background-color: white;
opacity: 0.65;
color: #393c42;


`