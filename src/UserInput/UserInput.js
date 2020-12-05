import React from 'react';

const UserInput = props => {
  return (
    <div class="UserInput">
      <label>Username:</label>
      <input type="text" value="" onChange={props.change}/>
    </div>
  );
}

export default UserInput;
