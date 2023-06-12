import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';

// function Subject(){
//   return (
//     <div className='Subject'>
//       <header>
//         <h1>WEB</h1>
//         world wide web!
//       </header>
//     </div>
//   );
// }

class Subject extends Component{
  render(){
    return (
      <header>
        <h1>WEB</h1>
        world wide web!
      </header>
    );
  }
}

function App() {
  return (
    <div className="App">
      <Subject></Subject>
    </div>
  );
}

export default App;
