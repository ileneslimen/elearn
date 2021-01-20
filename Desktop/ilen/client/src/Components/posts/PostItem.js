import React from 'react'
import { Link} from 'react-router-dom';
import { useSelector,useDispatch} from 'react-redux'
import Moment from 'react-moment'
import {addLike,deleteLike,deletePost} from '../../actions/post'


import { Fragment } from 'react';
export const PostItem = ( { post,showActions}) => {
    const  dispatch = useDispatch()
     const auth = useSelector(state => state.auth)
   return ( <div className="post">
        <div className='post1'>
          <Link to={`/profile/${ post && post.user}`}>
            <img
              className="round-img"
              src={post&& post.avatar}
              alt=""
            />
            <h4>{post && post.name}</h4>
          </Link>
        
        </div>
        <p className="post-date">
              Posted on <Moment format='YYYY/MM/DD'>{post && post.date}</Moment>
          </p>
        <div>
          <h2 className="my-1">
          {post&& post.text}
          </h2>
          
          {showActions && 
           <Fragment><button  onClick={()=>dispatch(addLike(post && post._id)) }type="button" class="btn">
            <i class="fas fa-thumbs-up"></i>{'  '}
           {post&& post.likes.length>0 && ( <span>{post.likes.length}</span>)}
          </button>
          <button  onClick={()=>dispatch(deleteLike(post&& post._id))} type="button" class="btn ">
            <i className="fas fa-thumbs-down"></i>Dislike</button>
          <Link to={`/post/${post&& post._id}`} class="btn btn-primary">
            Discussion{' '} 
            {post&& post.comments.length>0 &&(<span class='comment-count'>{post&& post.comments.length}</span>)}
          </Link>
           {auth&&!auth.loading && post.user===auth.user._id && ( 
          <button onClick={()=>dispatch(deletePost(post&& post._id))}     
          type="button"
          className="btn btn-danger" id='deletebtn'
        >
          <i className="fas fa-times"></i>
        </button>
         )} 
        </Fragment>
         } 
          
        </div>
      </div>

    )
}
PostItem.defaultProps={
    showActions:true
}