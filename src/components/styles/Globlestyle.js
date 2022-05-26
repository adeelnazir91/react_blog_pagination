import {createGlobalStyle} from 'styled-components'

const GlobleStyles = createGlobalStyle`

  body{
      background-color:${({theme})=>theme.colors.body}
  }
  
  a{
    color: #fff;
    text-decoration: none;
  }
  .active{
    background-color: blueviolet;
    color: #fff !important;
  }
.cardlink{
  color:#000;
}
.readmore{
  color: #7bc736;
}


`

export default GlobleStyles