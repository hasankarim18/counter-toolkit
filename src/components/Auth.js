import classes from './Auth.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../store/index'
import { useState } from 'react'


const Auth = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  const loginHandler = () => {
    dispatch(authActions.login())
  }


  const emailChangeHandler = event => {
    setEmail(event.target.value)
  }

  const passwordChangeHandler = event => {
    setPassword(event.target.value)
  }

  const onSubmitHandler = (event) => {
    event.preventDefault()

    console.log(email, password)
  }



  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={onSubmitHandler} >
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input
              onChange={emailChangeHandler}
              value={email}
              type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input
              value={password}
              onChange={passwordChangeHandler}
              type='password' id='password' />
          </div>
          <button type='submit' onClick={loginHandler} >Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
