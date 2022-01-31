import {axios} from "axios"
import {useState} from "react"
import "./register.css";
import { Link } from "react-router-dom";

export default function Register() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)

  const handleSubmit = async (e)=>{
    e.preventDefault();
    setError(false)
    try{
      const res = await axios.post("/auth/register", {
      username,
      email,
      password,
    });
    res.data && window.location.replace("/login")
    }catch(err){
      setError(true)
    }
    
  }
  return (
    <div className=" register">
      <span className="registerTitle">Register</span>
      <form action="" className="registerForm" onSubmit={handleSubmit}>
      <label>Username</label>
        <input
          style={{textAlign:"center"}}
          autoComplete="true"
          type="text"
          placeholder="Insert your Username..."
          onChange={e=>setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          style={{textAlign:"center"}}
          autoComplete="true"
          type="email"
          className="registerInput"
          placeholder="Insert your Email..."
          onChange={e=>setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          style={{textAlign:"center"}}
          autoComplete="true"
          type="password"
          className="registerInput"
          placeholder="Insert your Password"
          onChange={e=>setPassword(e.target.value)}
        />
        <button className="registerButton" type="submit">Register Now</button>
      </form>
      <button className="registerLoginButton">
        <Link className="link" to="/login">
          Login
        </Link>
      </button>
      {error &&
        <span style={{marginTop:"10px"}}>Something went wrong!</span>
      }
    </div>
  );
}
