import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {useParams} from 'react-router';
import './App.css';

const Home = (props) => {
  return (
    <h1 style={{ color: props.textcolor }} >Welcome</h1>
  );
}

const NumberOrWord = (props) => {  
  const {input} = useParams();
  if (isNaN(+input)) {
    return (
      <h1>The word is: {input}</h1>
    );
  } else {
    return (
      <h1>The number is: {input}</h1>
    );
  }
}

const ThreeParams = (props) => {
  const {word, textcolor, bgcolor} = useParams();

  return (
    <h1 style={{backgroundColor: bgcolor, color: textcolor}}>The word is: {word}</h1>
  );
}


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home textcolor="blue" />}  />
        <Route path="/:input" element={<NumberOrWord />}  />
        <Route path="/:word/:textcolor/:bgcolor" element={<ThreeParams />}  />
      </Routes>
    </div>
  );
}

export default App;
