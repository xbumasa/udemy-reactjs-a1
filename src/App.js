import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

const app = () => {
  return (
    <div className="App">
      <UserInput/>
      <UserOutput userName="UserA" />
      <UserOutput userName="UserB" />
      <UserOutput userName="UserC" />
    </div>
  );
}

export default app;
