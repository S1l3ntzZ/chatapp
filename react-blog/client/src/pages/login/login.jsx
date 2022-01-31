import "./login.css";
import { Link } from "react-router-dom";
import {useRef, useContext} from "react"
import {Context} from "../../contextApi/Context"
import {axios} from "axios"

export default function Login() {
  const userRef = useRef()
  const passwordRef = useRef()
  const emailRef = useRef()
  const {
    dispatch,
    isFetching
  } = useContext(Context)
  const handleSubmit = async(e)=>{
    e.preventDefault()
    dispatch({type:"LOGIN_START"})
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
        email: emailRef.current.value,
      })
      dispatch({type:"LOGIN_SUCCESS", payload: res.data});
    } catch (err) {
      dispatch({type:"LOGIN_FAILURE"});
    }
  };
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form action="" className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          style={{textAlign:"center"}}
          autoComplete="true"
          type="text"
          placeholder="Insert your Username..."
          ref={userRef}
        />
        <label>Email</label>
        <input
          style={{textAlign:"center"}}
          autoComplete="true"
          type="email"
          placeholder="Insert your Email..."
          ref={emailRef}
        />
        <label>Password</label>
        <input
          style={{textAlign:"center"}}
          autoComplete="true"
          type="password"
          placeholder="Insert your Password"
          ref={passwordRef}
        />
        <button className="loginButton" type="submit" disabled={isFetching}>
          <Link className="link" to="/login">
            Login
          </Link>
        </button>
      </form>
      <button className="loginRegisterButton">
        <Link className="link" to="/register">
          Register
        </Link>
      </button>
    </div>
  );
}
