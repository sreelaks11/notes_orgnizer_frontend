import axiosInstance from "./axiosinstance";

const axiosservice =async(httMethod,url,reqBody)=>{
try{
    const response=await axiosInstance({
        method:httMethod,
        url,
        data:reqBody
    })
    return response
}
catch(err){
    console.log(err);
    throw err
}
}
export default axiosservice
