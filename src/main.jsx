import './index.css'
import { useSelector } from 'react-redux';
import { store } from './store/store';
import TodoApp from './components/TodoApp';
import Login from './components/Login';
// import App from './App.jsx'

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return isAuthenticated ? <TodoApp /> : <Login />;
};

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default AppWrapper;