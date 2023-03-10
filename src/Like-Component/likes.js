import { useState, useEffect } from "react";
import liked from "../Images/liked.png";
import unliked from "../Images/unliked.png";
import "./likes.css";

const Like = ({ blogTitle }) => {

    const [like, setLike] = useState(false);
    const [no_Of_Likes, set_no_of_likes] = useState(0);

    const data = new FormData();
    data.append("title", blogTitle);

    function handleLike() {
        fetch("https://zeesblog.onrender.com/likes/post", {
            method: "POST",
            credentials:"include",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams(data)
        }).then(function () {
            setLike((like) => !like);
        })
    }

    function handleUnLike() {
        fetch("https://zeesblog.onrender.com/likes/delete", {
            method: "DELETE",
            credentials:"include",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams(data)
        }).then(function () {
            setLike((like) => !like);
        })
    }

    useEffect(() => {
        fetch(`https://zeesblog.onrender.com/likes/${blogTitle}`, {
            method: "GET",
            credentials: "include"
        }).then((value) => value.json()).then(function(data){
            set_no_of_likes(data);
        });
    }, [like, blogTitle, no_Of_Likes]);

    return (
        <div className="like-container">
            <button onClick={like ? handleUnLike : handleLike}> <img className={like ? 'liked' : 'unliked'} src={like ? liked : unliked} alt="" /></button>
             <p>{no_Of_Likes}</p>
        </div>
    );
}

export default Like;