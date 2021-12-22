import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { signUp } from '../../store/session';
import "./Form.css";


const SignUpForm = () => {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([])
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (password === confirmPassword) {
      const data = await dispatch(signUp(username, password));
    } else {
      const valErrors = [...errors, "Passwords must match."]
      setErrors(valErrors);
    }
  };

  return (
    <div className="form__wrapper">
      <form onSubmit={handleSignUp}> 
        <div className="form__header">
          <h1>Sign up</h1>
        </div>
        <div className="errors">
          {errors?.map((error) => (
            <div key={error}>・{error}</div>
          ))}
        </div>
        <div className="form__input">
          <input 
              type="text"
              name="username"
              placeholder="Please Type Your Username..."
              value={username}
              onChange={(e) => setUsername(e.target.value)}
          >
          </input>
        </div>
        <div className="form__input">
          <input
              type="password"
              name="password"
              placeholder="Input PassWord..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
          >
          </input>
        </div>
        <div className="form__input">
          <input
              type="password"
              name="confirm_password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
          >
          </input>
        </div>
        <div className='form__button'>
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  )
};

export default SignUpForm;