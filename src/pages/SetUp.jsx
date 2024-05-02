import { faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Form, redirect } from 'react-router-dom'
import { useState } from 'react'

const SetUp = () => {

    const [username, setUsername] = useState('');

    const handleUsernameInput = (e) => {
        setUsername(e.target.value);
    }

  return (
    <div className='h-[80%] w-full flex flex-col justify-center pl-10 '>
        <div className='w-full flex text-5xl text-theme-200 font-bold flex-col'>
            <h1 className='text-6xl text-black mb-5'>The Budget Tracker</h1>
            <h1 className=''>Save Your Money,</h1>
            <h1>Track Your Budget Now</h1>
        </div>
        <div className='h-auto w-full text-4xl mt-10 '>
            <Form method='POST' action='/logIn' className='flex flex-col justify-center items-start h-48 w-4/12  gap-8'>
                <input value={username} name='username' onChange={handleUsernameInput} type="text" placeholder='Enter your name' className='p-3 placeholder:text-gray-300 bg-theme-200 rounded-2xl'/>
                <button type='submit' className='bg-black text-white text-2xl rounded-xl p-3 flex gap-2 justify-center items-center hover:text-gray-300 transition-hover duration-150 active:border-2 border-black'>
                    <FontAwesomeIcon icon={ faUserGroup } />
                    <span>Create A User</span>
                </button>
            </Form>
        </div>
    </div>
  )
}

export default SetUp
