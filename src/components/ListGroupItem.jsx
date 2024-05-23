import React from 'react'
import {Box, Button, ListItem, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch} from 'react-redux';
import { edit, getData, removeData } from '../features/feedback/feedbackSlice';

const ListGroupItem = ({feedback}) => {

  const dispatch = useDispatch();

  const handleDelete = async (_id) =>{
   await dispatch(removeData(_id));
    dispatch(getData());
  }

  const handleEdit = (feedback) =>{
    dispatch(edit(feedback))
  }

  return (
    <ListItem sx={{border:'1px solid #C4C4C4',borderRadius:'5px', marginTop:'10px',flexWrap:'wrap'}}>
            <Box flexGrow={1}>
                <Typography variant='h6' style={{fontWeight:'420'}}>Title :: {feedback?.title}</Typography>
                <Typography variant='h6'style={{fontWeight:'400'}}>Des. :: {feedback?.description}</Typography>
            </Box>

            <Box sx={{marginBlock:'15px'}}>
                <Button variant='outlined' sx={{marginRight:'5px'}} endIcon onClick={()=>handleEdit(feedback)}>Edit {<EditIcon fontSize='small' sx={{paddingLeft:'3px'}}/>}</Button>
                <Button variant='outlined' onClick={()=>handleDelete(feedback._id)} endIcon>Remove {<DeleteIcon fontSize='small' sx={{paddingLeft:'3px'}}/>}</Button>
            </Box>
    </ListItem>
  )
}

export default ListGroupItem;
