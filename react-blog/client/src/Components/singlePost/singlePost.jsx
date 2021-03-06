import { axios } from "axios";
import { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { Context } from "../../contextApi/Context";
import "./singlePost.css";
import { Link } from "react-router-dom";

export default function SinglePost() {
  const { user } = useContext(Context);
  const PF = "localhost:3000/images/";
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState("");

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts" + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPost();
  }, [path]);
  const handleDelete = async () => {
    try {
      await axios.delete(`posts/${post._id}` + path, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) {}
  };
  const handleUpdate = async () => {
    try {
      await axios.put(`posts/${post._id}` + path, {
        username: user.username,
          desc,
          title,
      });
      setUpdateMode(false)
    } catch (err) {}
  }
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img src={PF + post.photo} alt="" className="singlePostImg" />
        )}
        {updateMode ? (
          <input
            type="text"
            vale={title}
            className="singlePostTitleInput"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="singlePostTitle">
            Author: {title}
            {post.username === user?.username && (
              <div className="singlePostEdit">
                <i
                  class="singlePostIcon far fa-edit"
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i
                  class="singlePostIcon far fa-trash-alt"
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </h1>
        )}

        <div className="singlePostInfo">
          {" "}
          <span className="singlePostAuthor">
            Author:
            <Link to={`/?user=${post.username}`} className="link">
              <b>{post.username}</b>
            </Link>
          </span>
          <span className="singlePostDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        {updateMode ? (
          <textarea
            className="singlePostDescInput"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <p className="singlePostDesc">{desc}</p>
        )}
        {
          updateMode && 
          <button className="singlePostButton" onClick={handleUpdate}>
          Update
        </button>
        }
        
      </div>
    </div>
  );
}
