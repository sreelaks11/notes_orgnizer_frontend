import axiosservice from "../api/axiosservice";



export const registerAPI=async(registerData)=>{
return await axiosservice('POST','/users',registerData)
}

export const loginAPI=async()=>{
    return await axiosservice('GET','/users',{})
}

export const notesAPI=async(addnotes)=>{
    return await axiosservice('POST','/notes',addnotes)
}

export const getnotesAPI=async()=>{
    return await axiosservice('GET','/notes',{})
}


export const editAPI=async(id,updateddata)=>{
    return await axiosservice('PUT',`/notes/${id}`,updateddata)
}


export const deleteAPI=async(id)=>{
    return await axiosservice('DELETE',`/notes/${id}`,{})
}