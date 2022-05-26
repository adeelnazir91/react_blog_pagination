import React from 'react';
import styled from "styled-components";



export const Cardtitle = styled.div`
    padding: 20px 20px;
    background-color: #b3c7cc;
    position: relative;
    margin-top: auto;
`

export const Cardimage = styled.img`
    height: 100px;
    width: auto;
    display: block;
    margin: 0 auto;
`


const Image = ({ image }) => {
  return (

    <Cardtitle>
      <Cardimage src={image} />
    </Cardtitle>

  )
}

export default Image
