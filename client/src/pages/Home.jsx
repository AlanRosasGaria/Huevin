import React from 'react';

import {  Possibility, Features, WhatGPT3, Header } from '../containers';
import {  Brand } from '../components';
import '../css/App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Header />
    </div>
    <Brand />
    <WhatGPT3 />
    <Features />
    <Possibility />
  </div>
);

export default App;
