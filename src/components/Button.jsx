import React from 'react'

const Button = ({colorRandom, clickButton}) => {

    const styleColor = { backgroundColor: colorRandom }
  return (
    <button
    style={styleColor}
    className='box-quote__btn'
    onClick={clickButton}
  >&#62;</button>
  )
}

export default Button