
import { useState } from 'react'
import './App.sass'
import { ThemeCards } from './components/ThemeCards'
import { ThemeSelector } from './components/ThemeSelector'

function App() 
{
  const [filterVal, setFilterVal] = useState('');

  return (
    <>
      <div className='app-container'>
        <ThemeSelector onChange={setFilterVal}/>
        <ThemeCards filterVal={filterVal}/>
      </div>
    </>
  )
}

export default App
