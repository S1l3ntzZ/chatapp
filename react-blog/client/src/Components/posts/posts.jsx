import Post from "../post/post";
import "./posts.css";

export default function Posts({posts}) {
  return (
    <div className="post">
      {posts.map((p)=>(
        <Post posts={p}/>
      ))}
    </div>
  );
}
