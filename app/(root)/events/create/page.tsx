import EventForm from "@/components/shared/EventForm"
import { cookies } from "next/headers";

const CreateEvent = () => {

  const user=cookies()?.get("userid") as unknown as string
  const userId = user.value as string
  console.log("user",userId)
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h3 className="wrapper h3-bold text-center sm:text-left">Create Event</h3>
      </section>

      <div className="wrapper my-8">
        <EventForm userId={userId} type="Create" />
      </div>
    </>
  )
}

export default CreateEvent