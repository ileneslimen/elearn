import React ,{Fragment,useEffect}from 'react'
import { useSelector,useDispatch} from 'react-redux'
import Spinner from '../layout/spinner'
import {getPost} from '../../actions/post'
import {Link} from 'react-router-dom'
import { PostItem } from '../posts/PostItem'
import { CommentForm } from '../post/CommentForm'
import { CommentItem } from '../post/CommentItem'

 const Post = ({match}) => {
    const dispatch = useDispatch()
    const post= useSelector(state => state.post.post)
    const loading= useSelector(state => state.post.loading)
    useEffect(() => {
        dispatch(getPost(match.params.id))
    }, [])
    return loading || post===null ? (<Spinner/>):(  <Fragment>
        <Link to='/posts' className='btn'> Back To Posts</Link> <PostItem post={post} showActions={false}/>
        <CommentForm postId={post._id} />
        <div className='comments'>
        {post.comment.map(comment=>
           ( <CommentItem key={comment._id} comment={comment} postId={post._id} />) )}
       </div>
       </Fragment>
    )}
export default Post