import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Detailsp = styled.p`
margin: 0px;
padding-bottom: 10px;
`

const Paragraph = ({ description, id }) => {

  return (
    <>

      <Detailsp>{description ? description.length > 100 ? `${description.substring(0, 80)}...` : description : "No content"}</Detailsp>

    </>

  )
}

export default Paragraph
