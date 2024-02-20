"use server"

import { cookies } from 'next/headers'
import { getUserById } from "@/lib/actions/user.actions";
import { handleError } from "@/lib/utils";



export async function POST(req:Request) {

  try {
const body=await req.json();
const {userid,pass}=body;
 
   const User=await getUserById(userid,pass);
   cookies().set("userid",User[0]._id);
   return Response.json({"success":true,"userid":User[0]._id});
    
  } catch (error) {
    console.log(error);
    handleError(error);
   return Response.json(error);

  }
 

  
}

