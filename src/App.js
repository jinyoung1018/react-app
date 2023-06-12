import logo from './logo.svg';
import React, {Component} from 'react';
import TOC from './components/TOC.js';
import Content from './components/Content.js';
import Subject from './components/Subject.js';
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

function App() {
  return (
    <div className="App">
      <Subject title="WEB" sub="world wide web!"></Subject>
      <TOC></TOC>
      <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
    </div>
  );
}

export default App;
