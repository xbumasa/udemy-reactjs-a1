import React from 'react';
import './UserOutput.css'

const UserOutput = props => {
  return (
    <div class="UserOutput">
      <p>{props.userName}</p>
      <p>FREE TEXT</p>
    </div>
  );
}

export default UserOutput;
