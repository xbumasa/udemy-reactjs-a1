import React, { useState } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

const App = props => {
  const [usersState, setUserState] = useState({
    username: 'XBUMASA'
  });
  
  const UsernameHandler = (event) => {
    setUserState({
      username: event.target.value
    })
  }
  
  return (
    <div className="App">
      <UserInput change={UsernameHandler} />
      <UserOutput userName={usersState.username} />
      <UserOutput userName={usersState.username} />
      <UserOutput userName="SEMION SHULMAN" />
    </div>
  );
}

export default App;
