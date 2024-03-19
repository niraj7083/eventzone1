"use server";

import { createUser } from "@/lib/actions/user.actions";
import { handleError } from "@/lib/utils";

import { cookies } from "next/headers";


export async function POST(req:Request) {
  try {
    const body=await req.json();
    const {fullname,email,userid,pass,mobile_no,city,date_b}=body;
  const data={fullname,email,userid,pass,mobile_no,city,date_b};
  
    const User=await createUser(data);
    cookies().set("userid",User._id);
    return Response.json({"success":true,"userid":User._id});
  } catch (error) {
    handleError(error);
    return Response.json({"success":false});
  }
}
