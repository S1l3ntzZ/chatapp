import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/10839826/pexels-photo-10839826.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </span>
        <br />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
        aliquam at nulla beatae soluta numquam id tenetur, quasi harum? Cumque
        dolorem inventore temporibus iusto ipsa culpa minima reprehenderit
        exercitationem sunt quo? Maiores incidunt, voluptate blanditiis
        repudiandae ad necessitatibus explicabo expedita!
      </p>
    </div>
  );
}
