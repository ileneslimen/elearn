import React from 'react'
import { Link} from 'react-router-dom';
import { useSelector,useDispatch} from 'react-redux'
import Moment from 'react-moment'
import {addLike,removeLike,deletePost} from '../../actions/post'
import { Fragment } from 'react';
export const PostItem = ({post}) => {
    const  dispatch = useDispatch()
    const showActions=true
    const {_id,name,text,date,avatar,user,likes,comments}=post
    const auth = useSelector(state => state.auth)
    ( <div className="post bg-white p-1 my-1">
        <div>
          <Link to={`/profile/${user}`}>
            <img
              class="round-img"
              src={avatar}
              alt=""
            />
            <h4>{name}</h4>
          </Link>
        </div>
        <div>
          <p class="my-1">
          {text}
          </p>
           <p class="post-date">
              Posted on <Moment format='YYYY/MM/DD'>{date}</Moment>
          </p>
          {showActions && <Fragment><button  onClick={()=>dispatch(addLike(_id))} type="button" class="btn btn-light">
            <i class="fas fa-thumbs-up"></i>{' '}
           {likes.length>0&&( <span>{likes.length}</span>)}
          </button>
          <button  onClick={()=>dispatch(removeLike(_id))} type="button" class="btn btn-light">
            <i class="fas fa-thumbs-down"></i>
          </button>
          <Link to={`/post/${_id}`} class="btn btn-primary">
            Discussion{' '} 
            {comments.length>0 &&(<span class='comment-count'>{comments.length}</span>)}
          </Link>
          {!auth.loading && user===auth.user._id && (
          <button onClick={()=>dispatch(deletePost(_id))}     
          type="button"
          class="btn btn-danger"
        >
          <i class="fas fa-times"></i>
        </button>)}</Fragment>}
          
        </div>
      </div>

    )
}
PostItem.defaultProps={
    showActions:true
}