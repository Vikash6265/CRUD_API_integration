import { LinearProgress, List, Typography} from '@mui/material'
import React, { useEffect } from 'react'
import ListGroupItem from './ListGroupItem'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../features/feedback/feedbackSlice'

const ListGroup = () => {

  const {isLoading,isError,isSuccess,allfeedback} = useSelector((state)=>state.feedback)
  
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getData())
  },[]);

  if(isLoading){
    return <LinearProgress sx={{marginTop:"10px"}}/>
  }

  if(isError){
    return <Typography variant='h5' color='error'>Something Went Wrong...</Typography>
  }

  if(allfeedback.length === 0)
  {
    return <Typography variant='h5' align='center' color='primary' sx={{paddingTop:"50px"}}>No Data Yet !</Typography>
  }

  return (
    <List sx={{paddingTop:'30px'}}>
        {
          allfeedback.map((feedback)=><ListGroupItem key={feedback._id} feedback={feedback}/>)
        }
    </List>
  )
}

export default ListGroup;
