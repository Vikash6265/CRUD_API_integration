import { Button, Card, CardContent, TextField, Typography } from '@mui/material'
import React, {  useEffect, useState } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { saveData, updateData } from '../features/feedback/feedbackSlice';

const Form = () => {

  const {edit} = useSelector((state)=>state.feedback)

  const dispatch = useDispatch();

  const [title,setTitle] = useState("");
  const [description,setDescription] = useState("");

  const handleSubmit = (e) =>{
    e.preventDefault();

    edit.isEdit ?
    dispatch(updateData({
      _id : edit.todo._id,
      title,
      description,
    }))
    :
    dispatch(
      saveData({
        title,
        description,
      })
    );

    setTitle("");
    setDescription("");
  }
 
 useEffect(()=>{               // uper hmne edit state kp main feedback se liya fir niche todo jaha edit ke ander jo state hogi use lena he
  setTitle(edit.todo.title);  // todo - edit wale state ka he jaha se title ayega
  setDescription(edit.todo.description);
 },[edit]) 


  return (
    <>
    <Typography variant='h5' align='center' sx={{paddingBlock:'40px'}}>Feedback App</Typography>
    <Card style={{boxShadow:'2px 2px 8px 7px aqua',marginBlock:'15px'}}>
      <CardContent>
      <form onSubmit={handleSubmit}>
      <TextField variant='outlined' label="Enter Title..." fullWidth sx={{marginTop:'20px'}} onChange={(e)=>setTitle(e.target.value)} value={title} required/>
      <TextField variant='outlined' label="Enter Description..." fullWidth sx={{marginTop:'10px'}} onChange={(e)=>setDescription(e.target.value)} value={description} required/>
      <Button variant='contained' fullWidth sx={{marginTop:'15px'}} type='submit'>Save</Button>
    </form>
      </CardContent>
    </Card>
    </>
  )
}

export default Form;
