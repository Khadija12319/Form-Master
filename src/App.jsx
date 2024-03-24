import './App.css'
import GrandPa from './components/GrandPa/GrandPa'
// import ReusableForm from './components/ReusableForm/ReusableForm'
// import HookForm from './components/HookForm/HookForm'
// import RefForm from './components/RefForm/RefForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'
// import StatefulForm from './components/StatefulForm/StatefulForm'

function App() {

  return (
    <>
      <h1 className='text-center text-4xl font-bold h-[300px] flex justify-center items-center'>Vite + React</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReusableForm></ReusableForm> */}
      <GrandPa></GrandPa>
      </>
  )
}

export default App