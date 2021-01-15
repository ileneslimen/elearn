
import {addComment} from '../../actions/post'
import {React,useState} from 'react'
import { useDispatch} from 'react-redux'
export const CommentForm = ({postId}) => {
    const dispatch = useDispatch()
const  [text,setText] = useState('')
const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(addComment(postId,text));
    setText('')

}
    return (
        <div class="post-form">
        <div class="bg-primary p">
          <h3>Leave a Comment</h3>
        </div>
        <form class="form my-1">
          <textarea
            name="text"
            cols="30"
            rows="5"
            onChange={(e)=>setText(e.target.value)}
            placeholder="Create a post"
            required
          ></textarea>
          <input onClick={handleSubmit} type="submit" class="btn btn-dark my-1" value="Submit" />
        </form>
      </div>
    )
}


