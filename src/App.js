import React, { useState } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

const App = props => {
  const [usersState, setUserState] = useState({
    username: 'XBUMASA'
  })
  
  return (
    <div className="App">
      <UserInput/>
      <UserOutput userName={usersState.username} />
      <UserOutput userName={usersState.username} />
      <UserOutput userName={usersState.username} />
    </div>
  );
}

export default App;
