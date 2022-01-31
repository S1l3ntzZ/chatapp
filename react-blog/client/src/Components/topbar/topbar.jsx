import { Link } from "react-router-dom";
import {useContext} from "react"
import "./topbar.css";
import {Context} from "../../contextApi/Context"

export default function TopBar() {
  const {user, dispatch} = useContext(Context)
  const PF = "http://localhost:3000/images"
  const handleLogout = () => {
    dispatch({type:"LOGOUT"})
  }
  return (
    <div className="top">
      <div className="top">
        <div className="topLeft">
          <i className="topIcon fab fa-facebook"></i>
          <i className="topIcon fab fa-twitter"></i>
          <i className="topIcon fab fa-pinterest-square"></i>
          <i className="topIcon fab fa-instagram-square"></i>
        </div>
        <div className="topCenter">
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/">
                Home
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/contact">
                Contact
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/write">
                Write
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/">Logout</Link>
            </li>
            <li className="topListItem" onClick={handleLogout}>{user && "LOGOUT"}</li>
          </ul>
        </div>
        <div className="topRight">
          
          {user ? (
          <Link className="link" to="/settings">
            <img
              className="topImg"
              src={PF+user.profilePic}
              alt=""
            />
          </Link>
          
          ) : (
            <ul className=" topList">
              <li className="topListItem">
                <Link className="link" to="/login">
                  Login
                </Link>
              </li>
              <li className="topListItem">
                <Link className="link" to="/register">
                  Register
                </Link>
              </li>
            </ul>
          )}
          <i className="topIcon fab fa-blogger-b"></i>
          <i className="topSearchIcon fas fa-search"></i>
        </div>
      </div>
    </div>
  );
}
