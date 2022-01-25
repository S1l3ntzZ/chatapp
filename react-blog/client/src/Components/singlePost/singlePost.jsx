import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.pexels.com/photos/2351722/pexels-photo-2351722.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit.
          <div className="singlePostEdit">
            <i class="singlePostIcon far fa-edit"></i>
            <i class="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Pascal</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
          <p className="singlePostDesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            assumenda magnam sequi sint in ducimus! Provident nihil obcaecati
            animi voluptatum quidem. Illo deleniti numquam praesentium voluptas
            suscipit optio repudiandae fugiat repellat nesciunt quo quaerat quia
            modi, autem quam corrupti laborum?
          </p>
        </div>
      </div>
    </div>
  );
}
