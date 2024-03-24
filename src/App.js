// Youtube Video for Refrence - https://www.youtube.com/watch?v=O1Y4ppPpn0A&t=45s&ab_channel=codewithsheetal
import React, { createContext } from 'react'
import './App.css'
import Form from './Components/Form'
import Conditions from './Components/Conditions'
import State from './Components/State'
import Checkbox from './Components/Checkbox'
import Effect from './Components/Effect'
import Child from './Context/Child'

// const App = () => {
//   return (
//     <div>
//       {/* <Form/> */}
//       {/* <Conditions check={false}/> */}
//       {/* <State/> */}
//       {/* <Checkbox/> */}
//       {/* <Effect/> */}
//     </div>
//   )
// }
// export default App;

export const Name=createContext();

const App = () => {
  return (
    <div>
      <Name.Provider value={{ Name: "Devesh" }}>
        <h1>App Component</h1>
        <Child />
      </Name.Provider>
    </div>
  );
}
export default App;
