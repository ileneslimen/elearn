import React from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { useDispatch, useSelector } from "react-redux";
import { deleteComment } from "../../actions/post";

export const CommentItem = ({ postId, comment: { _id, text, name, avatar, user, date } }) => {
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
    return (
        <div className="comment bg-white p-1 my-1">
            <div>
                <Link to={`/profile/${user}`}>
                    <img className="round-img" src={avatar} alt="" />
                    <h6>{name}</h6>
                </Link>
            </div>
            <div>
                <p className="my-1">{text}</p>
                <p className="post-date">
                    Commented on <Moment format="YYYY/MM/DD">{date}</Moment>
                </p>
                {!auth.loading && user === auth.user._id && (
                    <button onClick={() => dispatch(deleteComment(postId, _id))} type="button" className="btn btn-danger">
                        {" "}
                        <i className="fas fa-times"></i>
                    </button>
                )}
            </div>
        </div>
    );
};
