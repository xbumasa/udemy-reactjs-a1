import React from 'react';

const UserInput = props => {
  const css = {
    color: 'red',
    fontWeight: 'bold',
    border: '2px solid #eee'
  };
  
  return (
    <div class="UserInput">
      <label>Username:</label>
      <input style={css} type="text" value={props.current} onChange={props.change}/>
    </div>
  );
}

export default UserInput;
