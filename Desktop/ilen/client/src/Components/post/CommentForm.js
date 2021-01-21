
import {addComment} from '../../actions/post'
import {React,useState} from 'react'
import { useDispatch} from 'react-redux'
export const CommentForm = ({postId}) => {
    const dispatch = useDispatch()
const  [text,setText] = useState('')
const  [formData,setFormData] = useState({})
const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(addComment(postId,{...formData,text}));

    setText('')
}
    return (
        <div class="post">
        <div class="bg-primary p">
        </div>
        <form class="form my-1">
          <input className='commentinput'
            name="text"
            value={text}
            onChange={(e)=>setText(e.target.value)}
            placeholder="Add your comment"
            required
          ></input>
          <input onClick={handleSubmit} type="submit" class="btn btn-dark my-1" value="Submit" />
        </form>
      </div>
    )
}


