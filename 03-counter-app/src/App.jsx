import { SayHello } from "./components/SayHello/SayHello";
import { CounterApp } from './components/CounterApp/CounterApp.jsx'

function App() {
  const name = 'Germán'
  return (
    <>
      <CounterApp value={100}/>
      {/* <SayHello name={ name } /> */}
    </>
  )
}

export default App;