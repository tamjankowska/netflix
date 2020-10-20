import React from 'react';
import Faq from './components/Faq';

import './App.css';

function App() {
  return (
    <div className = "wrapper">
      <h1>Frequently Asked Questions</h1>
      <Faq
        question = "What is Netflix?"
        plus = "+"
      />
      <Faq
        question = "How much does Netflix cost?"
        plus = "+"
      />
      <Faq
        question = "Where can I watch?" 
        plus = "+"
      />
      <Faq
        question = "How do I cancel?"
        plus = "+"
      />
      <Faq
        question = "What can I watch on Netflix?"
        plus = "+"
      />
      <Faq
        question = "How does the free trial work?"
        plus = "+"
      />
      <h3 id = "freeTrial">TRY 30 DAYS FREE {">"}</h3>

    </div>


  );
}

export default App;
