import axios from "axios";

export const getService = async () =>{
    const response = await axios.get("/api/todo/");  // get for read

    // const data = await response.json();    // axios use krne pr hme json me convert nhi krna pdta
   
    return response.data;   // kyuki already object ke form me ata he data usme se lena hota he
}

export const addData = async (formData) =>{
    const response = await axios.post("/api/todo/",formData);  // post for create + add
    return response.data;
}

export const deleteData = async (_id) =>{
    const response = await axios.delete("/api/todo/" + _id);
    return response.data;
}


export const updateItem = async (updatedData) =>{
    // console.log(updatedData);                       // ye updatedData mil raha he ya nhi dekhne ke liye
    const response = await axios.put("/api/todo/"+ updatedData._id,updatedData);
    return response.data;
}