"use client";

import React,{useState} from 'react'
import Head from 'next/head';

import { handleError } from '@/lib/utils';
import { useRouter } from 'next/navigation';



const signin =() => {
    const router = useRouter()

    const [userid, setuserid] = useState('')
    const [pass, setpass] = useState('')

    const handleSubmit =  (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(userid, pass)
        const data = { userid, pass };
        console.log(data)
        let data1 =  fetch('/api/signin', {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }

        }).then(res => res.json()).then(data => {
            console.log(data)
            if (data.success) {
                localStorage.setItem('userid', data.userid)
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

    }

    return (
        <>
            <Head>
                <title>Login</title>
                <link rel="icon" href="/whitelogo.png" type="image/x-icon" className='' />
            </Head>

            <div className="bg-gray-100 flex items-center justify-center h-screen">
                <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
                    <div className="flex justify-center">
                        <span className="inline-block bg-gray-200 rounded-full p-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4" /></svg>
                        </span>
                    </div>

                    <h2 className="text-gray-600 font-serif text-center text-4xl mt-8 mb-6"> Login</h2>
                    <form onSubmit={handleSubmit} >
                        <div className="mb-4">
                            <label htmlFor="fullName" className="block text-gray-700 text-sm font-semibold mb-2">User id</label>
                            <input type="text" id="userid" onChange={handleChange} name='userid' value={userid} className="htmlForm-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500" required placeholder="user id" />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="password" className="block text-gray-700 text-sm font-semibold mb-2">Password *</label>
                            <input type="password" onChange={handleChange} autoComplete='true' value={pass} name='pass' id="pass" className="htmlForm-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500" required placeholder="••••••••" />
                            <p className="text-gray-600 text-xs mt-1">Must contain 1 uppercase letter, 1 number, min. 8 characters.</p>
                        </div>
                        <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Login</button>
                        <p className="text-gray-600 text-xs text-center mt-4">
                            By clicking Register, you agree to accept Apex Financial's
                            <a href="#" className="text-blue-500 hover:underline">Terms and Conditions</a>.
                        </p>
                        <p className="text-gray-600 text-xs text-center mt-4">

                            <a href={"/signup"} className='text-blue-500 hover:underline'>create new accout</a>
                        </p>
                    </form>
                </div>
            </div>
        </>
    )
}


export default signin
