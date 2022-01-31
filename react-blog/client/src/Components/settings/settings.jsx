import axios from "axios"
import "./settings.css";
import SideBar from "../sidebar/sidebar";
import { useContext, useState } from "react";
import { Context } from "../../contextApi/Context";

export default function Settings() {
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:3000/images"
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({type:"UPDATE_START"})
    const updatedUser = {
      userid: user._id,
      username,
      email,
      password,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
      try {
        await axios.post("/upload", data);
        
      } catch (err) {}
      try {
        const res = await axios.put("/users/" + user._id, updatedUser);
        setSuccess(true)
        dispatch({type:"UPDATE_SUCCESS", payload: res.data})
      } catch (error) {
        dispatch({type:"UPDATE_FAILURE"})
      }
    }
  };
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update your Form</span>
          <span className="settingsDeleteTitle">Delete your Form</span>
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img src={file ? URL.createObjectURL(file) : PF+user.profilePic} alt="" className="settingsImg" />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon fas fa-user"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} onChange={(e) => setFile(e.target.files[0])}/>
          </div>
          <label>UserName</label>
          <input type="text" placeholder={user.username} onChange={(e) => setUsername(e.target.value)}/>
          <label>Email</label>
          <input type="email" placeholder={user.email} onChange={(e) => setEmail(e.target.value)}/>
          <label>Password</label>
          <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
          <button className="settingsSubmit" type="submit">Update</button>
          {success && <span style={{color:"green", textAlign:"center", margin:"20px"}}>Profile has been updated</span>}
        </form>
        <SideBar />
      </div>
    </div>
  );
}
