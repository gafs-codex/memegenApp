import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Header from './components/Header'
import Main from './components/Main'
import Random from './components/random'
import Window from './components/window'
import './App.css'
// import './rand.css'

function App() {
  // const [show, setShow] = useState(true)

  // function toggle() {
  //   setShow((prev) => {
  //     return !prev
  //   })
  // }


  return (
    <>
      <Header />
      <Main />
    </>
  //   // <Random />
  )
  // return (
  //   <main className="container">
  //     <button onClick={toggle}>
  //       Toggle WindowTracker
  //     </button>
  //     {show && <Window />}
  //   </main>
  // )
}
export default App;

