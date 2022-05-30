import { useState } from 'react'
import './App.css'
import QuoteBox from './components/QuoteBox'
import quotes from './json/quotes.json'

const colors = [
  '#6B12A6', '#F279DE', '#CCBBF2', '#F9C903', '#F2C4E2',
  '#28255A', '#F26BC3'
]


function App() {

  const createNumberRandom = array => {
    return Math.floor(Math.random() * array.length)
  }

  const getElementsRandom = array => {
    const i = createNumberRandom(array)
    return array[i]
  }

  const [quoteRandom, setquoteRandom] = useState(getElementsRandom(quotes))
  const [colorRandom, setcolorRandom] = useState(getElementsRandom(colors))

  const clickButton = () => {
    setquoteRandom(getElementsRandom(quotes))
    setcolorRandom(getElementsRandom(colors))
  }


  const objectStyle = {
    backgroundColor: colorRandom
  }

  return (
    <div style={objectStyle} className='App'>

      <QuoteBox
        quoteRandom={quoteRandom}
        colorRandom={colorRandom}
        clickButton={clickButton}
      />


    </div>

  )
}

export default App
