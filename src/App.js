import Login from './components/login/login';
import {MainStoreProvider} from './components/MainStoreProvider';
import AppRouter from './components/router/router'
import './App.css'

function App() {
  return (
    <div>
      <AppRouter/>
    </div>
  );
}

export default App;
