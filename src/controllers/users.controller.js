import { asynchandler } from "../utils/asynchandler";


const registerUser=asynchandler(async (req,res)=>{})
const loginUser=asynchandler(async (req,res)=>{})
const logoutUser=asynchandler(async (req,res)=>{})

export {
    registerUser,
    loginUser,
    logoutUser
}
