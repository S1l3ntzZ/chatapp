import "./register.css";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className=" register">
      <span className="registerTitle">Register</span>
      <form action="" className="registerForm">
        <label>Email</label>
        <input
          style={{textAlign:"center"}}
          autoComplete="true"
          type="email"
          className="registerInput"
          placeholder="Insert your Email..."
        />
        <label>Password</label>
        <input
          style={{textAlign:"center"}}
          autoComplete="true"
          type="password"
          className="registerInput"
          placeholder="Insert your Password"
        />
        <button className="registerButton">Register Now</button>
      </form>
      <button className="registerLoginButton">
        <Link className="link" to="/login">
          Login
        </Link>
      </button>
    </div>
  );
}
