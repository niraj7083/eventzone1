'use server'


import { handleError } from "@/lib/utils";
import { cookies } from "next/headers";



export async function POST(req:Request) {

    try {
  const body=await req.json();
  const {userid}=body;
    
     cookies().delete("userid")
     return Response.json({"success":true})
      
    } catch (error) {
      console.log(error);
      handleError(error);
     return Response.json(error);
  
    }
   
  
    
  }
  
