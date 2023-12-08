import React from 'react'
import { Link } from 'react-router-dom'
import './error.css'


const Error = () => {
  return (
    <>
        <div className='error-box'>
            <h1>404 Error</h1>
            <Link className="btn" to="/">Back to Home</Link>
        </div>
        
    </>
   
  )
}

export default Error