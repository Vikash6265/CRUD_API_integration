import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addData, deleteData, getService, updateItem } from "./feedbackService";

const feedbackSlice = createSlice({
    name : 'feedback',
    initialState : {
        isLoading : false,
        isError : true,
        isSuccess : false,
        allfeedback : [],
        edit : {
            todo : {},
            isEdit : false,
        }
    },
    reducers : {
        edit : (state,action) =>{
            return{
                ...state,
                edit :{
                    todo : action.payload,
                    isEdit : true,
                }
            }
        },
    },
    extraReducers : (builder) =>{
        builder
        .addCase(getData.pending , (state,action)=>{
            state.isLoading = true;
            state.isError = false;
            state.isSuccess = true;
        })
        .addCase(getData.fulfilled , (state,action)=>{
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.allfeedback = action.payload;
        })
        .addCase(getData.rejected , (state,action)=>{
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
        })

        .addCase(saveData.pending , (state,action)=>{
            state.isLoading = true;
            state.isError = false;
            state.isSuccess = false;
        })
        .addCase(saveData.fulfilled , (state,action)=>{
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.allfeedback = [...state.allfeedback,action.payload];
        })
        .addCase(saveData.rejected , (state,action)=>{
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
        })

        .addCase(removeData.pending , (state,action)=>{
            state.isLoading = true;
            state.isError = false;
            state.isSuccess = false;
        })
        .addCase(removeData.fulfilled , (state,action)=>{
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
        })
        .addCase(removeData.rejected , (state,action)=>{
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
        })

        .addCase(updateData.pending , (state,action)=>{
            state.isLoading = true;
            state.isError = false;
            state.isSuccess = false;
        })
        .addCase(updateData.fulfilled , (state,action)=>{
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.allfeedback = state.allfeedback.map(item => item._id === action.payload._id ? action.payload : item );
            state.edit = {todo : {} , isEdit : false};
        })
        .addCase(updateData.rejected , (state,action)=>{
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
        });
    }
});

export const {edit} = feedbackSlice.actions;
export default feedbackSlice.reducer;


export const getData = createAsyncThunk ("FETCH/FEEDBACK", async()=>{
    try {
        return await getService();
    } catch (error) {
        console.log(error);
    }
});


// ADD Data

export const saveData = createAsyncThunk ("ADD/FEEDBACK",async(formData) =>{
   try {
       return await addData(formData);
   } catch (error) {
       console.log(error);
   }
});


//  Remove Data

export const removeData = createAsyncThunk ("REMOVE/FEEDBACK", async(_id)=>{
    try {
        return await deleteData(_id);
    } catch (error) {
        console.log(error);
    }
});


// Update Data

export const updateData = createAsyncThunk("UPDATE/FEEDBACK",async(updatedData)=>{
   try {
    return await updateItem(updatedData);
   } catch (error) {
    console.log(error);
   }
})