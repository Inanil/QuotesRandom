import React from 'react'

const QuoteBox = ({ quoteRandom}) => {



  return (
       <div>
      <p className='box-quote__phrase'><span className='box-quote__marks'>"</span>{quoteRandom.quote}</p>
      <span className='box-quote__autor'>{quoteRandom.author}.</span>
    </div>
   
  )
}

export default QuoteBox