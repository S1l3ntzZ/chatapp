import "./settings.css";
import SideBar from "../sidebar/sidebar";

export default function settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update your Form</span>
          <span className="settingsDeleteTitle">Delete your Form</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt=""
              className="settingsImg"
            />
            <label htmlFor="fileInput">
            <i className="settingsPPIcon fas fa-user"></i>
            </label>
            <input type="file" id="fileInput" style={{display:"none"}}/>
          </div>
          <label>UserName</label>
          <input type="text" placeholder="Name"/>
          <label>Email</label>
          <input type="email" placeholder="Email"/>
          <label>Password</label>
          <input type="password" placeholder="Name"/>
          <button className="settingsSubmit">Updatew</button>
        </form>
        <SideBar />
      </div>
    </div>
  );
}
