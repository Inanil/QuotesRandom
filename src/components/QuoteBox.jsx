import React from 'react'

const QuoteBox = ({ quoteRandom, colorRandom, clickButton }) => {

  const styleColor = { backgroundColor: colorRandom }

  return (
    <article className='box-quote' style={{ color: colorRandom }}>
      <p className='box-quote__phrase'><span className='box-quote__marks'>"</span>{quoteRandom.quote}</p>
      <span className='box-quote__autor'>{quoteRandom.author}.</span>
      <button
        style={styleColor}
        className='box-quote__btn'
        onClick={clickButton}
      >&#62;</button>
    </article>
  )
}

export default QuoteBox