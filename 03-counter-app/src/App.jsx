import { SayHello } from "./components/SayHello/SayHello";

function App() {
  const name = 'Germán'
  return (
    <>
      <SayHello name={ name } />
    </>
  )
}

export default App;