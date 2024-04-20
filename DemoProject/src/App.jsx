import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const headingStyle = 'bg-green-700 px-10 rounded-xl py-3 text-blue-700'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <div>
        <h1 className={headingStyle}>
          Sheikh Muhammad Tolha
        </h1>
      </div>
    </div>
    </>
  )
}

export default App
