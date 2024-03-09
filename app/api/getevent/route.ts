import { getEventById } from "@/lib/actions/event.actions";
import { handleError } from "@/lib/utils";

export async function POST(req:Request) {
    try {
      const body=await req.json();
      const {id}=body;
     console.log(id);
    const event = await getEventById(id);
    
      
      return Response.json(event);
    } catch (error) {
      handleError(error);
      return Response.json("error");
    }
  }