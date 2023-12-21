import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useUser } from './contexts/user';
import { Service } from './domain/services/service';
import { ENV_REGION } from './constants/environment.constant';

function App() {
  const region = ENV_REGION;
  const { user, setUser } = useUser();
  
  const service = new Service[region]({ user, setUser });
  
  return (
    <div className="App">
      {service.render()}
    </div>
  );
}

export default App;
