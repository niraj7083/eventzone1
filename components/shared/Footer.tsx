import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
      <Link href="/" className="w-36 flex items-center ">
          <Image 
            src="/assets/images/logo.svg" width={68} height={48}
            alt="eventzone logo" 
          />
          <p className="text-4xl font-serif font-semibold">Event<span className="text-blue-600 ">Zone</span></p>
        </Link>

        <p>2024 EventZone. All Rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer