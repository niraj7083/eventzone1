
import { IEvent } from '@/lib/database/models/event.model'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import Checkout from './Checkout'
import { cookies } from 'next/headers'



const CheckoutButton = ({ event }: { event: IEvent }) => {

  const userId = cookies()?.get("userid")?.value as unknown as string
  const hasEventFinished = new Date(event.endDateTime) < new Date();

  return (
    <div className="flex items-center gap-3">
      {hasEventFinished ? (
        <p className="p-2 text-red-400">Sorry, tickets are no longer available.</p>
      ) : (
        <>
 {!cookies().has("userid") &&
          <Button asChild className="button rounded-full" size="lg">
            <Link href="/signin">
              Get Tickets
            </Link>
            </Button>}


            {cookies().has("userid") &&
          <Checkout event={event} userId={userId} />
      }
        </>
      )}
    </div>
  )
}


export default CheckoutButton