import React, { useState } from 'react'
import styled from 'styled-components'




const Header = () => {

  const [sbStatus,setSbStatus]=useState(false);

  return (
    <Container>
    <div>
      <Navv>
      <a href='#' ><img src="images/logo.svg"></img></a>
      <ul className='ul1'>
        <li>Model S</li>
        <li>Model 3</li>
        <li>Model X</li>
        <li>Model y</li>
      </ul>

      <ul className='ul2'>
        <li>Shop</li>
        <li>Tesla Account</li>
        <li onClick={()=>setSbStatus(true)}>|||</li>
      </ul>
     
      </Navv>
    </div>
     <SN show={sbStatus}>
      <p onClick={()=>setSbStatus(false)}>X</p>
      <ul>
        <li>Model S</li>
        <li>Model 3</li>
        <li>Model Y</li>
        <li>Model X</li>
        <li>Existing Inventory</li>
        <li>Used Inventory</li>
        <li>Trade-in</li>
        <li>Cybertruck</li>

      </ul>
    </SN>
    
    
    </Container>

  )
}

export default Header

const Container=styled.div``


const SN=styled.div`

padding:0px 20px ;

position: fixed;
top:0;
right:0;
bottom:0;

background-color:white;
width:300px;
height:100vh;

ul{
  font-size:17px;
}

li{
  padding:15px 0px;
  list-style: none;
  border-bottom: 1px solid rgb(0,0,0,0.2);
  font-weight: bold;
}



p{
  padding: 15px 0px;
  padding-bottom: 5px;
  font-size: 20px;
  font-weight: 600;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  cursor:pointer;
}

transform: ${prop =>  prop.show? 'translateX(0%)' :'translateX(100%)'};
transition: transform 0.2s;
`


const Navv=styled.div`

min-height: 60px;
width:100%;
position: fixed;
padding: 16px 20px;
display:flex;
flex-direction:row;
justify-content: space-between;
align-items: center;



a{
  text-decoration:none;
}

ul{
  list-style: none;
  display:flex;
  font-weight: bold;
  cursor: pointer;
}



li{
  text-transform: uppercase;
  
}

li:last-of-type{
  margin-right: 0px;
}
.ul1{
  margin-left: 18px;
}
.ul1 li{
  padding-right: 20px;
  
}

.ul2 li{
  padding-right: 10px;
}


`


