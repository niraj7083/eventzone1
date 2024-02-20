
import { IEvent } from '@/lib/database/models/event.model'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import Checkout from './Checkout'



const CheckoutButton = ({ event }: { event: IEvent }) => {

  const userId = event.organizer._id.toString()
  console.log("user",userId)

  console.log(userId)
  const hasEventFinished = new Date(event.endDateTime) < new Date();

  return (
    <div className="flex items-center gap-3">
      {hasEventFinished ? (
        <p className="p-2 text-red-400">Sorry, tickets are no longer available.</p>
      ) : (
        <>

          <Button asChild className="button rounded-full" size="lg">
            <Link href="/sign-in">
              Get Tickets
            </Link>
          </Button>



          <Checkout event={event} userId={userId} />

        </>
      )}
    </div>
  )
}


export default CheckoutButton