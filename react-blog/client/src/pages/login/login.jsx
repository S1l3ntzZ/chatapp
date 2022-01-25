import "./login.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form action="" className="loginForm">
        <label>Username</label>
        <input
          style={{textAlign:"center"}}
          autoComplete="true"
          type="text"
          placeholder="Insert your Username..."
        />
        <label>Email</label>
        <input
          style={{textAlign:"center"}}
          autoComplete="true"
          type="email"
          placeholder="Insert your Email..."
        />
        <label>Password</label>
        <input
          style={{textAlign:"center"}}
          autoComplete="true"
          type="password"
          placeholder="Insert your Password"
        />
        <button className="loginButton">
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
