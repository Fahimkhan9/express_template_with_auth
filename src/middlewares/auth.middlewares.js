import jwt from 'jsonwebtoken';
import {asynchandler} from '../utils/asynchandler.js';
import {ApiError}from '../utils/apierror.js'
import {User} from '../models/user.models.js'


export const verifyJWT=asynchandler(async (req, _, next) => {
const token=req.cookies.token ||req.header('Authorization')?.replace(' Bearer',"")
if(!token){
    throw new ApiError(401,'Unauthorized')

}
try {
    const decodedtoken=await jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)
    const user=await User.findById(decodedtoken.id).select('-password -refreshToken')
    if(!user){
        throw new ApiError(401,'Unauthorized')
    }
    req.user=user
    next()
} catch (error) {
    console.log(error);
    
    throw new ApiError(401,error.message||"Invalid access token")
    
}
})