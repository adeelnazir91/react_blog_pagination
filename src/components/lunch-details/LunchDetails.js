import React from 'react';
import Title from './Title';
import Paragraph from './Paragraph';
import Image from './Image';
import styled from 'styled-components';

export const Cardbody = styled.div`
background-color: #f6f7f7;
padding: 5px 10px;

`



const LunchDetails = ({ image, title, description, id }) => {

  return (
    <>
      <Cardbody>
        <Title title={title} />
        <Paragraph
          description={description}
          id={id}
        />
      </Cardbody>
      <Image image={image} />

    </>

  )
}

export default LunchDetails
