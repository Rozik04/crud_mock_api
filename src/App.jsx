import { useState } from 'react'
import MainRouters from './pages'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>
         <MainRouters/>
      </div>
    </>
  )
}

export default App
