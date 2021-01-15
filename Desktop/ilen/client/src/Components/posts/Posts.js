import {React,useEffect} from 'react'
import {getPosts} from '../../actions/post'
import { useSelector,useDispatch} from 'react-redux'
import { Fragment } from 'react';
import {PostItem} from './PostItem'
import Spinner from '../layout/spinner'
import { PostForm } from './PostForm';

const Posts = () => {
const dispatch = useDispatch()
const posts = useSelector(state => state.post.posts)
const loading = useSelector(state => state.post.loading)
    useEffect(() => {
     dispatch(getPosts())    
             
    }, [getPosts]) 

    return   loading? <Spinner/>:(
    
    <Fragment>
            <p className='lead'>
            <i className='fas fa-user'></i>welcome to the community </p>
            <PostForm/>
            <div className='posts'>
            {posts.map(post=> (<PostItem key={post._id} post={post}/>))}
              </div>
            
    </Fragment>)
    

     }
      export default Posts