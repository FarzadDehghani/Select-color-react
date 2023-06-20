import { useState } from 'react'
import Select from './Select'
import Box from './Box'

function App() {

  const [color, setColor] = useState('red');

  const changeColor = (e) => {
    setColor(e.target.value);
  };

  return (
    <div>
   <Select onChange={changeColor} />
   <Box color={color} />
  </div>
  )
}

export default App
