import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Table from './components/Table'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-[#f0f0f0]">
      <Navbar />
      <Table />
    </div>
  )
}

export default App
