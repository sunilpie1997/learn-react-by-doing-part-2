import React from 'react';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import FunctionClick from './components/FunctionClick';
import BindEventHandler from './components/BindEventHandler';
import ParentComponent from './components/ParentComponent';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import IndexAsKey from './components/IndexAsKey';


function App() {
  return (
    
    /*  list rendering  */
    <div>

    <ListRender/>
    <IndexAsKey/>

    </div>

    /* Conditional rendering 
    <div className="App">
        <ConditionalRender/>

    </div>
    */

    /* passing method as props to child component from parent component 

    <div className="App">

        <ParentComponent/>
    </div>
    */

    /* Binding Event Handler  

    <div className="App">

      <BindEventHandler/>

    </div>
    */

    /* event handling 

    <div className="App">

      <FunctionClick/>

    </div>
    */


     /* Destructuring state and props
    <div className="App">
    
      <Greet name="sunil" heroName="superman">

      </Greet>
      <Welcome name="pie" heroName="flash">
      
      </Welcome>

    </div>
    */
  );
}

export default App;
