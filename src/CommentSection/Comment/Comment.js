import './Comment.css';

const Comment = ({ comments }) => {
    console.log(comments);
    return (
        <div className="comment-wrapper">
            <p>({comments.length}) comments</p>
            {comments.map((comment) => (
                <div className="comment-stn" key={comment.id}>
                    <h3>{comment.username}</h3>
                    <p>{comment.body}</p>
                </div>
            ))}
        </div>
    );
}
//make id key value pair

export default Comment;