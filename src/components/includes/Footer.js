import React from 'react';
import styledComponents from 'styled-components';
import { Maincontainer } from '../styles/Containerstyle';


export const Footercontainer = styledComponents.div`
 background-color: ${({ theme }) => theme.colors.footer};
 text-align: center;
 padding: 10px 0px;
 margin-top: 20px;
`
export const Copyright = styledComponents.p`
margin: 0px;
color: #fff;
font-size: 14px;
`
const Footer = () => {
  const today = new Date();
  return (
    <Footercontainer>
      <Maincontainer>
        <Copyright>Copyright &copy; {today.getFullYear()}</Copyright>
      </Maincontainer>
    </Footercontainer>
  )
}

export default Footer
