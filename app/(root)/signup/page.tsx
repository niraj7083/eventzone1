"use client";

import React,{useState} from 'react'
import {useRouter} from 'next/navigation';
import Head from 'next/head';
import { handleError } from '@/lib/utils';


const signin =  () => {
  const router = useRouter()
  const [userid, setuserid] = useState('')
  const [pass, setpass] = useState('')
  const [email, setemail] = useState('')
  const [mobile_no, setmobile_no] = useState('')
  const [fullname, setfullname] = useState('')
  const [date_b, setdate_b] = useState('')
  const [city, setcity] = useState('')
  

  

  const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(userid,pass)
    const data = {fullname,email,userid,pass,mobile_no,city,date_b};
   console.log(data)
    fetch('http://localhost:3000/api/signup', {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        }
        
    }). then(res => res.json()).then(data => {
        console.log(data)
        if (data=="success") {
            router.push('/')
        }
        else {
            console.log(data.error)
            handleError(data.error)
        }
    })
  
       
    
}
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  console.log(e)
    if (e.target.name == 'userid') {
        setuserid(e.target.value)
    }
    else if (e.target.name == 'pass') {
        setpass(e.target.value)
    }
    else if (e.target.name == 'email') {
        setemail(e.target.value)
    }
    else if (e.target.name == 'fullname') {
        setfullname(e.target.value)
    }
    else if (e.target.name == 'city') {
        setcity(e.target.value)
    }
    else if (e.target.name == 'date_b') {
        setdate_b(e.target.value)
    }
    else if (e.target.name == 'mobile_no') {
        setmobile_no(e.target.value)
    }
  
}
  
  return (
    <>
     <Head>
        <title>Registration</title>
        <link rel="icon" href="/whitelogo.png" type="image/x-icon" className=''/>
      </Head>
      
<div className="bg-gray-100 flex items-center justify-center overflow-auto">
    <div className="bg-white p-8 mt-8 mb-8 rounded-lg shadow-lg max-w-sm  w-full">
        <div className="flex justify-center">
            <span className="inline-block bg-gray-200 rounded-full p-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4"/></svg>
            </span>
        </div>
        
        <h2 className="text-gray-600 font-serif text-center text-4xl mt-8 mb-6"> Register</h2>
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label htmlFor="fullName" className="block text-gray-700 text-sm font-semibold mb-2">Full Name *</label>
                <input type="text" id="fullname" onChange={handleChange} name='fullname' value={fullname} className="htmlForm-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500" required placeholder="fullname"/>
            </div>
           
            <div className="mb-4">
                <label htmlFor="em" className="block text-gray-700 text-sm font-semibold mb-2">Email *</label>
                <input type="email" id="email" onChange={handleChange} name='email' value={email} className="htmlForm-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500" required placeholder="email"/>
            </div>
           
            <div className="mb-4">
                <label htmlFor="userid" className="block text-gray-700 text-sm font-semibold mb-2">User id*</label>
                <input type="text" id="userid" onChange={handleChange} name='userid' value={userid} className="htmlForm-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500" required placeholder="user id"/>
            </div>
            <div className="mb-6">
                <label htmlFor="password" className="block text-gray-700 text-sm font-semibold mb-2">Password *</label>
                <input type="password" onChange={handleChange} autoComplete='true' value={pass} name='pass' id="pass" className="htmlForm-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500" required placeholder="••••••••"/>
                <p className="text-gray-600 text-xs mt-1">Must contain 1 uppercase letter, 1 number, min. 8 characters.</p>
            </div>
           
            <div className="mb-4">
                <label htmlFor="mobile_no" className="block text-gray-700 text-sm font-semibold mb-2">Mobile NO *</label>
                <input type="tel"  id="mobile_no" onChange={handleChange} name='mobile_no' value={mobile_no} className="htmlForm-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500" required placeholder="mobile_no"/>
            </div>
            <div className="mb-4">
                <label htmlFor="city" className="block text-gray-700 text-sm font-semibold mb-2">City *</label>
                <input type="text" id="city" onChange={handleChange} name='city' value={city} className="htmlForm-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500" required placeholder="city"/>
            </div>
           
            <div className="mb-4">
                <label htmlFor="date_b" className="block text-gray-700 text-sm font-semibold mb-2">Date of Birth *</label>
                <input type="date" id="date_b" onChange={handleChange} name='date_b' value={date_b} className="htmlForm-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500" required placeholder="Date of Birth"/>
            </div>
           
            
            
            <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Register</button>
            <p className="text-gray-600 text-xs text-center mt-4">
                By clicking Register, you agree to accept Apex Financial's
                <a href="#" className="text-blue-500 hover:underline">Terms and Conditions</a>.
            </p>
            <p className="text-gray-600 text-xs text-center mt-4">
            
            <a href={"/signin"} className='text-blue-500 hover:underline'>Login</a>
            </p>
        </form>
    </div>
</div>
    </>
  )
}

export default signin