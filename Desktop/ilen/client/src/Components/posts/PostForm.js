
import {React,useState} from 'react'
import { useDispatch} from 'react-redux'
import {addPost} from '../../actions/post'
export const PostForm = () => {
const dispatch = useDispatch()
const  [text,setText] = useState('')
const handleChange=(e)=>{
    setText(e.target.value)
  }
  
const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(addPost(text));
    setText('')

}
    return (
        <div class="post-form">
        <div class="bg-primary p">
          <h3>Say Something...</h3>
        </div>
        <form class="form my-1">
          <textarea
            name="text"
            cols="30"
            rows="5"
            onChange={handleChange}
            placeholder="Create a post"
            required
          ></textarea>
          <input onClick={handleSubmit} type="submit" class="btn btn-dark my-1" value="Submit" />
        </form>
      </div>
    )
}
