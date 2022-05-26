import React from 'react';



const Title = ({ title }) => {
  return (
    <>
    <h2>{title ? title : "No title"}</h2>
    </>
  )
}

export default Title
