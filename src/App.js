import { Fragment } from 'react';
import Counter from './components/Counter';
import store from './store';
import { Provider } from 'react-redux'
import Header from './components/Header'
import Auth from './components/Auth'
import { useSelector } from 'react-redux'
import UserProfile from './components/UserProfile';

function App() {

  const isAuthenticated = useSelector(state => state.authReducer.isAuthenticated)




  return (
    <Fragment>
      <Header />
      {
        !isAuthenticated ? <Auth /> : <UserProfile />
      }

      <Counter />
    </Fragment>
  );
}

export default App;
