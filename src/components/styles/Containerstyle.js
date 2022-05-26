import styled from "styled-components";
import { device } from "../../helpers";

export const Maincontainer = styled.div`
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;

    @media ${device.laptop} {
      max-width: 1140px;
    }

    @media ${device.mobileL} {
      width:auto;
      
    }
  
`
 
 

