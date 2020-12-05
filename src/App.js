import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

const app = () => {
  return (
    <div className="App">
      <UserInput/>
      <UserOutput/>
      <UserOutput/>
      <UserOutput/>
    </div>
  );
}

export default app;
