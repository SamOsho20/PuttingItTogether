// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
import './App.css'
import Person  from './components/People'
// ALWAYS PUT COMPONENT IN SRC FILE SAME LEVEL AS ASSETS 

function App() {
  // const [count, setCount] = useState(0)

  return (
  <>

    {/* PASSING VARIABLES TO OUR PERSON COMPONENT  */}
    <Person name = "Sam Osho" age = {24} hairColor = "Black"/>
    {/* {} AROUND AGE CONVERT IT TO A NUMBER RATHER THAN STRING */}
    <Person name = "Tim Osho" age = {25} hairColor = "Black"/>
    </>
    )
    
    
  }
  
  export default App
