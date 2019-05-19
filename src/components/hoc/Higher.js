import React from 'react'
import axios from 'axios';

const Higher = (WrappedComponent) => {

  const colors = ['red', 'pink', 'orange', 'green', 'pink', 'yellow', 'purple', 'blue', 'cyan'];
  const randomColor = colors[Math.floor(Math.random() * 8)];

  const getData = () => {
    return axios.get('https://api.chucknorris.io/jokes/random')
  }

  return (props) => {
    return(
      <div  style={{ color: randomColor}}>
        <WrappedComponent {...props} getData={getData} />
      </div>
    )
  }
}

export default Higher; 
